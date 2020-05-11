import React from 'react';

import Icon from '../../components/icon/icon.component';

import './project-image.styles.scss';

const ProjectImage = ({img, github=null, link=null}) => (
  <div className='project--image__container'>
    <div className='project--image__overlay'>
      <div className='icon--container'>
        {
          github ? <Icon url={github} icon={['fab', 'github']} /> : ''
        }
        {
          link ? <Icon url={link} icon={['fas', 'external-link-alt']} /> : ''
        }
      </div>        
    </div>
    <img className='project--image' src={img} alt='' />      
  </div>
);

export default ProjectImage;
