import './App.css'
// import About from './components/About'
// import FrontPage from './components/FrontPage'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbtron'
import CampaignSection from './components/CampaignSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

const HomePage = () =>{
  return (
    <div className='relative bg-darkColor'>
      <Navbar/>
      {/* <FrontPage/> */}
      <Jumbotron />
      <CampaignSection />
      {/* <About/> */}
      <TeamSection />
      <Footer />
    </div>
  )
}

export default HomePage