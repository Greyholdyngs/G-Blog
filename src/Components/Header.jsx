import Image from '../assets/Blog-Logo-cut.png';
import burger from '../assets/menu.png';
import Close from '../assets/close.png';
import { useState } from 'react'
import { Link } from "react-router-dom";

function Header() {


    const [dropDown, setDropDown] = useState(false)

    const handleDropDown = () => {
        setDropDown(true) // Open the dropdown state
    }
    const handleClose = () => {
        setDropDown() // Close the dropdown
    }

    return(
        <div className=' sticky top-0 bg-white z-1 shadow-lg lg:px-20 md:px-15 sm:px-10 px-5'>
            <header className="flex justify-between items-center md:py-4 py-3">
                <nav>
                    <a href="#">
                        <img className='w-15' src={Image} alt="Company Logo" />
                    </a>
                </nav>
                <nav>
                    <ul className='md:flex hidden space-x-4 text-lg font-semibold '>
                        <li>
                            <Link className='hover:border-b-1 hover:pb-1
                                            hover:text-gray-500 duration-300' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='hover:border-b-1 hover:pb-1
                                            hover:text-gray-500 duration-300' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='hover:border-b-1 hover:pb-1
                                            hover:text-gray-500 duration-300' to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <ul className='md:hidden block space-x-4 text-lg font-semibold '>
                        <li>
                            <a href="#">
                                <img onClick={handleDropDown} src={burger} alt="menu" />
                            </a>
                        </li>
                        <li className={`relative transition-transform duration-300 ease-in-out z-50
                                        ${dropDown ? "-traslate-x-2" : "translate-x-full"}`}>
                            {
                                dropDown && (
                                <div className='h-screen w-70 absolute -top-10 -right-5
                                                bg-white'>
                                    <div className='flex justify-end px-5 py-2'>
                                        <a href="#">
                                            <img
                                                onClick={handleClose} src={Close} alt="close" />
                                        </a>
                                    </div>
                                    <ul className='text-center '>
                                        <li className='py-3'>
                                            <Link to="/"> Home</Link>
                                        </li>
                                        <li className='py-3'>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className='py-3'>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                           ) 
                        }
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header