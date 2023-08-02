import React from "react";

const AccessDenied = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>You do not have permission to access this page.</p>
      {/* You can add a button to redirect the user to a different page */}
      {/* Example: <Link to="/">Go Back to Home</Link> */}
    </div>
  );
};

export default AccessDenied;
