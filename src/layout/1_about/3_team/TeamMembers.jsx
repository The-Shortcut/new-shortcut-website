import React, { useState, useEffect } from "react";
import Axios from "axios";

// Styles
import css from "./styles.module.scss";

// Children
import Profile from "./Profile";
import SkeletonGrid from "../../../components/functional/SkeletonGrid";

const TeamMembers = () => {
  const [teammates, setTeammates] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://theshortcut.org/wp-json/wp/v2/team/?per_page=100";

  useEffect(() => {
    getTeammates();
  }, []);

  const getTeammates = async () => {
    await Axios.get(URL).then((response) => {
      setTeammates(response.data);
      setLoading(true); // Hacky approach to fix teammates order
      setLoading(false);
    });
  };

  return (
    <div className={css.team}>
      {loading && <SkeletonGrid />}
      {teammates.reverse().map((person, i) => (
        <Profile key={i} {...person} />
      ))}
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
    </div>
  );
};

export default TeamMembers;
