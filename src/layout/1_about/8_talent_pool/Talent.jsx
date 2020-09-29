import React from "react";

// // Styles
import css from "./styles.module.scss";

const Talent = ({ data }) => {
  return (
    <div className={css.talent}>
      <img src={data.image} alt="" />
      <div className={css.info}>
        <h4>{data.name}</h4>
        <p>{data.hashtags}</p>
        <div className={css.links}>
          <a href={`mailto:${data.email}`}>
            <img
              src="https://theshortcut.org/wp-content/uploads/2019/10/email-icon-01.png"
              alt="mail-icon"
            ></img>
          </a>
          <a href={data.linkedInProf}>
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

export default Talent;
