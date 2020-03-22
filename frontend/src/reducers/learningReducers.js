import { SET_CURRENT_LEARNING_UNIT } from "../actions/types";
import { SET_ALL_LEARNING_UNITS_OF_SELECTED_MODULE, SET_CURRENT_MODULE } from "../actions/types";
const isEmpty = require("is-empty");

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LEARNING_UNIT:
      return {
        ...state,
        currentUnit: action.payload
      };
    case SET_ALL_LEARNING_UNITS_OF_SELECTED_MODULE:
      return {
        ...state,
        units: action.payload
      };
    case SET_CURRENT_MODULE:
      return {
        ...state,
        currentModule: action.payload
      };
    default:
      return state;
  }
}
