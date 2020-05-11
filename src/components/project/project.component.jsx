import React from 'react';

import ProjectImage from '../project-image/project-image.component';
import ProjectContent from '../project-content/project-content.component';

import './project.styles.scss';

const Project = ({project, img, github, link, description, technologies}) => (
  <div className='project'>
    <ProjectImage 
      img={img}
      github={github}
      link={link}
    />
    <ProjectContent 
      project={project}
      github={github}
      link={link}
      description={description}
      technologies={technologies}
    />
  </div>
);

export default Project;
