import {
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from "./UserConstants";

const initialState = {
  loading: false,
  data: [],
  errorMessage: "",
};

const UserReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: "",
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
