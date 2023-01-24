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
                        <p>Kalikapur, Mukundapur</p>
                        <p>Kolkata-107, India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20}style=
                    {{color:"white", marginRight:"2rem"}}/>
                    +91-8918299492</h4> 
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20}style=
                    {{color:"white", marginRight:"2rem"}}/>
                    sunitkhatua01@gmail.com(Personal)
                    <p>sunitkhatua.ee2020@nsec.ac.in(College)</p>
                    </h4> 
                </div>

            </div>
            <div className="right">
                <h4>About me</h4>
                <p>I am a Web Developer and also have 5 star in python</p>
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