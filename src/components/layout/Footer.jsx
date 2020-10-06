import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import helper from "./helperFunctions";
import ReactNotification from "react-notifications-component";
// Styles
import css from "./Footer.module.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  const API_TOKEN = `${process.env.REACT_APP_SEND_IN_BLUE_TOKEN}`;

  const handleEmail = (e) => {
    e.preventDefault();
    // console.log("Email entered is ", email);
    let config = {
      method: "post",
      url: "https://api.sendinblue.com/v3/contacts",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_TOKEN,
      },
      data: JSON.stringify({ email: email }),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        store.addNotification({
          message: "Thank you for subscribing",
          type: "success",
          insert: "center",
          container: "center",
          dismiss: {
            duration: 2000,
            showIcon: true,
          },
        });
        document.getElementById("email").value = "";
        setEmail("");
      })
      .catch(function (error) {
        console.log(error);
        store.addNotification({
          message: "Subscribe with a different email",
          type: "warning",
          insert: "center",
          container: "center",
          dismiss: {
            duration: 3000,
            showIcon: true,
          },
        });
      });
    console.log("Email entered is ", email);
    helper(API_TOKEN, email, setEmail);
  };
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <section>
          <div className={css.logo}>
            <img
              src={require("../../assets/shortcut-logo.png")}
              alt="shortcut-logo"
            />
          </div>
          <div className={css.icons}>
            <div>
              <a
                href="https://www.facebook.com/theshortcut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/icons/facebook.png")}
                  alt="facebook-icon"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/theshortcutorg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/icons/instagram.png")}
                  alt="instagram-icon"
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/theshortcutorg?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/icons/twitter.png")}
                  alt="twitter-icon"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/theshortcut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/icons/linkedin.png")}
                  alt="linkedin-icon"
                />
              </a>
            </div>
          </div>

          <div className={css.menu}>
            <div>
              <h4>About Us</h4>
              <Link to="/faq">
                <p>FAQ</p>
              </Link>
              <Link to="/code">
                <p>Code of Conduct</p>
              </Link>
              <Link to="/values">
                <p>Values &amp; Principles</p>
              </Link>
              <Link to="/terms">
                <p>Terms of use</p>
              </Link>
              <Link to="/privacy">
                <p href="/privacy">Privacy Policy</p>
              </Link>
            </div>

            <div>
              <h4>Join Us</h4>
              {/* <p>Events</p> */}
              <Link to="/events">
                <p>Events</p>
              </Link>
              <a
                href="https://www.facebook.com/theshortcut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </a>
              <a
                href="https://thehub.io/jobs?search=the%20shortcut&countryCode=FI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Work with Us
              </a>
            </div>

            <div>
              <h4>Resources</h4>
              <Link to="/forpartners">
                <p>For partners</p>
              </Link>
              <a
                href="https://theshortcut.org/blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
              <Link to="/media">
                <p>For media</p>
              </Link>
              <a
                href="https://theshortcut.org/wp-content/uploads/2019/11/white-paper-diversity-and-inclusion-in-tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                White paper
              </a>
            </div>
          </div>

          <p className={css.copyright}>
            {" "}
            © 2020, The Shortcut. All rights reserved.
          </p>
        </section>
        <ReactNotification />
        <section>
          <div id="newsletter-subscription">
            <p className={css.text}>
              We equip talent with the skills and networks they need to become
              an entrepreneur or work for a high-growth company/startup.
            </p>
            <form onSubmit={handleEmail}>
              <h4>Subscribe to our newsletter</h4>
              <input
                type="email"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="submit" value="Go" />
            </form>
            <div>
              <Link to="/contact">
                <button className={css.button}>Contact us</button>
              </Link>
            </div>
          </div>
          <div className={css.info}>
            <p>info@theshortcut.org | +358 46 640 3900 </p>
            <p>Lapinlahdenkatu 16 (Maria 01, entrance 15B), 00180 Helsinki </p>
            <p className={css.copyright}>
              {" "}
              © 2020, The Shortcut. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
