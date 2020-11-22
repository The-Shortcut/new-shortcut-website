import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./styles.module.scss";

const AboutUs = () => {
  return (
    <div>
      <div className={css.container}>
        <header>
          <h2>About us</h2>
        </header>
        <p>
          The Shortcut is the largest talent accelerator in the Nordics. We
          equip talent with the skills and networks they need to drive
          growth and innovation, and to kickstart their entry into the Finnish
          startup world.{" "}
        </p>
        <p>
          Owned by Startup Foundation, The Shortcut is a non-profit organization
          dedicated to enhancing and expanding the startup community in the
          Nordics. We are committed to helping fill the talent gap by addressing
          the needs of the ecosystem and creating programs that feed talent into
          high-growth companies. Through our workshops and training sessions, we
          help our community achieve personal growth through upskilling,
          reskilling, and expanding their personal networks.{" "}
        </p>
        <p>
          The Shortcut has already helped thousands of people accelerate their
          entry into the startup world; so what are you waiting for? Join our
          community – we just might be the shortcut to your dream career.{" "}
        </p>
        <div className={css.image}></div>

        <Link to="/contact">
          <button>Join Now</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
