import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { byobSpeakers } from "../../../actions/teamActions";

//Styles
import css from "./styles.module.scss";

// Children
import Profile from "./Profile";

const Speakers = () => {
  const speaker = useSelector((state) => state.team.speakers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(byobSpeakers());
  }, [dispatch]);

  return (
    <div className={css.speaker}>
      <h3>Speakers</h3>
      {speaker?.reverse().map((person, i) => (
        <Profile key={i} {...person} />
      ))}
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
    </div>
  );
};

export default Speakers;
