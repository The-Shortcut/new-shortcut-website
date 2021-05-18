import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


// Styles
import css from './Footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [added, setAdded] = useState({ status: false, email: null });
  const API_TOKEN = `${process.env.REACT_APP_SEND_IN_BLUE_TOKEN}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addToList = async (emailID) => {
    let addToListConfig = {
      method: 'post',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_TOKEN,
      },
      data: JSON.stringify({
        sender: {
          name: 'The Shortcut',
          email: 'theshortcut@theshortcut.org',
        },
        to: [{ email: emailID }],
        templateId: 17,
      }),
    };
    try {
      const listRes = await axios(addToListConfig);
      store.addNotification({
        message: 'You will recieve welcome email soon!',
        type: 'info',
        insert: 'center',
        container: 'bottom-left',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
          showIcon: true,
        },
      });
/*       console.log({ listRes }); */
      return listRes;
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    if (added.status) {
      addToList(added.email);
      setAdded({ status: false, email: '' });
    }
  }, [addToList, added]);

  const handleEmail = async (e) => {
    e.preventDefault();
    if (email === '') {
      return store.addNotification({
        message: 'Please Enter your Email!',
        type: 'danger',
        insert: 'center',
        container: 'bottom-left',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
          showIcon: true,
        },
      });
    }
    let config = {
      method: 'post',
      url: 'https://api.sendinblue.com/v3/contacts',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_TOKEN,
      },
      data: JSON.stringify({ email: email }),
    };

    try {
      const res = await axios(config);
      store.addNotification({
        message: 'Thank you for subscribing',
        type: 'success',
        insert: 'center',
        container: 'bottom-left',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
          showIcon: true,
        },
      });
      setAdded({ status: true, email: email });
      setEmail('');
      return res;
    } catch (error) {
      setAdded({ status: false, email: null });
      store.addNotification({
        message: 'Already exist! Subscribe with a different email',
        type: 'warning',
        insert: 'center',
        container: 'bottom-left',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 4000,
          onScreen: true,
          showIcon: true,
        },
      });
    }
  };

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <section>
          <div className={css.logo}>
            <img src={require('../../assets/shortcut-logo.png')} alt='shortcut-logo' />
          </div>
          <div className={css.icons}>
            <div>
              <a
                href='https://www.facebook.com/theshortcut/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={require('../../assets/icons/facebook.png')} alt='facebook-icon' />
              </a>
            </div>
            <div>
              <a
                href='https://www.instagram.com/theshortcutorg/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={require('../../assets/icons/instagram.png')} alt='instagram-icon' />
              </a>
            </div>
            <div>
              <a
                href='https://twitter.com/theshortcutorg?lang=en'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={require('../../assets/icons/twitter.png')} alt='twitter-icon' />
              </a>
            </div>
            <div>
              <a
                href='https://www.linkedin.com/company/theshortcut/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={require('../../assets/icons/linkedin.png')} alt='linkedin-icon' />
              </a>
            </div>
          </div>

          <div className={css.menu}>
            <div>
              <h4>About Us</h4>
              <Link to='/faq'>
                <p>FAQ</p>
              </Link>
              <Link to='/code'>
                <p>Code of Conduct</p>
              </Link>
              <Link to='/values'>
                <p>Values &amp; Principles</p>
              </Link>
              <Link to='/terms'>
                <p>Terms of use</p>
              </Link>
              <Link to='/privacy'>
                <p href='/privacy'>Privacy Policy</p>
              </Link>
            </div>

            <div>
              <h4>Join Us</h4>
              {/* <p>Events</p> */}
              <Link to='/events'>
                <p>Events</p>
              </Link>
              <a
                href='https://www.facebook.com/theshortcut/'
                target='_blank'
                rel='noopener noreferrer'>
                Join Community
              </a>
              <a
                href='https://thehub.io/jobs?search=the%20shortcut&countryCode=FI'
                target='_blank'
                rel='noopener noreferrer'>
                Work with Us
              </a>
            </div>

            <div>
              <h4>Resources</h4>
              <Link to='/forpartners'>
                <p>For partners</p>
              </Link>
              <a href='https://theshortcut.org/blog/' target='_blank' rel='noopener noreferrer'>
                Blog
              </a>
              <Link to='/media'>
                <p>For media</p>
              </Link>
              <a
                href='https://theshortcut.org/wp-content/uploads/2019/11/white-paper-diversity-and-inclusion-in-tech.pdf'
                target='_blank'
                rel='noopener noreferrer'>
                White paper
              </a>
            </div>
          </div>

          <p className={css.copyright}> © 2020, The Shortcut. All rights reserved.</p>
        </section>

        <section>
          <div id='newsletter-subscription'>
            <p className={css.text}>
              We equip talent with the skills and networks they need to become an entrepreneur or
              work for a high-growth company/startup.
            </p>
            <form onSubmit={handleEmail}>
              <h4>Subscribe to our newsletter</h4>
              <input
                type='email'
                placeholder='Email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type='submit' value='Go' />
            </form>
            <div>
              <Link to='/contact'>
                <button className={css.button}>Contact us</button>
              </Link>
            </div>
          </div>
          <div className={css.info}>
            <p>info@theshortcut.org | +358 46 640 3900 </p>
            <p>Lapinlahdenkatu 16 (Maria 01, entrance 15B), 00180 Helsinki </p>
            <p className={css.copyright}> © 2020, The Shortcut. All rights reserved.</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
