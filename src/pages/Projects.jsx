import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import project1Image from '../assets/icons/1.png';
import project2Image from '../assets/icons/2.png';
import project3Image from '../assets/icons/3.png';
import project4Image from '../assets/icons/4.png';
import project5Image from '../assets/icons/5.png';
import project6Image from '../assets/icons/6.png';

const projects = [
  {
    title: 'Project 1',
    image: project1Image,
    description: 'My Project 1',
  },
  {
    title: 'Project 2',
    image: project2Image,
    description: 'My Project 2',
  },
  {
    title: 'Project 3',
    image: project3Image,
    description: 'My Project 3',
  },
  {
    title: 'Project 4',
    image: project4Image,
    description: 'My Project 4',
  },
  {
    title: 'Project 5',
    image: project5Image,
    description: 'My Project 5',
  },
  {
    title: 'Project 6',
    image: project6Image,
    description: 'My Project 6',
  },
];

function Projects() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Projects</h1>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={project.image}
                className="d-block w-100"
                style={{ maxHeight: '700px', objectFit: 'cover' }}
                alt={project.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Projects;
