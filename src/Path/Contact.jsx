import { Link } from "react-router-dom";
import Header from "../Components/Header"

const Contact = () => {
    return(
        <div className="bg-gray-700 h-screen">
            <Header />
            <div className="n px-20">
            <h1 className="font-bold text-5xl my-15 text-center text-white">Contact</h1>
            <p className="font-sembold text-xl text-gray-200 text-center">No available contact here!!!</p>
            <div className="px-20 flex justify-end my-10">
                <button className="bg-white w-20 py-7 font-semibold shadow-xl hover:bg-gray-500 hover:text-white duration-500 cursor-pointer rounded-xl">
                    <Link to="/">Back</Link>
                </button>
            </div>

        </div>
        </div>
    )
}
export default Contact