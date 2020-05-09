import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import './icon.styles.scss';

const Icon = () => {
  library.add( fab, fas );

  return (
    <div className='icon'>
      <a className='icon--container' href='someurl' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon className='icon--container__action' icon={['fab', 'facebook']} size='2x' />
        <span>Words</span>
      </a>
    </div>
  );
}

export default Icon;
