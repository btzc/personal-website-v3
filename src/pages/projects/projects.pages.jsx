import React from 'react';

import CRWN from '../../assets/crwn-clothing.PNG';

import SectionHeader from '../../components/section-header/section-header.component';

import './projects.styles.scss';

const Projects = () => (
  <div className='projects'>
    <SectionHeader longLat={`48°30'11.7"N 123°22'33.8"W`} title='Projects' />
    <div className='projects--list'>
      <div className='project'>
        <img className='project--image' src={CRWN} alt='' />
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
        </div>
      </div>
      <div className='project'>
        <img className='project--image' src={CRWN} alt='' />
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
        </div>
      </div>
      <div className='project'>
        <img className='project--image' src={CRWN} alt='' />
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
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
