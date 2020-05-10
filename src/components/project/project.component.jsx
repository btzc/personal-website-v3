import React from 'react';

import Icon from '../../components/icon/icon.component';

import ProjectImage from '../project-image/project-image.component';

import CRWN from '../../assets/crwn-clothing.PNG';
import HALP_CLI from '../../assets/javascript_example.PNG';
import PERSONAL from '../../assets/personal-website.PNG';

import './project.styles.scss';

const Project = () => (
  <div className='project'>
    <ProjectImage />
    <div className='project--contents'>
      <div className='project--contents__title'>
        <a href='My shit website'>Personal Website</a>
      </div>
      <div className='project--contents__panel'>
        <p>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
      </div>
      <ul className='project--contents__techs'>
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
        <li>Node.js</li>
      </ul>
      <div className='project--contents__links'>
        <Icon />
        <Icon />
      </div>
    </div>
  </div>
);

export default Project;
