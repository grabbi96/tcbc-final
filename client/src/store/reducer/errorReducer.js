import { CATCH_ERROR } from "../actions/types";

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case CATCH_ERROR: {
      return action.payload.error;
    }
    default:
      return state;
  }
};

export default errorReducer;
