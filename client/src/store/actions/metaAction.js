import { SET_LOADING, SET_TOAST_MESSAGE } from "./types";

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: { isLoading: loading }
});

export const setToastMessage = toastMessage => ({
  type: SET_TOAST_MESSAGE,
  payload: { toastMessage: toastMessage ? toastMessage : "" }
});
