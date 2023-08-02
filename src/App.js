import Navbar from "./Navbar/Navbar";

import Home from "./Home";
import DailyLog from "./DailyLog/DailyLog";
import { Route, Routes } from "react-router-dom";
import Attendance1 from "./Attendance1";
import Attendance from "./Attendance/Attendance";
import HomePage from "./HomePage/HomePage";
import Login from "./Login/Login";
import { useState } from "react";
import WeeklyReport from "./WeeklyReport/WeeklyReport";
import WeeklyEntry from "./WeeklyEntry/WeeklyEntry";
import AccessDenied from "./AccessDenied";
import TimesheetForm from "./Timesheet/TimesheetForm";
import EntryStatus from "./EntryStatus/EntryStatus";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);
  const [Username, setUsername] = useState(null);
  console.log(Username);

  return (
    <>
      <Navbar userRole={userRole} />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/WeeklyEntry"
            element={<TimesheetForm Username={Username} />}
          />
          <Route path="/Attendance1" element={<Attendance1 />} />
          <Route
            path="/DailyLog"
            element={userRole === "MANAGER" ? <Attendance /> : <AccessDenied />}
          />
          <Route
            path="/Attendance"
            element={userRole === "MANAGER" ? <DailyLog /> : <AccessDenied />}
          />
          <Route path="/WeeklyEntry" element={<WeeklyEntry />} />
          <Route
            path="/EntryStatus"
            element={
              userRole === "EMPLOYEE" ? (
                <EntryStatus Username={Username} />
              ) : (
                <AccessDenied />
              )
            }
          />
          <Route
            path="/WeeklyReport"
            element={
              userRole === "MANAGER" ? <WeeklyReport /> : <AccessDenied />
            }
          />

          <Route
            path="/Login"
            element={
              <Login
                onLogin={(role, username) => {
                  setUserRole(role);
                  setUsername(username);
                }}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
