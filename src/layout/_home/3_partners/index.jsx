import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./styles.module.scss";

const Partners = () => {
  return (
    <div className={css.container}>
      <header>
        <p>Partners</p>
        <p>
          Our partners range from leading tech companies to governmental
          organisations and NGO. With their help, we’re able to train and
          connect talent to the tech industry.
        </p>
      </header>

      <div>
        <a
          href="https://www.mege.fi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_EU-logos-600x424.png"
            alt="partner-logo"
          />
        </a>

        <a
          href="https://www.hel.fi/helsinki/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Helsinki-logo-600x424.png "
            alt="partner-logo"
          ></img>
        </a>

        <a
          href="https://pulse.microsoft.com/fi-fi/microsoft-flux-all-about-people/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Microsoft-logo-600x424.png "
            alt="partner-logo"
          />
        </a>

        <a
          href="https://maria.io/directories/ecosystem-builders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Maria-01-logo-1.png"
            alt="partner-logo"
          ></img>
        </a>

        <a
          href="https://www.slush.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Slush-logo-1.png"
            alt="partner-logo"
          />
        </a>

        <a
          href="https://www.hackjunction.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Junction-logo.png"
            alt="partner-logo"
          />
        </a>

        <a
          href="https://wave.ventures/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Wave-Ventures-logo-2.png"
            alt="partner-logo"
          />
        </a>
      </div>

      <footer>
        <Link to="/forpartners">
          <p>Work with us</p>
        </Link>
      </footer>
    </div>
  );
};

export default Partners;
