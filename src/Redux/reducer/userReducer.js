import {
  SET_USER_ROLE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/userActions";

const initialState = {
  role: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // Add other cases for different actions if needed
    default:
      return state;
  }
};

export default userReducer;
