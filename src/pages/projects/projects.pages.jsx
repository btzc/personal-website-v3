import React from 'react';

import SectionHeader from '../../components/section-header/section-header.component';
import Project from '../../components/project/project.component';

import './projects.styles.scss';

const Projects = () => (
  <div className='projects'>
    <SectionHeader longLat={`48°30'11.7"N 123°22'33.8"W`} title='Projects' />
    <div className='projects--list'>
      <Project />
      <Project />
      <Project />
    </div>
  </div>
);

export default Projects;
