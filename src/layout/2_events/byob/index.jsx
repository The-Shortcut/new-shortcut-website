import React, { useEffect } from 'react';

// Styles
import './styles.scss';

// Children
import Accordion from './Accordion';
/* import Speakers from './Speakers'; */

import TagManager from 'react-gtm-module';

const Byob = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'Be Your Own Boss',
        path: '/byob',
      },
    });
  }, []);
  return (
    <div className='container'>
      <header>
        <h2> BYOB: Be Your Own Boss</h2>
        <div>
          <img src={require('../../../assets/photos/byob-2021-banner.gif')} alt='illustration' />
        </div>
      </header>

      <section>
        <p>
          Our beloved entrepreneurship training program B.Y.O.B. -Be Your Own Boss is back! This
          year it will be a 6 weeks long training program. (13th September - 22nd October 2021) The
          program's goal is to give you the fundamental tools in order to create a viable company.
          BYOB will be divided into workshops covering a broad range of disciplines, allowing you to
          develop your business ideas, put into practice the teachings, and navigate the Ecosystem.
          So, what are you waiting for? Join us!
          <br />
        </p>
      </section>
      {/*    <Speakers /> */}
      <a
        href='https://koulutukset.te-palvelut.fi/kt/699751?locations=Uusimaa&announced=0&sort=1&fbclid=IwAR1ChC0nk6-HVmgvCTKU5jsAQveqkGjQfq1b1t4yacMxc6oBpvHuHpXJhnY'
        target='_blank'
        rel='noopener noreferrer'>
        <button>Apply Now</button>
      </a>
      <h2 style={{ margin: '1em auto', textAlign: 'center', fontWeight: 'bolder' }}>FAQ:</h2>
      <Accordion className='question' />
      <div style={{ marginTop: '3em' }}>
        <h5>
          We’d love to hear from you! Please direct any questions regarding the program content to
          Vickie Weng: <a href='mailto:vickie@theshortcut.org'>vickie@theshortcut.org</a>
        </h5>
        <h5>
          For questions on how to apply to the program or the benefits during the program, please
          contact TE telephone services (in English):
          <ul style={{ marginLeft: '5em' }}>
            <li>
              tel. <a href='tel:+358295020713'>0295 020 713</a> (Mon-Fri 9.00 - 16.15)
            </li>
            <li>
              <a href='www.facebook.com/koulutusneuvonta'>www.facebook.com/koulutusneuvonta</a>
            </li>
          </ul>
        </h5>
      </div>
      <a
        href='https://koulutukset.te-palvelut.fi/kt/699751?locations=Uusimaa&announced=0&sort=1&fbclid=IwAR1ChC0nk6-HVmgvCTKU5jsAQveqkGjQfq1b1t4yacMxc6oBpvHuHpXJhnY'
        target='_blank'
        rel='noopener noreferrer'>
        <button>Apply Now</button>
      </a>
    </div>
  );
};

export default Byob;
