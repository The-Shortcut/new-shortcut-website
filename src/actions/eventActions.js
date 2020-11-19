import {
  INIT_EVENTS,
  SEARCH_EVENTS,
  PAGINATION,
  NEXT_PAGE,
  PREV_PAGE,
} from "./types";

import eventServices from "../services/events";

export const allEvents = () => async (dispatch) => {
  const events = await eventServices.getEvents();

  dispatch({
    type: INIT_EVENTS,
    payload: events,
  });
};

export const searchEvents = (item) => (dispatch) => {
  dispatch({
    type: SEARCH_EVENTS,
    payload: item,
  });
};

export const paginate = (number) => (dispatch) => {
  dispatch({
    type: PAGINATION,
    payload: number,
  });
};

export const nextPage = () => (dispatch) => {
  dispatch({
    type: NEXT_PAGE,
  });
};

export const prevPage = () => (dispatch) => {
  dispatch({
    type: PREV_PAGE,
  });
};
