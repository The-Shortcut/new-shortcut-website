import React from "react";

// Styles
import css from "./styles.module.scss";

const Values = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>Values &amp; Principles</h2>
      </header>
      <section>
        <h3>
          <span>1.</span> We Are Inclusive
        </h3>
        <p>
          We welcome all backgrounds and identities, celebrating human diversity.
        </p>
      </section>
      <section>
        <h3>
          <span>2.</span> We Are Impact Driven
        </h3>
        <p>
          We aim to make a positive impact in our work, community and society as a whole.
        </p>
      </section>
      <section>
        <h3>
          <span>3.</span> We Are A Community
        </h3>
        <p>
          We are for the people, by the people. We support each other in our pursuit of 
          employment, entrepreneurship and giving back.
        </p>
      </section>
      <section>
        <h3>
          <span>4.</span> We Have A Hungry Attitude For Growth
        </h3>
        <p>
          We are ambitious and welcome change as an opportunity to realize our goals. 
          We are realistic in our approach, ensuring our growth is of high quality and maintained.
        </p>
      </section>
      <section>
        <h3>
          <span>5.</span> We Help Individuals Reach Their Full Potential
        </h3>
        <p>
          We strive to reach our full potential and support others in doing the same. 
          We provide you the opportunities to network, unleash your hidden talents and 
          thrive within the startup community.
        </p>
      </section>
    </div>
  );
};

export default Values;
