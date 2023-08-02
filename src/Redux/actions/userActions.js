export const SET_USER_ROLE = "SET_USER_ROLE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const setUserRole = (role) => ({
  type: SET_USER_ROLE,
  payload: role,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (username, password) => (dispatch) => {
  
  if (username === "manager" && password === "password") {
    dispatch(loginSuccess());
    dispatch(setUserRole("MANAGER"));
  } else {
    dispatch(loginFailure("Invalid username or password"));
  }
};
