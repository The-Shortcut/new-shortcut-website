import React, { useEffect } from 'react';

// Styles
import css from './styles.module.scss';

import TagManager from 'react-gtm-module';

const Visit = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'Book a Visit',
        path: '/visit',
      },
    });
  }, []);
  // eslint-disable-next-line jsx-a11y/iframe-has-title
  return <iframe className={css.rentle} src='https://rentle.shop/theshortcut?lang=en'></iframe>;
};

export default Visit;
