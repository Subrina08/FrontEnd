import { combineReducers } from "redux";
import userReducer from "./userReducer"; // Assuming you have a userReducer to handle user-related actions

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

export default rootReducer;
