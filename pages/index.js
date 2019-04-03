import '../styles/style.scss'

import TopNav from '../Components/TopNav'
import WelcomeBio from '../Components/WelcomeBio'
import Cards from '../Components/Cards'
import CoreTools from '../Components/CoreTools'
import Footer from '../Components/Footer'
// import MediumCard from '../Components/MediumCard';
import Head from 'next/head';

// import RSSRequestHOC from '../Components/HOCs/RSSRequestHOC'

// console.log('aacom-5');

export default () =>
  <div className=''>
    <Head>
        <title>Aaron Adler | UX Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
