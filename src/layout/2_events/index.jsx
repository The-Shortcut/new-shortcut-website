import React, { useState } from "react";

// Styles
import css from "./styles.module.scss";

// Children
import EventsList from "./EventsList";
import Toolbar from "./Toolbar";

const Events = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={css.container}>
      <header>
        <h2>
          Events
          <span>Find yours and register now!</span>
        </h2>
        <div>
          <img
            src={require("../../assets/illustrations/search.png")}
            alt="illustration"
          />
        </div>
      </header>
      <section>
        <p>
          The Shortcut organises a huge range of events and there’s always
          something on. From workshops to training programs, our events connect
          you with experts ready to offer you the skills and knowledge you need
          to make it in the Finnish tech industry and the startup ecosystem –
          and they’re free to boot!
        </p>{" "}
        <p>
          Curious about what’s up and coming? Take a look at our events
          calendar.
        </p>
      </section>
      <h3>Search events</h3>
      <Toolbar setSearch={setSearch} />
      <EventsList search={search} />
    </div>
  );
};

export default Events;
