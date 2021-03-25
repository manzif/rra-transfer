import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/type";

const INITIAL_STATE = {
  logging: false,
  isAuth: false,
  errors: [],
  userInfo: ""
};

export const authReducer = (state = INITIAL_STATE, action) => {
  console.log("\n\n", action);
  switch (action.type) {
    case LOGIN_START:
      return Object.assign({}, state, { logging: true });
    case LOGIN_SUCCESS:
      return {...state, logging: false, isAuth: true, userInfo: action.userInfo.user.firstname };
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        logging: false,
        errors: action.errors,
      });
    case LOGOUT:
      return Object.assign({}, state, { isAuth: false });
    default:
      return state;
  }
};
