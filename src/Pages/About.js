import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a BCA student with a strong focus on web development, especially the MERN stack. 
        I have a passion for creating interactive and dynamic web applications.
      </p>
      <h3>Skills</h3>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
      </ul>
    </div>
  );
};

export default About;
