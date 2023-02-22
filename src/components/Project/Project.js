import React, { useState } from 'react'
import "./Project.css";


const Project = ({img,title,desc,link,URL}) => {
    const[show,setShow] = useState(false);
  return (

    
            
     
      <div className="project"
       onMouseEnter={()=>setShow(true)}
       onMouseLeave={()=>setShow(false)}>
      {
        show ? (
            <div className="project__content">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        ):(
            <img src={img} alt="" />
        )
      }
      <a href={link} target="_blank" rel="noreferrer">
                <button className="btn">Github link</button>
      </a>  
      <a href={URL} target="_blank" rel="noreferrer">
                <button className="btnURL">Netlify link</button>  

      </a>
    </div>

      
      
    
    
    
  )
}

export default Project
