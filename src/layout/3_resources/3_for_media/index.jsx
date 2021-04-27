import React, { useEffect } from 'react';

// Styles
import css from './styles.module.scss';

import TagManager from 'react-gtm-module';

const Press = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'For Media',
        path: '/media',
      },
    });
  }, []);
  return (
    <div>
      <div className={css.container}>
        <header>
          <div>
            {' '}
            <h2>For Media</h2>
            <p>
              As the biggest talent accelerator in the Nordics and one of the biggest not-for-profit
              talent accelerators in the world, we’re committed to connecting talent with startups
              and high-growth companies, or encouraging talent to consider founding a startup of
              their own. We do this through events, workshops, training sessions and internships.
            </p>
          </div>
          <div>
            <img src={require('../../../assets/illustrations/2.png')} alt='illustration' />
          </div>
        </header>

        <div className={css.links}>
          <div className={css.contact}>
            <h3>Press Contact</h3>
            <p>For interview requests or questions about services, please contact:</p>
            <a href='mailto:info@theshortcut.org'>info@theshortcut.org</a>
          </div>

          <div className={css.brand}>
            <h3>Brand Assets</h3>
            <p>
              These materials are intended for press-related use only. Please respect guidelines and
              instructions while using the materials.
            </p>
            <a
              href='http://theshortcut.org/wp-content/uploads/2017/02/the-Shortcut-logo-files.zip'
              target='_blank'
              rel='noopener noreferrer'>
              <span>
                <img
                  src={require('../../../assets/icons/link.png')}
                  alt='illustration'
                  style={{ width: '20px', marginRight: '3px' }}
                />
              </span>{' '}
              The Shortcut logo files
            </a>
          </div>

          <div className={css.clippings}>
            {' '}
            <h3>Press Clippings</h3>
            <ul>
              <li>
                <a
                  href='https://yle.fi/uutiset/osasto/news/apn_this_week_85_of_jobs_not_advertised_says_ngo_tackling_finlands_workplace_diversity_problem/11076243?fbclid=IwAR2pGtcA0ZqN2k47AgOvij8LVHFoy20jU9pH5_EbGfbqY4anW3htg0_Izzk'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Interview with Yle news
                </a>
              </li>

              <li>
                <a
                  href='https://www.goodnewsfinland.com/opinion/bridge-the-talent-gap-by-skill-building/?fbclid=IwAR3Y_zorJU9oyzsqQBNu258K1edsMe-66mal35ueghCLL3GK_qL7T4J5Xnw'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Opinion piece on Good News From Finland
                </a>
              </li>

              <li>
                <a
                  href='https://www.talouselama.fi/uutiset/sveitsilainen-anne-badan-kannustaa-suomalaisia-rekrytoimaan-ennakkoluulottomasti-maahanmuuttajia-osaajat-ovat-jo-taalla/ad092847-c9be-4202-8eec-0633ac4f814f'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Feature by Talousemämä
                </a>
              </li>

              <li>
                <a
                  href='https://areena.yle.fi/audio/1-50273895'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Podcast by Yle Arena
                </a>
              </li>

              <li>
                <a
                  href='https://www.entrepreneursoffinland.fi/we-are-a-part-of-the-transformation-finland-is-witnessing-anne-badan-co-founder-of-the-shortcut/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Interview by Entrepreneurs of Finland
                </a>
              </li>

              <li>
                <a
                  href='https://www.talouselama.fi/uutiset/startup-kentta-on-valkoinen-helposti-tuudittaudutaan-ajattelemaan-etta-homma-on-hoidettu-kun-palkataan-ulkomaisia/25a100e2-2cb6-4464-8e54-c562486ec6e2?ref=twitter:91b9'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Talouseläma article on diversity and inclusion
                </a>
              </li>
            </ul>
          </div>

          <div className={css.materials}>
            {' '}
            <h3>Press Materials</h3>
            <ul>
              <li>
                {' '}
                <a
                  href='https://theshortcut.org/wp-content/uploads/2017/02/Press-release_International.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Press Release (International)
                </a>
              </li>
              <li>
                <a
                  href='https://theshortcut.org/wp-content/uploads/2017/02/Press-release_Finnish.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  {' '}
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  Press Release (Finnish)
                </a>
              </li>
              <li>
                <a
                  href='https://theshortcut.org/wp-content/uploads/2017/02/Background_The_Shortcut.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>
                    <img
                      src={require('../../../assets/icons/link.png')}
                      alt='illustration'
                      style={{ width: '20px', marginRight: '3px' }}
                    />
                  </span>{' '}
                  The Shortcut background
                </a>
              </li>
            </ul>
          </div>

          {/* Section for any miscellaneous mentions
          <div className={css.other}>
            <h3>About us around the web</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Press;
