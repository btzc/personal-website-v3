import React from 'react';

import Icon from '../../components/icon/icon.component';

import CRWN from '../../assets/crwn-clothing.PNG';
import HALP_CLI from '../../assets/javascript_example.PNG';
import PERSONAL from '../../assets/personal-website.PNG'

import './project-image.styles.scss';

const ProjectImage = () => (
  <div className='project--image__container'>
    <div className='project--image__overlay'>
      <div className='icon--container'>
        <Icon />        
        <Icon />
      </div>        
    </div>
    <img className='project--image' src={CRWN} alt='' />      
  </div>
);

export default ProjectImage;
