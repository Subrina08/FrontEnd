// import React from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
// //import "./Navbar.css";
// function Navbar({ userRole }) {
//   const handleLogout = () => {
//     window.location.href = "/login";
//     window.location.reload();
//   };
//   return (
//     <div>
//       <body>
//         <div className="navbar-wrapper">
//           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//               {/* <Link className="navbar-brand" to="/">
//               My App
//             </Link> */}
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                     <Link className="nav-link active" to="/">
//                       Home
//                     </Link>
//                   </li>
//                   {userRole === "MANAGER" && (
//                     <>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/DailyLog">
//                           Log
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/Attendance">
//                           Attendance
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/WeeklyReport">
//                           Weekly Report
//                         </Link>
//                       </li>
//                     </>
//                   )}
//                   {userRole === "EMPLOYEE" && (
//                     <>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/WeeklyEntry">
//                           Weekly Entry
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/EntryStatus">
//                           Entry Status
//                         </Link>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               </div>
//               {userRole ? (
//                 <a
//                   className="btn btn-danger me-2"
//                   href="/login"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </a>
//               ) : (
//                 <Link className="btn btn-primary" to="/login">
//                   Login
//                 </Link>
//               )}
//             </div>
//           </nav>
//         </div>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js"></script>
//       </body>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
//import "./Navbar.css";

function Navbar({ userRole }) {
  const handleLogout = () => {
    window.location.href = "/login";
    window.location.reload();
  };

  return (
    <div className="navbar-wrapper" style={{ paddingBottom: "0.5cm" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* <Link className="navbar-brand" to="/">
            My App
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {userRole === "MANAGER" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/DailyLog">
                      Log
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Attendance">
                      Attendance
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/WeeklyReport">
                      Weekly Report
                    </Link>
                  </li>
                </>
              )}
              {userRole === "EMPLOYEE" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/WeeklyEntry">
                      Weekly Entry
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/EntryStatus">
                      Entry Status
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {userRole ? (
            <a
              className="btn btn-danger me-2"
              href="/login"
              onClick={handleLogout}
            >
              Logout
            </a>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Navbar;
