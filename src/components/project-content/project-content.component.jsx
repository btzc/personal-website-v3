import React from 'react';

import Icon from '../../components/icon/icon.component';

import './project-content.styles.scss';

const ProjectContent = ({project, github=null, link=null, description, technologies}) => (
  <div className='project--contents'>
    <div className='project--contents__title'>
      {
        link ? <a href={link}>{project}</a> : <a href={github}>{project}</a>
      }
    </div>
    <div className='project--contents__panel'>
      <p>{description}</p>
    </div>
    <ul className='project--contents__techs'>
      {
        technologies.map((technology, i) => <li key={i}>{technology}</li>)
      }
    </ul>
    <div className='project--contents__links'>
      {
        github ? <Icon url={github} icon={['fab', 'github']} /> : ''
      }
      {
        link ? <Icon url={link} icon={['fas', 'external-link-alt']} /> : ''
      }
    </div>
  </div>
);

export default ProjectContent;
