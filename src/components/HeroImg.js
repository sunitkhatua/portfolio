import "./HeroImgStyles.css";
import React from "react";
import introImg from "../assets/introImg.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={introImg} alt="introImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Sunit Khatua</p>
        <h1> Devops and Support Engineer at Accenture, India</h1>
        <div>
          <Link to="/experiences" className="btn">
            Experience
          </Link>
          <Link to="/contact" className=" btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
