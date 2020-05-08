import React from 'react';

import WorkListTabs from '../../components/work-list-tabs/work-list-tabs.component';
import WorkListPanel from '../../components/work-list-panel/work-list-panel.component';
import SectionHeader from '../../components/section-header/section-header.component';

import './work.styles.scss';

const Work = () => (
  <div className='work'>
    <SectionHeader longLat={`48°30'11.7"N 123°22'33.8"W`} title='Work' />
    <div className='work-list'>
      <WorkListTabs />
      <WorkListPanel 
        id='pagerduty' 
        company='PagerDuty'
      />
      <WorkListPanel 
        id='rbc' 
        company='Royal Bank of Canada'
        hidden={true} 
      />
      <WorkListPanel 
        id='eao' 
        company='BC Environmental Assessment Office'
        hidden={true} 
      />
      <WorkListPanel 
        id='pension'
        company='BC Pension Corporation'
        hidden={true} 
      />
      <WorkListPanel 
        id='bazaar'
        company='The Bazaar'
        hidden={true} 
      />
    </div>
  </div>
);

export default Work;
