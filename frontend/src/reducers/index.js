import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import learningReducer from './learningReducers';
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  learning: learningReducer
});
