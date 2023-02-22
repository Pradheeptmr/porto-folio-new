import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Pradheep</h1>
            <p>A professional website Developer</p>
            <a href ="https://drive.google.com/file/d/1HuXs3Ihkz7UeZNo7Ui-mkDeVAYYSOf36/view?usp=share_link" target={"blank"}>
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
