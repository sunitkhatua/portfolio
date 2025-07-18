// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./index.css"
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import About from "./routes/About"
import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom";
import Experience from "./routes/Experience";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/experiences" element={<Experience/>}/>
    </Routes>
    </>
  );
}

export default App;
