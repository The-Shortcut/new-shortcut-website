/* eslint-disable jsx-a11y/iframe-has-title */
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
  return (
    <div className={css.rentle}>
      <section className={css.instructions}>
        <img
          src={require('../../assets/illustrations/undraw_wash_hands.png')}
          alt='undraw_wash_hands'
          className={css.undrawHandWash}
        />
        <div>
          <h5>
            Hello there! Due to the current COVID-19 restriction, we’re open to public on Wednesdays
            and Thursdays only. Please kindly book a visit in advance if you want to visit us.
          </h5>
          <h5>
            We care about your safety so max. 10 persons at a time and face masks are mandatory
            during your entire visit to the Lab. Thank you!
          </h5>
          <h5>
            If you have any questions feel free to contact{' '}
            <a href='vickie@theshortcut.org'>vickie@theshortcut.org</a>
          </h5>
        </div>
        <img
          src={require('../../assets/illustrations/undraw_social_distancing.png')}
          alt='undraw_wash_hands'
          className={css.undrawDistancing}
        />
      </section>
      <iframe
        width='100%'
        height={window.innerWidth < 768 ? '60%' : '78%'}
        src='https://rentle.shop/theshortcut?lang=en'></iframe>
    </div>
  );
};

export default Visit;
