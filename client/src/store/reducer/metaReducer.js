import { SET_TOAST_MESSAGE, SET_LOADING } from "../actions/types";

const init = {
  isLoading: false,
  toastMessage: ""
};

const metaReducer = (state = init, action) => {
  switch (action.type) {
    case SET_TOAST_MESSAGE: {
      return {
        ...state,
        toastMessage: action.payload.toastMessage
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading
      };
    }
    default:
      return state;
  }
};

export default metaReducer;
