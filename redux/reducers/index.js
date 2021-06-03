import { combineReducers } from "redux";
import auth from "./authReducer";
import list from './userListReducer'

export default combineReducers({
  auth,
  list
});
