import React from "react";
// import Tilt from "react-tilt";
import projects from "../../src/projects";
import CodeWindow from "../CodeWindow.js/CodeWindow";
// import './Cards.css';
// import '../../src/css/entry.css';
const uuidv1 = require("uuid/v1");

// const Container = styled.div`
//   /* transform: scale(1); */

// `
// const Div = styled.div`
//   width: 430px;
//   transition: all .3s ease;
//   /* -moz-transition: scale .3s ease; */
//   /* -webkit-transition: scale .3s ease; */
//   &:hover{
//     transform:translateY(-10px);
//   }
// `;

// const Div2 = styled.div`
//   /* flex: 1; */
// `;

// const Completed = styled.p`
//   border: 1px solid blue;
//   margin-top: 2.7rem;

// `;


// const Img = styled.img`
//   border-top-right-radius: 4px;
//   border-top-left-radius: 4px;
// `
// --------- END STYLED-COMPONENTS ---------

const Cards = () => {
  return (


      <div className="flex flex-wrap justify-center">
        {projects.map(function(project) {
          return (


            <div className='card' key={uuidv1()}>
              {/* <Tilt
                className="Tilt"
                options={{ reverse: true, max: 12, scale: 1.03, speed: 900 }}
              > */}
                  <div className="br2 ma2 bg-white">
                    {/* <a target="_blank" href={project.link?project.link:null}> */}
                    <a target="_blank" rel="noopener noreferrer" href={project.link}>



                      {/* If the project object has an image key, display img tag. Otherwise, show a div for JS code. */}
                      {project.image
                        ?
                        <img  src={project.image} alt="alt" className={project.gif?"gifStyle":"image"} />
                        :
                        <CodeWindow/>
                      }



                      <div className="textContainer pa4b lh-copy3">
                        <p id="title" className="f3c mt1 mb0 fw6 lh-title">
                          {project.title}
                        </p>
                        <p id="desc" className="f6b blue7  mt3 mb4 space">
                          {project.desc}
                        </p>

                        <p id="" className="projectRole f6 mt1 blue7 mb2 fw6">
                          My project role :
                        </p>

                        <ul style={{listStyleType:'circle'}} className='f6b blue7'>


                          <li className='mt3'>{project.role1?project.role1:project.role}</li>

                          {project.role2?
                          <li className='mt3'>{project.role2}</li>
                          :null}

                          {project.role3?
                          <li className='mt3'>{project.role3}</li>
                          :null}

                          {project.role4?
                          <li className='mt3'>{project.role4}</li>
                          :null}
                          
                          {project.role5?
                          <li className='mt3'>{project.role5}</li>
                          :null}

                          
                        </ul>

                        <p id="" className="f6 mt4 mb0 blue7 fw6">
                          Project stack:
                        </p>

                        <p first="" className="mt0 tag bg-blue5">{project.tag1}</p>
                        
                        {project.tag2?
                        <p className="mt0 tag bg-blue6">{project.tag2}</p>
                        :null}

                        {project.tag3?
                        <p className="mt0 tag bg-indigo7">{project.tag3}</p>
                        :null}

                        {project.tag4?
                        <p className="mt0 tag bg-violet7">{project.tag4}</p>
                        :null}

                        {project.tag5?
                        <p className="mt0 tag bg-violet7">{project.tag5}</p>
                        :null}
                        
                        <p id="" className="completed dib f7 blue7 ph3 pv2">
                          Completed: &nbsp;<span className="fw7">{project.year}</span>
                        </p>

                      </div>
                    </a>
                  </div>
              {/* </Tilt> */}
            </div>


          );
        })}

<style jsx>{`

  .card{
    width: 430px;
    transition: all .3s ease;
    /* -moz-transition: scale .3s ease; */
    /* -webkit-transition: scale .3s ease; */
    &:hover{
      transform:translateY(-10px);
    }
  }


  .completed{
    border: 1px solid blue;
    margin-top: 2.7rem;
  }

  .image{
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }     
  .gifStyle{
    width:100%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .tag{
    /* background: blue; */
    color: white;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 10px;
    margin-top:10px;
  }



  p.tag:not([first]){
    margin-left: 6px;
  }

  p.projectRole{
    /* line-height: 1.3; */
  }

`}</style>

      
  </div>
  );
};

export default Cards;
