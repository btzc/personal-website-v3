import React from 'react';

import SectionHeader from '../../components/section-header/section-header.component';
import Socials from '../../components/socials/socials.component';

import './contact.styles.scss';

const Contact = () => (
  <div className='contact'>
    <SectionHeader longLat={`40°46'17.5"N 73°58'54.7"W`} title='Contact' />
    <div className='contact--content'>
      <span className='contact--content__primary'>
        Thanks for checking me out.
      </span>
      <span className='contact--content__sub'>
        Want to get to know me more? Feel free to reach out, even if it’s for a cup of coffee (but I’m expecting you to buy!).
      </span>
      <div className='socials--container'>
        <Socials />
      </div>
      <div className='contact--content__ps'>
        P.S. If you don't like the colour <span className='emphasis'>orange</span> I'm so sorry.  
      </div>
    </div>
  </div>
);

export default Contact;
