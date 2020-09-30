import React from "react";

// Styles
import css from "./styles.module.scss";

const Speakers = (props) => {
  const { name, image, position, email, linkedin } = props.acf;

  return (
    <div className={css.profile}>
      <img src={image} alt="teammate" />
      <div className={css.info}>
        <h4>{name}</h4>
        <p>{position}</p>
        <div className={css.links}>
          <a href={`mailto:${email}`}>
            <img
              src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
              alt="mail-icon"
            ></img>
          </a>
          <a href={linkedin}>
            {" "}
            <img
              src="https://theshortcut.org/wp-content/uploads/2019/10/linkedin-2.png"
              alt="linkedin-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
