import React from "react";
import Hero from "./1_hero/index.jsx";
import Events from "./2_events/index.jsx";
import Partners from "./3_partners/index.jsx";
import Data from "./4_data/index.jsx";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Data />
        <Events />
        <Partners />
      </div>
    );
  }
}
