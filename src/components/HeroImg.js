import "./HeroImgStyles.css";
import React from 'react';
import introImg from "../assets/introImg.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return ( 
    <div className="hero">
        <div className="mask">
            <img className="into-img" src=
            {introImg} alt="introImg" />
        </div>
        <div className="content">
            <p>Hi, I'm Sunit Khatua</p>
            <h1> Web Developer</h1>
            <div>
                <Link to="/project"
                className="btn">Projects</Link>
                <Link to="/contact"
                className=" btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
}

export default Heroimg
