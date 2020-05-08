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
      <WorkListPanel />

      <div className='work-list--panel hidden'>
        <h3>Software Engineering Co-op // PagerDuty</h3>
        <h4>May 2019 - August 2019</h4>
        <ul>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
        </ul>
      </div>
      <div className='work-list--panel hidden'>
        <h3>Software Engineering Co-op // PagerDuty</h3>
        <h4>Dates - Dates</h4>
        <ul>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
        </ul>
      </div>
      <div className='work-list--panel hidden'>
        <h3>Software Engineering Co-op // PagerDuty</h3>
        <h4>Dates - Dates</h4>
        <ul>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
        </ul>
      </div>
      <div className='work-list--panel hidden'>
        <h3>Software Engineering Co-op // PagerDuty</h3>
        <h4>Dates - Dates</h4>
        <ul>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
          <li>
            I did some shit
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Work;
