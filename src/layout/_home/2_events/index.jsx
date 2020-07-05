import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import SkeletonList from "../../../components/functional/SkeletonList";

// Styles
import css from "./styles.module.scss";

// Children
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_TOKEN = `${process.env.REACT_APP_EVENT_API_TOKEN}`;

  useEffect(() => {
    getEvents(); // eslint-disable-next-line
  }, []);

  const getEvents = async () => {
    await Axios.get(
      `https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&token=${API_TOKEN}`
    )
      .then((response) => {
        console.log(response.status);
        setEvents(response.data.events);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={css.container}>
      <div>
        <header>
          <p>Upcoming events:</p>
        </header>
        {loading && <SkeletonList />}
        {events
          // .slice(0, 3)
          .map((event, i) =>
            moment(event.start.local).isAfter() ||
            moment(event.end.local).isAfter() ? (
              <Event key={i} event={event} />
            ) : null
          )}
        <footer>
          <Link to="/events">
            <span>See all events</span>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Events;
