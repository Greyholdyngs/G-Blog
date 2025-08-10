import AOS from 'aos';
import { useEffect, useState } from 'react';

const Content = () => {

    const [postTitle, setPostTitle] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [oldPost, setOldPost] = useState("");
    const [error, setError] = useState({postTitle:"", bodyText:""});
    
    const [editPostId, setEditPostId] = useState(null);
    const [editPostTitle, setEditPostTitle] = useState("");
    const [editBodyText, setEditBodyText] = useState("");

    useEffect(
        () => {
            AOS.refresh(); // Refresh AOS to ensure animations are applied correctly
        }
    )
    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setOldPost(data))
        }, []
    )

    const handlePost = () => {
        let hasError = false;

        let theError = {postTitle:"", bodyText:""};

        if (!postTitle.trim()) {
            theError.postTitle = "Please write a title...."
            hasError = true
        }
        if (!bodyText.trim()) {
            theError.bodyText = "File in a text in the body"
            hasError = true
        }
        setError(theError);
        if (hasError) {
            return;
        }

        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: "POST",
                headers: {"Content-Type" : 'application/json'},
                body: JSON.stringify({
                    title: postTitle,
                    body: bodyText,
                    userId: 1,
                })
            }
        )
        .then((res) => res.json())
        .then((update) => {
            setOldPost([update, ...oldPost])
            setPostTitle("");
            setBodyText("");
        })

    }

    const handleBodyChange = (e) => {
        setBodyText(e.target.value);
    }
    const handlePostTitle = (e) => {
        setPostTitle(e.target.value);
    }

    const handleEdit = (id) => {
        const postEdit = [...oldPost];//this isn't working
        if (!postEdit) return;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: editPostTitle,
                body: editBodyText,
            })
        })
        .then(response => response.json())
            .then((edited) => {
                setOldPost(oldPost.map(item => item.id === id ? {...item, ...edited} : item));
            })
            setEditPostId()
    }
    const handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setOldPost(oldPost.filter(item => item.id !== id));
        })
    }

    return (
        <div data-aos="fade-up" className='lg:px-20 md:px-15 sm:px-10 px-5'>
            <div >
                <label className={`flex flex-col mt-10 rounded-xl md:pl-10 sm:pl-7 pl-5 py-5 shadow-lg focus-within:shadow-none
                                ${error.postTitle ? "border-2 border-red-500" : " border-1 border-gray-200" }`} 
                                htmlFor="">
                    <input type="text" 
                            placeholder='Type Your Heading Here'
                            value={postTitle}
                            onChange={handlePostTitle}
                            className={`focus:outline-none border-b py-2 lg:w-150 sm:w-100 w-70
                                    ${error.postTitle ? "border-red-500" : "border-gray-300"}`}
                    />
                    {
                        error.postTitle && 
                            <small>{error.postTitle}</small>
                        
                    }
                    <textarea name="" id="" 
                            placeholder='Type Your Body Text Here'
                            value={bodyText}
                            onChange={handleBodyChange}
                            className={`focus:outline-none py-5 
                                        ${error.bodyText ? "" : ""}`}></textarea>
                    {
                        error.bodyText && (
                            <small>{error.bodyText}</small>
                        )
                    }
                </label>
                <div className='flex justify-end'>
                    <button className='cursor-pointer font-semibold text-lg
                                    bg-gray-200 py-3 rounded-lg my-5 w-30 transition-transform ease-in-out hover:scale-105
                                    inline-block
                                    hover:bg-gray-500 hover:text-white hover:shadow-xl duration-500' 
                                    onClick={handlePost}>Post</button>
                </div>
            </div>
            <div data-aos="fade-left">
                {
                    oldPost && oldPost.map((items) => {
                        return (
                            <div data-aos="fade-up" key={items.id}
                                    className='post my-5 px-6 py-7 border-1
                                    border-gray-200 rounded-lg shadow-lg transform
                                    transition-transform duration-1000 ease-in-out hover:scale-105 hover:shadow-xl'>
                                {
                                    editPostId === items.id ? (
                                        <div>
                                            <label className='flex flex-col' htmlFor="">
                                                <input type="text" 
                                                        value={editPostTitle}
                                                        onChange={(e) => setEditPostTitle(e.target.value)}
                                                        className='focus:outline-none border-b py-2
                                                                    lg:w-150 sm:w-100 w-70 border-gray-500'
                                                />
                                                <textarea 
                                                    value={editBodyText}
                                                    onChange={(e) => setEditBodyText(e.target.value)}
                                                    className='focus:outline-none py-2'
                                                ></textarea>
                                            </label>
                                            <div>
                                                <button onClick={() => handleEdit(items.id)} 
                                                        className='bg-blue-500 text-white px-4 py-2 rounded mt-2 mr-4'>
                                                    Save
                                                </button>
                                                <button onClick={() => setEditPostId()}
                                                        className='bg-red-500 text-white px-4 py-2 rounded mt-2'>Cancel</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <h3 className='uppercase md:text-2xl sm:text-xl text-lg font-bold mb-2 transform transition-transform duration-500 ease-in-out hover:scale-90'>
                                                    <strong>{items.title}</strong>
                                                </h3>
                                                <div className='flex space-x-3'>
                                                    <button className='hover:border-b-1 hover:text-black  duration-500 border-gray-500
                                                            cursor-pointer text-gray-500 font-semibold transform hover:-translate-x-2'
                                                            onClick={() => {
                                                                setEditPostId(items.id);
                                                                setEditPostTitle(items.title);
                                                                setEditBodyText(items.body)
                                                            }}> Edit</button>
                                                    <button className='hover:border-b-1 hover:text-black  duration-500 border-gray-500
                                                            cursor-pointer text-gray-500 font-semibold hover:translate-x-2'
                                                            onClick={() => handleDelete(items.id)}> Delete</button>
                                                </div>
                                            </div>
                                            <p>{items.body}</p>
                                        </div>
                                    )
                                }
                               
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Content;