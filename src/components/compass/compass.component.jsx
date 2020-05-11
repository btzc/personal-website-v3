import React from 'react';

import Icon from '../icon/icon.component';

import RESUME from '../../assets/resume.pdf';

import './compass.styles.scss';

const Compass = () => (
  <div id="compass">
    <span>
      <Icon
        url="https://github.com/btzc"
        icon={['fab', 'github']}
      />
    </span>
    <span>
      <Icon 
        url="https://www.linkedin.com/in/brandon-zhou-charles-751609120/"
        icon={['fab', 'linkedin']}
      />
    </span>
    <span>
      <Icon 
        url="mailto:brandonzhoucharles@gmail.com"
        icon={['fas', 'envelope']}
      />
    </span>
    <span>
      <Icon 
        url={RESUME}
        icon={['fas', 'file-pdf']}
      />
    </span>
    <div id="pointer"></div>
  </div>
);

export default Compass;
