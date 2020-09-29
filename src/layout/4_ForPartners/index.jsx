import React from "react";

// Styles
import "./styles.scss";

// Children
import Accordion from "./Accordion";

const ForPartners = () => {
  return (
    <div className="container">
        <header>
          <h2>
            {" "}
            For Partners
          </h2>
        </header>

      <section>
          <p>
              With a robust set of acquisition, skill-stacking and community
              services, The Shortcut’s main objective is to scale our offering to
              allow partners to acquire the right talent, retain the best people,
              and expand employees’ skill sets to facilitate entrepreneurship,
              growth and innovation. Our partners range from leading tech companies
              to governmental organisations and NGOs. With their help, we’re able to
              train and connect talent to the tech industry. <br /> 
              If you are intrested in partnering with us, get in touch with{" "}
              <a href="mailto:piia@theshortcut.org">Piia Kuosmanen</a>.
            </p>
          <div>
            <img
              src={require("../../assets/illustrations/4.png")}
              alt="illustration"
            />
          </div>
      </section>

      <h3>Learn about our initiatives:</h3>

      <Accordion className="question"/>
      <div className="contact">
        <p>
        If you are intrested in partnering with us, get in touch with{" "}
          <a href="mailto:piia@theshortcut.org">Piia Kuosmanen</a>.
        </p>
      </div>
    </div>
  );
};

export default ForPartners;
