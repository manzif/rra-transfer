import axios from "axios";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./type";

const BASE_URL = "http://35.167.131.59:4000/api/users";

export const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    userInfo: data
  };
};

export const loginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    errors,
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}/login`, {
        email,
        password
      })
      .then(dispatch(loginStart()))
      .then((res) => {
        if (res.status === 200) {
          dispatch(loginSuccess(res.data));
        }
      })
      .catch((error) => {
        if (error.response.data.message === "Wrong email or password") {
          return dispatch(loginFailure(error.response.data.message));
        }
        dispatch(loginFailure(error.message));
      });
  };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};
