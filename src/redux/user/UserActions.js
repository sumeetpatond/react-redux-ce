import {
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAIL,
} from "./UserConstants";

export const fetchUserRequest = function () {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = function (users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFail = function (errorMessage) {
  return {
    type: FETCH_USER_FAIL,
    payload: errorMessage,
  };
};

export const fetchUser = function () {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(fetchUserSuccess(data));
    } catch (e) {
      dispatch(fetchUserFail(e.message));
    }
  };
};
