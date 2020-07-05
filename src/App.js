import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout components
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

//Functional components
import ScrollToTop from "./components/functional/ScrollToTop";

// Home
import Home from "./layout/_home/index.jsx";

// About
import AboutUs from "./layout/1_about/1_about_us/index.jsx";
import SuccessStories from "./layout/1_about/2_success_stories/index.jsx";
import Team from "./layout/1_about/3_team/index.jsx";
import Code from "./layout/1_about/4_code/index.jsx";
import FAQ from "./layout/1_about/5_faq/index.jsx";
import Contact from "./layout/1_about/6_contact/index.jsx";

// Resources
import ForMedia from "./layout/3_resources/3_for_media/index.jsx";
import Blog from "./layout/3_resources/1_blog/index.jsx";

// For partners
import ForPartners from "./layout/4_ForPartners";

// Events
import Events from "./layout/2_events/index.jsx";

// Footer
import PrivacyPolicies from "./layout/docs/PrivacyPolicies";

export class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Nav />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Home} />

          {/* About */}
          <Route path="/story" component={AboutUs} />
          <Route path="/success" component={SuccessStories} />
          <Route path="/team" component={Team} />
          <Route path="/code" component={Code} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />

          {/* All events */}
          <Route path="/events" component={Events} />

          {/* Resources */}
          <Route path="/media" component={ForMedia} />
          <Route path="/blog" component={Blog} />

          {/* For partners */}
          <Route path="/forpartners" component={ForPartners} />

          {/* Footer */}
          <Route path="/privacy" component={PrivacyPolicies} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
