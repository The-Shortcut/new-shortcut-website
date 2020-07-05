import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import TeamMembers from "./TeamMembers";
import BoardMembers from "./BoardMembers";

export default function Team() {
  return (
    <div className={css.container}>
      <header>
        <h2>Our team</h2>
      </header>
      <TeamMembers />
      <BoardMembers />
    </div>
  );
}
