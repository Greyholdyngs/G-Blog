import Header from '../src/Components/Header'
import Content from '../src/Components/Content'
import Footer from '../src/Components/Footer'
import About from '../src/Path/About'
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
    <div className=''>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default App
