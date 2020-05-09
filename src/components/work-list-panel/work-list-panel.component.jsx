import React from 'react';

import './work-list-panel.styles.scss';

const WorkListPanel = ({id, hidden, company}) => (
  <div id={id} className={`work-list-panel ${ hidden ? 'hidden' : ''}`}>
    <div className='work-list-panel__container'>
      <h3 className='title'>
        Software Engineer Co-op
        <span className='emphasis'> // </span>
        <a href='https://www.pagerduty.com/' target='_blank' rel="noopener noreferrer" className='company'> {company}</a>      
      </h3>
      <span className='dates'>May 2019 - August 2019</span>
      <ul className='bullets'>
        <li className='bullet'>
          Provisioned an AWS Memcached instance using Terraform to persist the learner models so that the learner would not have to re-create new models from scratch on service restart. 
        </li>
        <li className='bullet'>
          Spearheaded developing a timeline component for users to view a list of related incidents using React and Redux
        </li>
        <li className='bullet'>
          Worked with teams upstream from our service to change the format of the event data being sent through Kafka using Elixir. 
        </li>
      </ul>
    </div>
  </div>
);

export default WorkListPanel;
