import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import Search from "./Search";

const Toolbar = ({setSearch}) => {
  return (
    <div className={css.toolbar}>
      <ul>
        <li>
          <Search setSearch={setSearch} />
        </li>
        <li onClick={() =>setSearch('workshop')}>Workshops</li>
        <li onClick={() =>setSearch('training')}>Trainings</li>
        <li onClick={() =>setSearch('certification')}>Certifications</li>
        <li onClick={() => setSearch('club')}>Clubs</li>
      </ul>
      <ul>
        <li onClick={() => setSearch('my startup debut')}>#mystartupdebut</li>
        <li onClick={() => setSearch('python')}>#python</li>
        <li onClick={() => setSearch('talent heist')}>#talentheist</li>
        <li onClick={() => setSearch('school of startup')}>#schoolofstartups</li>
      </ul>
    </div>
  );
};

export default Toolbar;
