import { createStore } from "redux";
import Reducers from "../client/redux/reducer";

export default () => {
  return createStore(Reducers, {});
};
