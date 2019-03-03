import { CATCH_ERROR } from "./types";

export const setError = error => ({
  type: CATCH_ERROR,
  payload: { error: error ? error : "" }
});
