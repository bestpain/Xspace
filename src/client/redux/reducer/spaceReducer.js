import {
  FETCH_ALL_LAUNCHES,
  CLEAR_LAUNCH_RESULTS,
} from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_LAUNCHES:
      return action.payload;
    case CLEAR_LAUNCH_RESULTS:
      return [];
    default:
      return state;
  }
};
