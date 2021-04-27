import React, { useEffect } from 'react';

// Styles
import css from './styles.module.scss';

// Children
import TeamMembers from './TeamMembers';
import BoardMembers from './BoardMembers';

import TagManager from 'react-gtm-module';

const Team = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'Our Team',
        path: '/team',
      },
    });
  }, []);
  return (
    <div className={css.container}>
      <header>
        <h2>Our Team</h2>
      </header>
      <TeamMembers />
      <BoardMembers />
    </div>
  );
};

export default Team;
