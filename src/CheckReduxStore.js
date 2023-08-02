import React from "react";
import { useSelector } from "react-redux";

const CheckReduxStore = () => {
  // Use the useSelector hook to access data from the Redux store
  const username = useSelector((state) => state.userReducer.username);
  const password = useSelector((state) => state.userReducer.password);
  const role = useSelector((state) => state.userReducer.role);

  return (
    <div>
      <h1>Redux Store Data:</h1>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default CheckReduxStore;
