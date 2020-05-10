import React from 'react';

import ProjectImage from '../project-image/project-image.component';
import ProjectContent from '../project-content/project-content.component';

import './project.styles.scss';

const Project = () => (
  <div className='project'>
    <ProjectImage />
    <ProjectContent />
  </div>
);

export default Project;
