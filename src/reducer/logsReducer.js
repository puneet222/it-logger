import {
  SET_LOADING,
  LOGS_ERROR,
  GET_LOGS,
  DELETE_LOG,
  ADD_LOG
} from "../action/types";

const initialState = {
  logs: null,
  error: null,
  current: null,
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
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
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
