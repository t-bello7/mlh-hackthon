import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

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
