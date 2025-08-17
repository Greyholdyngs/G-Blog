import { Link } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer";

const About = () => {

    return (
        <div className="bg-gray-700 ">
            <Header />
            <div className="px-20">
                <h1 className="font-bold text-5xl my-15 text-center text-white">About Us</h1>
                <p className="font-sembold text-xl text-gray-200 text-center">Hi there, i'm Emmanuel Grey, and welcome to my little corner of the internet.
                    This blog is actually a project i built to practice my react skills and get better at
                    APIs and state management. I know the APIs where not displayed in English but just chect out 
                    the functions around it and see they all work perfectly.
                    I believe learning should be fun, mistakes are part f the process,  and curiosity is the 
                    best power we have even though it killed the cat.
                    Thanks for stopping by.
                </p>
            </div>
             <div className="px-20 flex justify-end my-10">
                <button className="bg-white w-20 py-7 font-semibold shadow-xl hover:bg-gray-500 hover:text-white duration-500 cursor-pointer rounded-xl">
                    <Link to="/">Back</Link>
                </button>
            </div>
            <Footer />
        </div>
    )
}
export default About;