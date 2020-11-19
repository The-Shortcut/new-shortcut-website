import React, { useState } from "react";
import ReactNotification from "react-notifications-component";
import helper from "./handlerFunction";
// Styles
import css from "./styles.module.scss";
import "react-notifications-component/dist/theme.css";

// Children
import Map from "./Map";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const API = `${process.env.REACT_APP_CONTACT_US_API}`;

  const handleContactUs = (e) => {
    e.preventDefault();
    let sub = document.getElementById("subjects");
    let invalid = sub.value === "DEFAULT";
    const result = helper(email, message, subject, name, API, invalid);
    let check = result ? clear() : "";
  };
  const clear = () => {
    document.getElementById("contactForm").reset();
    setEmail("");
    setSubject("");
    setMessage("");
    setName("");
  };
  return (
    <div className={css.container}>
      <ReactNotification />
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

        <form id="contactForm" onSubmit={handleContactUs}>
          {" "}
          <label htmlFor="name">
            Name:{" "}
            <input
              id="name"
              type="text"
              name="name"
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label htmlFor="email">
            {" "}
            Email:{" "}
            <input
              id="email"
              type="email"
              name="email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <select
            name="subjects"
            defaultValue={"DEFAULT"}
            onChange={({ target }) => setSubject(target.value)}
            id="subjects"
          >
            <option value="DEFAULT">Choose subject</option>
            <option value="1">Trainings and clubs</option>
            <option value="2">Events and workshops</option>
            <option value="3">Sales and partnerships</option>
            <option value="4">Becoming a part of the community </option>
          </select>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              type="message"
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
          </label>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>

      <section>
        <div>
          <div className="map-container">
            <h3>Where to find us</h3>
            <Map />
          </div>
          <div className="address">
            <p>The Shortcut Lab</p>
            <p>+358 46 640 3900</p>
            <p>info@theshortcut.org</p>
            <p>
              Maria01 (entrance 15B),
              <br /> Lapinlahdenkatu 16, 00180, Helsinki
            </p>
            <p>Open Monday &mdash; Friday, 9am &mdash; 5pm </p>{" "}
            <p>(or until the last event of the day is over)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
