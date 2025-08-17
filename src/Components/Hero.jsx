import AOS from 'aos';
import image from '../assets/hero.jpg'

const Hero = () => {


    return (
        <div data-aos="fade-up" className='flex flex-col md:flex-row items-center justify-between
                                lg:px-20 md:px-15 sm:px-10 px-5 my-5 space-x-10 bg-yellow-100 py-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5
                                                transform transition-transform
                                                duration-1000 ease-in-out hover:scale-105
                                                '>
                <strong>Powered by API <span className='text-yellow-500'>JSON PLACEHOLDER</span></strong>
            </h1>
            <p className='my-5 font-base text-base
                        transform transition-transform duration-1000 ease-in-out hover:scale-105'>
                Welcome to <span className='font-semibold'>G-Blog</span> a space where information meets simplicity.
                Every post you ee here is dynamically fetched from real APIs and displayed in a clean
                , user friendly way.
            </p>
            <p className='my-5 font-base text-base
                        transform transition-transform duration-1000 ease-in-out hover:scale-105'>
                No clutter, no confusion, just API-powered stories that came in french
            </p>
            </div>
            <div>
                <img src={image} alt="image" className='w-120 rounded-2xl transform
                                    transition-transform duration-1000 ease-in-out hover:scale-105 hover:shadow-xl' />
            </div>
        </div>
    )
}
export default Hero