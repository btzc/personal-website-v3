import React from 'react';

import SectionHeader from '../../components/section-header/section-header.component';
import Project from '../../components/project/project.component';

import PROJECT_DATA from './projects.data';

import './projects.styles.scss';

const Projects = () => (
  <div className='projects'>
    <SectionHeader longLat={`48°30'11.7"N 123°22'33.8"W`} title='Projects' />
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
