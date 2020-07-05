import React from "react";

// Styles
import css from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={css.container}>
      <div>
        <aside>
          <h3>Stay up to date</h3>
          <p>
            Subscribe to our newsletter and get monthly updates about what's
            happening in The Shortcut community.
          </p>
        </aside>
        <form>
          <input type="email" placeholder="Email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
