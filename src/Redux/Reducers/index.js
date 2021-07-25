import { combineReducers } from "redux";
import userPageReducer from "./userPageReducer";
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  userPageReducer,
});

export default rootReducer;