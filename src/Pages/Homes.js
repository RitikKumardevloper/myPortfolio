import React from 'react';
import './Homes.css';
import { Link } from 'react-router-dom';
import profileImage from '../assets/ritikpic2.jpg'; // Correctly import the image

const Homes = () => {
  return (
    <>
      <div className="home-container">
        <div className="text-content">
          <h1>Hi, I'm Ritik Kumar</h1>
          <p>A passionate developer skilled in the MERN stack.</p>
          <Link to="/projects" className="btn">View My Work</Link>
        </div>
        <div className="image-content">
          <img src={profileImage} alt="Ritik Kumar" className="profile-image" /> {/* Set the src attribute */}
        </div>
      </div>
    </>
  );
};

export default Homes;
