import React from "react";

import TalentList from "./TalentList";

// Styles
import css from "./styles.module.scss";

const TalentPool = () => {
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
