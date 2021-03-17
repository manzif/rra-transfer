import axios from "axios";
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./types";

const BASE_URL = 'https://dataprocessor.api.lmis.techclick.rw';


const loginStart = () => {
    return {
        type: LOGIN_START
    };
};

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    };
};

export const loginFailure = (errors) => {
    return {
        type: LOGIN_FAILURE,
        errors
    };
};

export const checkAuthState = () => {
    return (dispatch) => {
        if (authService.isAuthenticated()) {
            dispatch(loginSuccess());
        }
    };
};

export const login = (userData) => {
    return (dispatch) => {
        return axios
            .post(`${BASE_URL}/login`, {
                ...userData
            })
            .then(dispatch(loginStart()))
            .then((res) => {
                if (res.status === 200) {
                    authService.saveObject(res.data.body); // Storing access token to local storage
                    dispatch(loginSuccess());
                } else {
                    const msg = res.data.description ?
                        res.data.description :
                        "Incorrect email or password!";
                    dispatch(loginFailure(msg));
                }
            })
            .catch((error) => {
                if (error.status === 500 || error.status === 502 || error.status === 503) {
                    dispatch(loginFailure(error.message));
                }
            });
    };
};

export const logout = () => {
    authService.invalidateUser();
    return {
        type: LOGOUT
    };
};
