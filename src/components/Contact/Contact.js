import React from 'react'
import  {Element } from 'react-scroll'
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="contact" id="Contact">
         <h1>Contact</h1>
         <div className="contact__container">
            <p>
                Email:<span>Pradheep166@gmail.com</span>
            </p>
            <p>
                Github Username:<span>Pradheeptmr</span>
            </p>
            <div className="contact__icons">
                 <a href="https://www.linkedin.com/in/s-pradheep-9b8b17130">
                    <IconButton>
                     <LinkedInIcon/>
                    </IconButton>
                 </a>
            </div>
         </div>
    </Element>
  )
}

export default Contact
