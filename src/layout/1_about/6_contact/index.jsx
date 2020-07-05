import React from "react";

// Styles
import css from "./styles.module.scss";

// Children
import Map from "./Map";

const Contact = () => {
  return (
    <div className={css.container}>
      <section>
        <header>
          <h2>Get in touch</h2>
          <div>
            <img
              src={require("../../../assets/illustrations/7.png")}
              alt="illustration"
            />
          </div>
        </header>
        <aside>
          <div>
            <div>
              <img
                src={require("../../../assets/illustrations/7.png")}
                alt="illustration"
              />
            </div>
            <div>
              <img
                src={require("../../../assets/illustrations/5.png")}
                alt="illustration"
              />
            </div>
          </div>
        </aside>

        <form>
          {" "}
          <label htmlFor="name">
            Name: <input type="text" name="name" />
          </label>
          <label htmlFor="email">
            {" "}
            Email: <input type="email" name="email" />
          </label>
          <select name="subjects" defaultValue={"DEFAULT"}>
            <option value="DEFAULT">Choose subject</option>
            <option value="1">Trainings and clubs</option>
            <option value="2">Events and workshops</option>
            <option value="3">Sales and partnerships</option>
            <option value="4">Becoming a part of the community </option>
          </select>
          <label htmlFor="message">
            Message:<textarea type="message"></textarea>
          </label>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>

      <section>
        <div>
          <h3>Where to find us:</h3>
          <div>
            <p> The Shortcut Lab</p>
            <p>+358 46 640 3900</p>
            <p>info@theshortcut.org</p>
            <p> Maria01 (entrance 15B), Lapinlahdenkatu 16, 00180, Helsinki</p>
            <p>Open Monday &mdash; Friday, 9am &mdash; 5pm </p>{" "}
            <p>(or until the last event of the day is over)</p>
          </div>
        </div>
      </section>

      <section>
        <Map />
      </section>
    </div>
  );
};

export default Contact;
