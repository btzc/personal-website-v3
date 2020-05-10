import React from 'react';

import Icon from '../icon/icon.component';

import './compass.styles.scss';

const Compass = () => (
  <div id="compass">
    <span><Icon /></span>
    <span><Icon /></span>
    <span><Icon /></span>
    <span><Icon /></span>
    <div id="pointer"></div>
  </div>
);

export default Compass;
