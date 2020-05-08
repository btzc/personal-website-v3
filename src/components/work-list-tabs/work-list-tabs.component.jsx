import React from 'react';

import './work-list-tabs.styles.scss';

const WorkListTabs = () => (
  <div className='work-list-tabs'>
    <ul className='work-list-tabs--selection'>
      <li className='work-list-tabs--selection__tab active'>PagerDuty</li>
      <li className='work-list-tabs--selection__tab'>Royal Bank of Canada</li>
      <li className='work-list-tabs--selection__tab'>BC Environmental Assessment Office</li>
      <li className='work-list-tabs--selection__tab'>BC Pension Corporation</li>
      <li className='work-list-tabs--selection__tab'>The Bazaar</li>
  </ul>
  </div>
);

export default WorkListTabs;
