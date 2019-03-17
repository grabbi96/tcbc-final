import { SET_USER, SET_RESET_PASSWORD_USER } from "../actions/types";

let intialState = {
  isAuthenticate: false,
  user: {},
  resetPasswordUser: {}
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload.user,
        isAuthenticate: Object.keys(action.payload.user).length !== 0
      };
    }
    case SET_RESET_PASSWORD_USER: {
      return {
        ...state,
        resetPasswordUser: action.payload.resetUser
      };
    }
    default:
      return state;
  }
};

export default authReducer;
