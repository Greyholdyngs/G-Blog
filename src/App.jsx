import Header from '../src/Components/Header'
import Content from '../src/Components/Content'
import Footer from '../src/Components/Footer'
import Hero from '../src/Components/Hero';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(
    () => {
      AOS.init({
        duration: 1000,
        once: true, // whether animation should happen only once - while scrolling down
      })
    }
  ) 

  return (
    <div className='bg-gray-50'>
        <Header />
        <Hero />
        <Content />
        <Footer />
    </div>
  )
}

export default App
