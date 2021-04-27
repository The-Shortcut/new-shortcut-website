import React from 'react';
import Hero from './1_hero/index.jsx';
import Events from './2_events/index.jsx';
import Partners from './3_partners/index.jsx';
import Data from './4_data/index.jsx';

import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'home',
    path: '/',
  },
});

export default class LandingPage extends React.Component {
  render() {
    console.log('langing page');
    return (
      <div>
        <Hero />
        <Data />
        <Events />
        <Partners />
      </div>
    );
  }
}
