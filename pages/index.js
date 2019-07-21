import "../styles/style.scss";
import { register, unregister } from "next-offline/runtime";

import TopNav from "../Components/TopNav";
import WelcomeBio from "../Components/WelcomeBio";
import Cards from "../Components/Cards";
import CoreTools from "../Components/CoreTools";
import Footer from "../Components/Footer";
// import MediumCard from '../Components/MediumCard';
import Head from "next/head";
import HackerrankScore from "../Components/hackerrank-score";
// import Link from 'next/link';

// import RSSRequestHOC from '../Components/HOCs/RSSRequestHOC'

// console.log('aacom-5');

class Index extends React.Component {
  componentDidMount() {
    register();
  }
  componentWillUnmount() {
    unregister();
  }

  render() {
    return (
      <div className="">
        <Head>
          <title>Aaron Adler | UX Engineer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet"></link> */}
          <link
            href="https://fonts.googleapis.com/css?family=Teko:300"
            rel="stylesheet"
          ></link>
        </Head>
        {/* <RSSRequestHOC/> */}

        <TopNav />

        <WelcomeBio />

        <div className="algos">
          <a target="_blank" href="https://www.codewars.com/users/aarnadlr">
            <img
              src="https://www.codewars.com/users/aarnadlr/badges/large"
              alt=""
            />
          </a>

          <HackerrankScore />
        </div>

        <Cards />

        {/* <MediumCard/> */}

        <CoreTools />

        <Footer />

        <style jsx>{`
          .algos {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .algos a {
            transition: all 0.3s ease;
            margin: 0 0 40px 0;
          }
          .algos a:hover {
            transform: translateY(-3px);
          }

          .algos a img {
            cursor: pointer;
            display: block;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
