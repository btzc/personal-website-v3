import React from 'react';

import './section-header.styles.scss';

const SectionHeader = ({longLat, title}) => (
  <React.Fragment>
    <div className='section-heading'>
      <div className='section-heading--background'>
        {longLat}
      </div>
      <div className='section-heading--foreground'>
        <span className='title'>
          {title}
        </span>
      </div>
    </div>
  </React.Fragment>
);

export default SectionHeader;
