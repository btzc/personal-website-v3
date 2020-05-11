import React from 'react';

import './work-list-panel.styles.scss';

const WorkListPanel = ({id, company, url, title, dates, bullets, hidden}) => (
  <div id={id} className={`work-list-panel ${ hidden ? 'hidden' : ''}`}>
    <div className='work-list-panel__container'>
      <h3 className='title'>
        {title}
        <span className='emphasis'> // </span>
        <a href={url} target='_blank' rel="noopener noreferrer" className='company'> {company}</a>      
      </h3>
      <span className='dates'>{dates}</span>
      <ul className='bullets'>
        {
          bullets.map((bullet, i) => <li className='bullet' key={i}>{bullet}</li>)
        }
      </ul>
    </div>
  </div>
);

export default WorkListPanel;
