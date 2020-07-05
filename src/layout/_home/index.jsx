import React from "react";
import Hero from "./1_hero/index.jsx";
import Events from "./2_events/index.jsx";
import Partners from "./3_partners/index.jsx";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Events />
        <Partners />
      </div>
    );
  }
}
