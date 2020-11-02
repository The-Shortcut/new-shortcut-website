import React from "react";

// Styles
import css from "./styles.module.scss";

const Code = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>Code of conduct</h2>
      </header>
      <section>
        <h3>
          <span>1.</span> Background
        </h3>
        <p>
          Emerging from the tech ecosystem in 2016, The Shortcut has become the
          largest talent accelerator in the Nordics. A sister organisation to
          Slush, Maria 01, Junction, and Wave Ventures, The Shortcut is a
          not-for-profit talent accelerator dedicated to enhancing and expanding
          the startup community. With a robust set of skill-stacking, employment
          and community services, The Shortcut’s main objective is to scale our
          offering to allow partners to acquire the right talent, retain the
          best people, and expand employees’ skill sets to facilitate
          entrepreneurship, growth and innovation. Located in Maria 01, The
          Shortcut is at the epicenter of the Nordics’ startup community.
        </p>
      </section>
      <section>
        <h3>
          <span>2.</span> Purpose
        </h3>
        <p>
          Everyone in our community deserves and should expect to feel safe and
          welcome at our events, in our space, and with our staff. By
          establishing a code of conduct The Shortcut is able to create an
          environment that is happy, safe, accepting, and for everyone. This
          code of conduct outlines The Shortcut’s expectations regarding
          employee, intern, volunteer, community member and event attendee’s
          conduct. Any breach of these principles will lead to disciplinary
          action.
        </p>
      </section>
      <section>
        <h3>
          <span>3.</span> Scope
        </h3>
        <p>
          All employees, interns, volunteers, community members and event
          attendees are expected to adhere to The Shortcut’s code of conduct
          across all activities.
        </p>
      </section>
      <section>
        <h3>
          <span>4.</span> Code of conduct
        </h3>
        <p>
          When participating in any activity associated with The Shortcut, I
          will:
        </p>
        <ul className={css.parent}>
          <li>&mdash; Comply with local law</li>
          <li>&mdash; Show professionalism and integrity</li>
          <li>&mdash; Act and work openly and collaboratively </li>
          <li>
            &mdash; Respect all members of The Shortcut and{" "}
            <strong>will not:</strong>
            <ul>
              <li>&mdash; Stereotype</li>
              <li>&mdash; Use racist or discriminatory language</li>
              <li>&mdash; Bully other members</li>
              <li>&mdash; Harass other members </li>
              <li>
                &mdash; Discriminate based on age, gender, sexual orientation,
                nationality, religious beliefs or other traits
              </li>
              <li>
                &mdash; Condone, encourage or advocate any of the above
                behaviors{" "}
              </li>
            </ul>
          </li>
          <li>
            &mdash; Protect &amp; respect the The Shortcut’s property including The
            Shortcut’s office space
          </li>
          <li>
            &mdash; Not participate in any activity that could be considered a
            conflict of interest
          </li>
          <li>
            &mdash; Comply with any other of The Shortcut’s policies where
            appropriate{" "}
          </li>
        </ul>
      </section>
      <section>
        <h3>
          <span>5.</span> Disciplinary action
        </h3>
        <p>
          Failure to comply with The Shortcut’s code of conduct will result in
          one of the following actions, depending on the severity of the
          violation:
        </p>
        <ul>
          <li>&mdash; Reprimand</li>
          <li>&mdash; Removal from The Shortcut’s activities </li>
          <li>&mdash; Permanent expulsion from The Shortcut’s activities</li>
          <li>&mdash; Permanent expulsion from The Shortcut’s office space</li>
          <li>&mdash; Termination of contract</li>
        </ul>
      </section>
      <section>
        <h3>
          <span>6.</span> What to do if you observe inappropriate conduct
        </h3>
        <p>
          If you are a victim of or observe inappropriate conduct you must
          inform The Shortcut HR team immediately:{" "}
          <a href="mailto:hr@theshortcut.org">hr@theshortcut.org</a>
        </p>
      </section>
      <img src="https://admin.theshortcut.org/wp-content/uploads/2019/11/white-paper-snapshot-scaled-scaled.png" alt="" />
    </div>
  );
};

export default Code;
