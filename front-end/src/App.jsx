import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import Navbar from './components/Navbar'
import Services from './components/Services'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {

  useEffect(()=> {
    AOS.init({duration:2000});
  })

  return (
    <>
      <Navbar/>
      <FrontPage/>
      <About/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App
