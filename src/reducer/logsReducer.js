import {
  SET_LOADING,
  LOGS_ERROR,
  GET_LOGS,
  DELETE_LOG,
  ADD_LOG,
  EDIT_LOG,
  SET_CURRENT_LOG,
  SEARCH_LOGS
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
    case EDIT_LOG:
      return {
        ...state,
        logs: state.logs.map(log => {
          return log.id === action.payload.id ? action.payload : log;
        }),
        loading: false
      };
    case SET_CURRENT_LOG:
      return {
        ...state,
        current: action.payload
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload
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
