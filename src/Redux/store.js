import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; // Assuming you have a rootReducer to combine reducers

const store = configureStore({
  reducer: rootReducer,
  // Add other middleware or dev tools as needed
});

export default store;
