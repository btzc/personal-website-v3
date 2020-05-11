import React from 'react';

import WorkListTabs from '../../components/work-list-tabs/work-list-tabs.component';
import WorkListPanel from '../../components/work-list-panel/work-list-panel.component';
import SectionHeader from '../../components/section-header/section-header.component';

import WORK_DATA from './work.data';

import './work.styles.scss';

const Work = () => (
  <div id='work' className='work'>
    <SectionHeader longLat={`48°30'11.7"N 123°22'33.8"W`} title='Work' />
    <div className='work-list'>
      <WorkListTabs />
      {
        WORK_DATA.jobs.map(({id, company, url, title, dates, bullets}, i) => {
          if (i === 0) {
            return (
              <WorkListPanel 
                key={i}
                id={id}
                company={company}
                url={url}
                title={title}
                dates={dates}
                bullets={bullets}
              />
            );
          }

          return (
            <WorkListPanel 
              key={i}
              id={id}
              company={company}
              url={url}
              title={title}
              dates={dates}
              bullets={bullets}
              hidden={true}
            />
          )
        })
      }
    </div>
  </div>
);

export default Work;
