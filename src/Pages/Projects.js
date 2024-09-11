import React from 'react';
import './Project.css'; // Add a separate CSS file for Projects styles

const Projects = () => {
  const projectList = [
    {
      title: "Task Management System",
      description: "A MERN stack project that helps users manage their tasks efficiently.",
      link: "https://github.com/yourusername/task-management-system" // Replace with actual link
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React.",
      link: "https://github.com/yourusername/portfolio-website" // Replace with actual link
    }
  ];

  return (
    <>
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
