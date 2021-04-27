import React,{useEffect} from "react";

import TalentList from "./TalentList";

// Styles
import css from "./styles.module.scss";

import TagManager from 'react-gtm-module';

const TalentPool = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'Talent Pool',
        path: '/talent-pool',
      },
    });
  }, []);
  return (
    <div className={css.container}>
      <header>
        <h2>Talent Pool </h2>
      </header>

      <TalentList />
    </div>
  );
};

export default TalentPool;
