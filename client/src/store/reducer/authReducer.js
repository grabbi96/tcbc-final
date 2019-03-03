import { SET_USER } from "../actions/types";

let intialState = {
  isAuthenticate: false,
  user: {}
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        user: action.payload.user,
        isAuthenticate: Object.keys(action.payload.user).length !== 0
      };
    }
    default:
      return state;
  }
};

export default authReducer;
