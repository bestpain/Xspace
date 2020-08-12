import {
  SET_YEAR_FILTER,
  SET_LAUNCH_FILTER,
  SET_LAND_FILTER,
  CLEAR_FITLERS,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  year: null,
  launch: null,
  land: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_YEAR_FILTER:
      return { ...state, year: action.payload };
    case SET_LAUNCH_FILTER:
      return { ...state, launch: action.payload };
    case SET_LAND_FILTER:
      return { ...state, land: action.payload };
    case CLEAR_FITLERS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
