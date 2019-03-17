import { SET_USER, SET_RESET_PASSWORD_USER } from "./types";
import Axios from "axios";
import { setError } from "./errorAction";
import { setLoading, setToastMessage } from "./metaAction";
import jwtDecode from "jwt-decode";
export const register = (user, history) => dispatch => {
  dispatch(setLoading(true));
  Axios.post("/api/users/register", user)
    .then(res => {
      dispatch(setLoading(false));
      dispatch(setToastMessage(res.data.message));
      dispatch(setError());
      history.push("/registration-successful");
    })
    .catch(error => {
      console.log("errr", error);
      dispatch(setLoading(false));
      dispatch(setError(error.response.data));
    });
};

export const activateAccount = token => dispatch => {
  console.log(token);
  dispatch(setLoading(true));
  Axios.get(`/api/users/activateaccount/${token}`)
    .then(res => {
      console.log(res);
      dispatch(setLoading(false));
      dispatch(setToastMessage(res.data.message));
      dispatch(setError());
    })
    .catch(error => {
      console.log("errr", error);
      dispatch(setLoading(false));
      dispatch(setError(error.response.data));
    });
};

export const login = (user, history) => dispatch => {
  dispatch(setLoading(true));
  Axios.post("/api/users/login", user)
    .then(res => {
      dispatch(setLoading(false));
      dispatch(setToastMessage(res.data.message));
      dispatch(setError());

      let token = res.data.token;

      localStorage.setItem("auth_token", token);

      let decoded = jwtDecode(token);
      dispatch(setUser(decoded));
      history.push("/");
    })
    .catch(error => {
      console.log("errr", error);
      dispatch(setLoading(false));
      dispatch(setError(error.response.data));
    });
};
export const logout = history => dispatch => {
  dispatch(setUser());
  localStorage.removeItem("auth_token");
  history.push("/login");
};

export const forgotPassword = (userEmail, history) => dispatch => {
  Axios.post("/api/users/forgot-password", userEmail)
    .then(user => {
      dispatch({
        type: SET_RESET_PASSWORD_USER,
        payload: { resetUser: user.data.user }
      });
      history.push("check-reset-password-token");
    })
    .catch(err => {
      dispatch(setError(err.response.data.error));
    });
};

export const token = (userToken, history) => dispatch => {
  Axios.post("api/users/");
};

export const setUser = user => ({
  type: SET_USER,
  payload: { user: user ? user : {} }
});
