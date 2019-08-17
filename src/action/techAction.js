import {
  GET_TECHS,
  TECH_ERROR,
  SET_LOADING,
  DELETE_TECH,
  ADD_TECH
} from "./types";
import { async } from "q";

// Get Techs
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.data
    });
  }
};

// Delete Techs
export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: "DELETE"
    });
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.data
    });
  }
};

// Add Tech
export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
