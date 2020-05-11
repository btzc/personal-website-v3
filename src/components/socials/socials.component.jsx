import React from 'react';

import Icon from '../icon/icon.component';

import RESUME from '../../assets/resume.pdf';

import './socials.styles.scss';

const Socials = () => (
  <div className='socials'>
    <Icon
      url="https://github.com/btzc"
      icon={['fab', 'github']}
    />
    <Icon 
      url="https://www.linkedin.com/in/brandon-zhou-charles-751609120/"
      icon={['fab', 'linkedin']}
    />
    <Icon 
      url="mailto:brandonzhoucharles@gmail.com"
      icon={['fas', 'envelope']}
    />    
    <Icon 
      url={RESUME}
      icon={['fas', 'file-pdf']}
    />
  </div>
);

export default Socials;
