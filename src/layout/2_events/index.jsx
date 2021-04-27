import React, { useState, useEffect } from 'react';

// Styles
import css from './styles.module.scss';

// Children
import EventsList from './EventsList';
import Toolbar from './Toolbar';

import TagManager from 'react-gtm-module';

const Events = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'events',
        path: '/events',
      },
    });
  }, []);

  return (
    <div className={css.container}>
      <header>
        <h2>
          Events
          <span>Find yours and register now!</span>
        </h2>
        <div>
          <img src={require('../../assets/illustrations/search.png')} alt='illustration' />
        </div>
      </header>
      <section>
        <p>
          The Shortcut organizes a huge range of events and there’s always something on. From
          workshops to training programs, our events connect you with experts ready to offer you the
          skills and knowledge you need to make it in the Finnish tech industry and the startup
          ecosystem – and they’re free to boot!
        </p>{' '}
        <p>Curious about what’s up and coming? Take a look at our events calendar.</p>
        <p>
          "Hey hey, we don’t want you to miss out. So if you are interested in participating in any
          of these activities, past, present or future, please drop us a message at{' '}
          <a href='mailto:info@theshortcut.org'>info@theshortcut.org</a> , we’d love to hear from
          you"
        </p>
      </section>
      <h3>Search Events</h3>
      <Toolbar setSearch={setSearch} />
      <EventsList search={search} />
    </div>
  );
};

export default Events;
