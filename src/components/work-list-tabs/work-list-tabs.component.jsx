import React from 'react';

import './work-list-tabs.styles.scss';

const WorkListTabs = () => {
  const handleClick = (e) => {
    const id_map = {
      'PagerDuty': 'pagerduty',
      'Royal Bank of Canada': 'rbc',
      'BC Environmental Assessment Office': 'eao',
      'BC Pension Corporation': 'pension',
      'The Bazaar': 'bazaar'
    };

    let selected = document.querySelector('.active');
    let curr_panel = document.querySelector(`#${id_map[selected.innerText]}`);
    selected.classList.remove('active');
    curr_panel.classList.add('hidden');
    
    const next_panel = document.querySelector(`#${id_map[e.target.innerText]}`);
    next_panel.classList.remove('hidden');
    e.target.classList.add('active');
  }
  
  return (
    <div className='work-list-tabs'>
      <ul className='work-list-tabs--selection'>
        <li className='work-list-tabs--selection__tab active' onClick={handleClick}>PagerDuty</li>
        <li className='work-list-tabs--selection__tab' onClick={handleClick}>Royal Bank of Canada</li>
        <li className='work-list-tabs--selection__tab' onClick={handleClick}>BC Environmental Assessment Office</li>
        <li className='work-list-tabs--selection__tab' onClick={handleClick}>BC Pension Corporation</li>
        <li className='work-list-tabs--selection__tab' onClick={handleClick}>The Bazaar</li>
      </ul>
    </div>
  );
}

export default WorkListTabs;
