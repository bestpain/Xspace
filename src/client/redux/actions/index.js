import {
  GET_LAUNCHES_REQUEST,
  FETCH_ALL_LAUNCHES,
  SET_LAND_FILTER,
  SET_LAUNCH_FILTER,
  SET_YEAR_FILTER,
  CLEAR_LAUNCH_RESULTS,
  CLEAR_FITLERS,
  FETCH_ERROR,
  GET_FILTERED_LAUNCHES_REQUEST,
} from "./actionTypes";

export const fetchLaunchesRequest = () => ({
  type: GET_LAUNCHES_REQUEST,
});

export const filterLaunchesRequest = (year, launch, land) => ({
  type: GET_FILTERED_LAUNCHES_REQUEST,
  payload: { year, launch, land },
});

export const fetchAllLaunches = (result) => ({
  type: FETCH_ALL_LAUNCHES,
  payload: result.data,
});

export const fetchError = ({ error }) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const filterYear = (year) => ({
  type: SET_YEAR_FILTER,
  payload: year,
});

export const clearLaunchesResults = () => ({
  type: CLEAR_LAUNCH_RESULTS,
});

export const filterLaunch = (bool) => ({
  type: SET_LAUNCH_FILTER,
  payload: bool,
});

export const filterLand = (bool) => ({
  type: SET_LAND_FILTER,
  payload: bool,
});

export const clearFilters = () => ({
  type: CLEAR_FITLERS,
});
