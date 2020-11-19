import React, { useEffect } from "react";

// // Redux
import { useDispatch, useSelector } from "react-redux";
import { allEvents, paginate } from "../../actions/eventActions";

// // Children
import Event from "./Event";
import Pagination from "../../components/functional/Pagination";
import SkeletonEvents from "../../components/functional/SkeletonEvents";
// // Styles
import css from "./styles.module.scss";

const EventsList = () => {
  const isLoading = useSelector((state) => state.events.isLoading);
  const filteredEvents = useSelector((state) => state.events.filteredEvents);
  const currentPage = useSelector((state) => state.events.currentPage);
  const currentItems = useSelector((state) => state.events.currentItems);

  const dispatch = useDispatch();

  useEffect(() => {
    const callActions = async () => {
      await dispatch(allEvents());
      await dispatch(paginate(currentPage));
    };
    callActions();
  }, [currentPage, dispatch]);

  if (isLoading) {
    return (
      <div className={css.list}>
        <SkeletonEvents />
      </div>
    );
  }
  return (
    <div className={css.list}>
      {filteredEvents?.length === 0 ? (
        <p className={css.noResult}>No matching events... </p>
      ) : (
        <>
          <Pagination />
          {currentItems?.map((event, index) => (
            <Event key={index} event={event} />
          ))}
          <Pagination />
        </>
      )}
    </div>
  );
};
export default EventsList;
