import React from 'react';

import SectionHeader from '../../components/section-header/section-header.component';

import './contact.styles.scss';

const Contact = () => (
  <div className='contact'>
    <SectionHeader longLat={`48°30'11.7"N 123°22'33.8"W`} title='Contact' />
    <div className='contact--content'>
      <span className='contact--content__primary'>
        Thanks for checking me out.
      </span>
      <span className='contact--content__sub'>
        Want to get to know me more? Feel free to reach out, even if it’s for a cup of coffee (but I’m expecting you to buy!).
      </span>
      <div className='icons--container'>
        <button>Linkedin</button>
        <button>Linkedin</button>
        <button>Linkedin</button>
        <button>Linkedin</button>
        <button>Linkedin</button>
        <button>Linkedin</button>
      </div>
      <div className='contact--content__ps'>
        P.S. If you don't like the colour <span className='emphasis'>orange</span> I'm so sorry.  
      </div>
    </div>
  </div>
);

export default Contact;
