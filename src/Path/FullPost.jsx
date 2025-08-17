import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const FullPost = () => {

    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
        }, [id]
    );
    if (!post) return <p>Loading....</p>

    return (
        <div className=" bg-yellow-100 h-screen">
            <Header />
            <div className="py-15 lg:px-20 md:px-15 sm:px-10 px-5">
                <h1 className="text-3xl font-bold mb-5 text-center uppercase">
                    <strong>{post.title}</strong>
                </h1>
                <p className="text-xl text-center">{post.body}</p>
            </div>
            <Footer />
        </div>
    )
}
export default FullPost;