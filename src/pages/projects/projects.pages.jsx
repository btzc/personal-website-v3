import React from 'react';

import SectionHeader from '../../components/section-header/section-header.component';
import Project from '../../components/project/project.component';

import PROJECT_DATA from './projects.data';

import './projects.styles.scss';

const Projects = () => (
  <div className='projects'>
    <SectionHeader longLat={`43°39'22.6"N 79°22'39.1"W`} title='Projects' />
    <div className='projects--list'>
      {
        PROJECT_DATA.projects.map(({project, img, github, link, description, technologies}, i) => {
          return (
            <Project 
              key={i}
              project={project}
              img={img}
              github={github}
              link={link}
              description={description}
              technologies={technologies}
            />
          )
        })
      }

    </div>
  </div>
);

export default Projects;
