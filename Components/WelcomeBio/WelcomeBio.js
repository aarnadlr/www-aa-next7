import React from "react";
// import styles from "./WelcomeBio.css";

// const Paragraph = styled.p`
//   font-weight:300;
// `

const WelcomeBio = () => (
  <div className="">

    <div id="topSection" className="flex flex-column center white mt6 mb5">
      <img
        id="profile-pic"
        className="grow2 center mb3"
        src="../../static/icons/profile-pic.jpg"
        alt='alt'
      />
      <p className="f2c tc">Aaron Adler</p>


      {/* SOCIAL ICONS UNDER NAME */}
      <div className='flex justify-center mb4'>
        <a target='_blank' rel="noopener noreferrer" href="https://github.com/aarnadlr"><img alt='github'               className='icon grow-large-2' src='../../static/icons/github.gif' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://codepen.io/aaronadler/"><img alt='codepen'           className='icon grow-large-2 ml3' src='../../static/icons/codepen.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/aaronadler/"><img alt='linkedin' className='icon grow-large-2 ml3' src='../../static/icons/linkedin.png' /></a>
        {/* <a target='_blank' rel="noopener noreferrer" href="https://www.toptal.com/designers/resume/aaron-adler"><img alt='toptal' className='icon grow-large-2 ml3' src='../../static/icons/toptal.gif' /></a> */}
        <a target='_blank' rel="noopener noreferrer" href="https://dribbble.com/aarnadlr"><img alt='dribbb'             className='icon grow-large-2 ml3' src='../../static/icons/AA-dribbble-icon.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.producthunt.com/@aarnadlr"><img                  className='icon grow-large-2 ml3' src='../../static/icons/prodhunt.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://workingnotworking.com/aarn"><img                     className='icon grow-large-2 ml3' src='../../static/icons/wnw.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://medium.com/@aaronadler"><img alt='medium' className='icon grow-large-2 ml3' src='../../static/icons/medium.png' /></a>
        <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/aaronadler"><img className='icon grow-large-2 ml3' src='../../static/icons/twitter.png' /></a>
      </div>

      <p className="paragraph f5 lh-copy4b mh3">
        Hi there. &nbsp;I'm a&nbsp;
        <span className="bg-blue6">&nbsp;UX Engineer&nbsp;</span>&nbsp;and <span className="bg-cyan8">&nbsp;Front-end Developer&nbsp;</span>&nbsp;in NYC.&nbsp;
        I’ve worked on projects for Facebook, Google, IBM, R/GA, Droga5 and
        others. &nbsp;My work has been recognized by Cannes, AICP, the Art Directors
        Club, Clios, Archive, Adweek, and the New York Times. &nbsp;My focus is on <span className="bg-green8">&nbsp;JavaScript ES6 + React&nbsp;</span> , <span className="bg-teal8">&nbsp;CSS3&nbsp;</span> ,
        
         and <span className="bg-blue6">&nbsp;IX / coded animation&nbsp;</span>.
      </p>
    </div>

  <style jsx>{`
    .icon{
      width:20px;
      height: 20px;
      border-radius: 3px;
    }
    //.paragraph{
    //  font-weight:300;
    //}
  `}</style>
  </div>
);

export default WelcomeBio;
