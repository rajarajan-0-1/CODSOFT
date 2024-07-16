import React from 'react';
import project from '../assets/project.png'


const ProjectCard = ({URL, projectTitle, projectDescription}) => {
  return (
    <a href={URL} target='_blank'>
    <img src={project} alt="Project  logo" className='hover'/>
    <h3>{projectTitle}</h3>
    <p>{projectDescription}</p>
    </a>
    )
}

export default ProjectCard