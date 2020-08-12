import { all } from "redux-saga/effects";
import SpaceSagas from './resultsSaga'

export default function* rootSaga() {
  yield all([...SpaceSagas]);
}
