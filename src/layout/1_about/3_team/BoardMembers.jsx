import React, { useState, useEffect } from "react";
import Axios from "axios";

//Styles
import css from "./styles.module.scss";

// Children
import Profile from "./Profile";

const BoardMembers = () => {
  const [board, setBoard] = useState([]);
  const URL = "https://theshortcut.org/wp-json/wp/v2/board/?per_page=100";

  useEffect(() => {
    getBoard();
  }, []);

  const getBoard = async () => {
    await Axios.get(URL).then((response) => {
      setBoard(response.data);
    });
  };

  return (
    <div className={css.board}>
      <h3>Board</h3>
      {board.reverse().map((person, i) => (
        <Profile key={i} {...person} />
      ))}
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
    </div>
  );
};

export default BoardMembers;
