import { combineReducers } from "redux";
import spaceReducer from "./spaceReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  Launches: spaceReducer,
  Filters: filterReducer,
});
