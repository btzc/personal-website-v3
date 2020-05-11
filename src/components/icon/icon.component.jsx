import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import './icon.styles.scss';

const Icon = ({icon, url}) => {
  library.add( fab, fas );

  return (
    <div className='icon'>
      <a className='icon--container' href={url} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon className='icon--container__action' icon={icon} size='2x' />
      </a>
    </div>
  );
}

export default Icon;
