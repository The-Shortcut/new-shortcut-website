import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

// Layout components
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

//Functional components
import ScrollTopArrow from './components/functional/ScrollTopArrow';
import ScrollToTop from './components/functional/ScrollToTop';

import ReactNotification from 'react-notifications-component';

// Home
import Home from './layout/_home/index.jsx';

// About
import AboutUs from './layout/1_about/1_about_us/index.jsx';
import SuccessStories from './layout/1_about/2_success_stories/index.jsx';
import Team from './layout/1_about/3_team/index.jsx';
import Code from './layout/1_about/4_code/index.jsx';
import Values from './layout/1_about/7_values/index.jsx';
import FAQ from './layout/1_about/5_faq/index.jsx';
import Contact from './layout/1_about/6_contact/index.jsx';
import TalentPool from './layout/1_about/8_talent_pool/index.jsx';

// Resources
import ForMedia from './layout/3_resources/3_for_media/index.jsx';
import Blog from './layout/3_resources/1_blog/index.jsx';

// For partners
import ForPartners from './layout/4_ForPartners';

// Events
import Events from './layout/2_events/index.jsx';
import Byob from './layout/2_events/byob/index.jsx';

// Visit
import Visit from './layout/5_visit/index.jsx';

// Footer
import PrivacyPolicies from './layout/docs/PrivacyPolicies';
import TermsOfServices from './layout/docs/TermsOfServices';
import DataDescription from './layout/docs/DataDescription';


// Google Tag Manager
const tagManagerArgs = {
  gtmId: 'GTM-5R9HFRX',
};

export class App extends Component {
  componentDidMount() {
    // Google Analytics
    ReactGA.initialize('UA-126129205-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    TagManager.initialize(tagManagerArgs);
  }
  render() {
    return (
      <Router>
        <ReactNotification />
        <ScrollToTop />
        <ScrollTopArrow />
        <Nav />
        <Switch>
          {/* Home */}
          <Route exact path='/' component={Home} />

          {/* About */}
          <Route exact path='/about' component={AboutUs} />
          <Route exact path='/success' component={SuccessStories} />
          <Route exact path='/talent-pool' component={TalentPool} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/contact' component={Contact} />

          {/* All events */}
          <Route exact path='/events' component={Events} />
          {/* <Route exact path='/byob' component={Byob} /> */}

          {/* Resources */}
          <Route exact path='/media' component={ForMedia} />
          <Route exact path='/blog' component={Blog} />

          {/* For partners */}
          <Route exact path='/forpartners' component={ForPartners} />

          {/* Visit */}
          <Route exact path='/visit' component={Visit} />

          {/* Footer */}
          <Route exact path='/privacy' component={PrivacyPolicies} />
          <Route exact path='/code' component={Code} />
          <Route exact path='/values' component={Values} />
          <Route exact path='/terms' component={TermsOfServices} />
          <Route exact path='/data-description' component={DataDescription} />
          <Route exact render={() => <Redirect to='/' />} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
