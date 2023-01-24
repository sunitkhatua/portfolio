import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import img1 from "../assets/about1.jpg"
import img2 from "../assets/about2.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a react front-end developer. I create 
                responsive secure website for my clents.
            </p>
            <Link tp="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} className="img" alt="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={img2} className="img" alt="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent