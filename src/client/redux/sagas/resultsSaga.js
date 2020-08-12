import { takeEvery, call, fork, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/actionTypes";
import { fetchAllLaunches, fetchError } from "../actions";
import { fetchLaunchesAPI, fetchFilteredLaunchesAPI } from "../../../api";
import "@babel/polyfill";

function* getLaunches() {
  try {
    const result = yield call(fetchLaunchesAPI);
    yield put(fetchAllLaunches(result));
  } catch (e) {
    yield put(fetchError({ error: "Error while retriving the Launches" }));
  }
}

function* watchFetchAllLaunchesRequests() {
  yield takeEvery(actions.GET_LAUNCHES_REQUEST, getLaunches);
}

function* getFilteredLaunches(action) {
  try {
    const result = yield call(fetchFilteredLaunchesAPI, {
      year: action.payload.year,
      launch: action.payload.launch,
      land: action.payload.land,
    });
    yield put(fetchAllLaunches(result));
  } catch (e) {
    yield put(fetchError({ error: "Error while retriving the Launches" }));
  }
}

function* watchFetchFilteredLaunchesRequests() {
  yield takeLatest(actions.GET_FILTERED_LAUNCHES_REQUEST, getFilteredLaunches);
}

const SpaceSagas = [
  fork(watchFetchAllLaunchesRequests),
  fork(watchFetchFilteredLaunchesRequests),
];

export default SpaceSagas;
