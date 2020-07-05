import React, { useState, useEffect } from "react";
import Axios from "axios";

const Venue = (props) => {
  const [venue, setVenue] = useState([]);
  const [address, setAddress] = useState({});
  const id = props.id;

  useEffect(() => {
    getVenue(); // eslint-disable-next-line
  }, []);

  const getVenue = async () => {
    await Axios.get(
      `https://www.eventbriteapi.com/v3/venues/${id}/?token=AZNI42XD3WB4DJ5MPNSW`
    ).then((response) => {
      setVenue(response.data);
      setAddress(response.data.address);
    });
  };

  return (
    <p>
      {venue.name === "Online event" ? null : (
        <span>
          {venue.name ? (
            <span>
              `{venue.name}, {address.localized_address_display}`
            </span>
          ) : (
            <span>{address.localized_address_display}</span>
          )}
        </span>
      )}
    </p>
  );
};

export default Venue;
