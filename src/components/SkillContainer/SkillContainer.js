import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material';
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
            <img src="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
         </div>
         <div className="skillContainer__text">
            <h2>SKILLS</h2>
          <div className="skillContainer__skillSet">
            <h5>React</h5>
            <div className="skillContainer__slider1">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Node.js</h5>
            <div className="skillContainer__slider skillContainer__slider2">
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Javascript</h5>
            <div className="skillContainer__slider skillContainer__slider3">
              <LinearProgress variant="determinate" value={70} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>AWS</h5>
            <div className="skillContainer__slider skillContainer__slider4">
              <LinearProgress variant="determinate" value={60} />
            </div>
          </div>
             <div className="skillContainer__skillSet">
            <h5>HTML</h5>
            <div className="skillContainer__slider skillContainer__slider5">
              <LinearProgress variant="determinate" value={85} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>CSS</h5>
            <div className="skillContainer__slider skillContainer__slider6">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          </div>
          
        

    </Element>
      
    
  )
}

export default SkillContainer
