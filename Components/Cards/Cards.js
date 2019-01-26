import React from "react";
// import Tilt from "react-tilt";
import projects from "../../src/projects";
const uuidv1 = require("uuid/v1");
import Card from "../Card";
// import './Cards.css';
// import '../../src/css/entry.css';



const Cards = () => {
  return (


      <div className="flex flex-wrap justify-center">
        {projects.map(function(project) {
          return (

            <Card key={uuidv1()} project={project}/>
            // END CARD





          );
        })}


      
  </div>
  );
};

export default Cards;
