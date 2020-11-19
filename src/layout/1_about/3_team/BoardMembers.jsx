import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { boardMembers } from "../../../actions/teamActions";

//Styles
import css from "./styles.module.scss";

// Children
import Profile from "./Profile";

const BoardMembers = () => {
  const board = useSelector((state) => state.team.boards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardMembers());
  }, [dispatch]);

  return (
    <div className={css.board}>
      <h3>Board</h3>
      {board?.reverse().map((person, i) => (
        <Profile key={i} {...person} />
      ))}
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
    </div>
  );
};

export default BoardMembers;
