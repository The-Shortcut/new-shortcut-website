import React, { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { teamMembers } from "../../../actions/teamActions";

// Styles
import css from "./styles.module.scss";

// Children
import Profile from "./Profile";
import SkeletonGrid from "../../../components/functional/SkeletonGrid";

const TeamMembers = () => {
  const teammates = useSelector((state) => state.team.members);
  const isLoading = useSelector((state) => state.team.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(teamMembers());
  }, [dispatch]);

  return (
    <div className={css.team}>
      {isLoading && <SkeletonGrid />}
      {teammates?.reverse().map((person, i) => (
        <Profile key={i} {...person} />
      ))}
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
      <i aria-hidden={true}></i>
    </div>
  );
};

export default TeamMembers;
