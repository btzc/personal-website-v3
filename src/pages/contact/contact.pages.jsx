import React from 'react';

import SectionHeader from '../../components/section-header/section-header.component';

import './contact.styles.scss';

const Contact = () => (
  <div className='contact'>
    <SectionHeader longLat={`48°30'11.7"N 123°22'33.8"W`} title='Contact' />
  </div>
);

export default Contact;
