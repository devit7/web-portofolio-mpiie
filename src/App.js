import logo from './logo.svg';
import React from 'react';
import './css/index.css'; // tailwind css
import './App.css';
// Correct way to import Switch from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import bacgroundAudio from './music/xd.mp3';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navbar from './components/navbar.js';
import Project from './pages/Projects.js';
import NotFound from './pages/NotFound.js';
import Secret from './pages/Secret.js';
import Kda from './pages/Kda.js';
import Test from './pages/Test';
import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <div>
      {/* Tambahkan elemen audio untuk latar belakang */}
      <audio id='backgroundAudio' autoPlay loop>
        <source src={bacgroundAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/secret" element={<Secret />} />
        <Route exact path="/kda" element={<Kda />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;