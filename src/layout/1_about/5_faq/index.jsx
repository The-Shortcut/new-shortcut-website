import React,{useEffect} from "react";

// Styles
import "./faq.scss";

// Children
import Accordion from "./Accordion";

import TagManager from 'react-gtm-module';

const FAQ = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'FAQ',
        path: '/faq',
      },
    });
  }, []);
  return (
    <div className="faq">
      <header>
        <h2>
          FAQ
          <br />
          <span>How can we help?</span>
        </h2>

        <div>
          <img
            src={require("../../../assets/illustrations/1.png")}
            alt="illustration"
          />
        </div>
      </header>
      <Accordion />
      <div className="contact">
        <p>
          Haven't found an answer you were looking for? <br />
          Ask away at{" "}
          <a href="mailto:info@theshortcut.org">info@theshortcut.org</a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
