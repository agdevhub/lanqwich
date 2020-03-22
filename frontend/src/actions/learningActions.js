import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  SET_ALL_LEARNING_UNITS_OF_SELECTED_MODULE,
  SET_CURRENT_MODULE,
  GET_ERRORS
} from "./types";

export const getLearningUnitsOfModule = (moduleId
  //, history
  ) => dispatch => {
  axios
    .get(`/api/learning/modules/${moduleId}/units`)
    .then(res => {
      console.log("I got called finally!");
      const units = res.data;
      dispatch(setAllLearningUnitsOfModule(units));
      // const firstUnit = units.map(unit => unit.sequence == 1);
      const firstUnit = units[0];

      // history.push(`/arabic/module/${moduleId}`);
      //history.push(`/arabic/modules/${moduleId}/units/${firstUnit._id}`);
    })
    .catch(
      err => {}
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
    );
};

export const setAllLearningUnitsOfModule = units => {
  return {
    type: SET_ALL_LEARNING_UNITS_OF_SELECTED_MODULE,
    payload: units
  };
};

export const setCurrentLearningModule = (moduleId, history) => dispatch => {
  dispatch({
    type: SET_CURRENT_MODULE,
    payload: moduleId
  });

  // replace moduleId with moduleSlug
  history.push(`/arabic/modules/${moduleId}`);
};
