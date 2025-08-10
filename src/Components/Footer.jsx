import AOS from 'aos';
import { Link } from "react-router-dom";
import logo from '../assets/Blog-Logo-cut.png';

const Footer = () => {
       

    return(
            <footer className='md:flex justify-between items-center bg-gray-100
                                lg:px-20 md:px-15 sm:px-10 px-5 py-5 shadow-outline mt-15
                                 md:text-left text-center'>
                <nav className='flex md:justify-start justify-end mb-5 md:mb-0 '>
                    <a href="#">
                        <img className='w-13' src={logo} alt="company logo" />
                    </a>
                </nav>
                <ul className='md:my-0 mt-5'>
                    <li className='text-lg font-semibold hover:text-gray-500 duration-300 hover:border-b-1 hover:pb-1'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='text-lg font-semibold hover:text-gray-500 duration-300 hover:border-b-1 hover:pb-1'>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <ul className='mb-5'>
                    <li className='text-lg font-semibold hover:text-gray-500 duration-300 hover:border-b-1 hover:pb-1'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='text-lg font-semibold hover:text-gray-500 duration-300 hover:border-b-1 hover:pb-1'>
                        <Link to="/">
                            <a href=""></a>
                        </Link>
                    </li>
                </ul>
                <div>
                    <p>© 2025 My Blog. All rights reserved.</p>
                </div>
            </footer>

    )
}
export default Footer;