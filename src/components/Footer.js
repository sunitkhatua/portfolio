import "./FooterStyles.css";
import React from 'react'

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style=
                    {{color:"white", marginRight:"2rem"}} />
                    <div>
                        <p>Sarjapur, Bengaluru</p>
                        <p>Karnataka-560035, India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20}style=
                    {{color:"white", marginRight:"2rem"}}/>
                    +91-9002978956</h4> 
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20}style=
                    {{color:"white", marginRight:"2rem"}}/>
                    sunitkhatua320@gmail.com
                    </h4> 
                </div>

            </div>
            <div className="right">
                <h4>About me</h4>
                <p>I am a Devops and Support Engineer</p>
                <div className="social">
                <FaFacebook size={30}style=
                    {{color:"white", marginRight:"1rem"}}/>

                <FaTwitter size={30}style=
                    {{color:"white", marginRight:"1rem"}}/>
                
                <FaLinkedin size={30}style=
                    {{color:"white", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer