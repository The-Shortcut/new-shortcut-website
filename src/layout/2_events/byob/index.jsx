import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

// Children
import Accordion from "./Accordion";
import Speakers from "./Speakers";

const Byob = () => {
  return (
    <div className="container">
      <header>
        <h2> BYOB: Be Your Own Boss</h2>
        <div>
          <img
            src={require("../../../assets/photos/byob-banner.png")}
            alt="illustration"
          />
        </div>
      </header>

      <section>
        <p>
          This autumn The Shortcut is going to inaugurate a new 3 weeks long
          training program called BYOB – Be Your Own Boss (9th – 27th November
          2020), promoting entrepreneurship within the Finnish startup
          ecosystem. The program’s goal is to give participants the fundamental
          tools in order to create a viable company; BYOB will be divided into
          workshops covering a broad range of disciplines, allowing the
          participants to develop their business idea, put into practice the
          teachings, and navigate the ecosystem. So, what are you waiting for?
          Join us!
          <br />
          <a href="https://docs.google.com/forms/d/1FXzJdAgfB0d0-FOfEV1PzbpVtH8uoF2KplpZt6cqavI/viewform?edit_requested=true" target="_blank">
          </a>
        </p>
      </section>
      <Speakers />  
      <button>Apply Now</button>

      <h3>FAQ:</h3>

      <Accordion className="question" />
    </div>
  );
};

export default Byob;
