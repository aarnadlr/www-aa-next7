import '../styles/style.scss'

import TopNav from '../Components/TopNav'
import WelcomeBio from '../Components/WelcomeBio'
import Cards from '../Components/Cards'
import CoreTools from '../Components/CoreTools'
import Footer from '../Components/Footer'
import MediumCard from '../Components/MediumCard';
// import RSSRequestHOC from '../Components/HOCs/RSSRequestHOC'

export default () =>
  <div className=''>
  
    {/* <RSSRequestHOC/> */}

    <TopNav />

    <WelcomeBio/>

    <Cards />
    
    {/* <MediumCard/> */}

    <CoreTools />

    <Footer />


  {/* <style jsx>{`
  `}</style> */}
  </div>
