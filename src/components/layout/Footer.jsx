import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./Footer.module.scss";

const Footer = () => {
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
              <h4>About</h4>
              <Link to="/faq">
                <p>FAQ</p>
              </Link>
              <Link to="/code">
                <p>Code of coduct</p>
              </Link>
              <Link to="/">
                <p>Careers</p>
              </Link>
              <Link to="/">
                <p>Terms of use</p>
              </Link>
              <Link to="/privacy">
                <p href="/privacy">Privacy policy</p>
              </Link>
            </div>
            <div>
              <h4>Programs</h4>
              <p>Events</p>
              <p>Trainings</p>
              <p>Certifications</p>
              <p>Clubs</p>
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

        <section>
          <div>
            <p className={css.text}>
              We equip talent with the skills and networks they need to become
              an entrepreneur or work for a high-growth company/startup.
            </p>
            <form>
              <h4>Subscribe to our newsletter</h4>
              <input type="email" />
              <input type="submit" value="Go" />
            </form>
            <div>
              <button>Contact us</button>
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
