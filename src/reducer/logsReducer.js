import { SET_LOADING, LOGS_ERROR, GET_LOGS } from "../action/types";

const initialState = {
  logs: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
