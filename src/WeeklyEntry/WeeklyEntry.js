// import React from "react";
// import WeeklyReport from "../WeeklyReport/WeeklyReport";

// const WeeklyEntry = () => {
//   return (
//     <div>
//       <h1>WeeklyEntry</h1>
//     </div>
//   );
// };

// export default WeeklyEntry;

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import "./WeeklyEntry.css";

const WeeklyEntry = ({ username }) => {
  const [timesheets, setTimesheets] = useState([]);
  const [filteredTimesheets, setFilteredTimesheets] = useState([]);

  useEffect(() => {
    fetchTimesheets();
  }, []);

  useEffect(() => {
    filterTimesheets();
  }, [username]);

  const fetchTimesheets = async () => {
    try {
      const response = await axios.get("http://localhost:3034/timesheets");
      setTimesheets(response.data);
    } catch (error) {
      console.error("Error fetching timesheets:", error);
    }
  };

  const filterTimesheets = () => {
    const filtered = timesheets.filter(
      (timesheet) => timesheet.employeeName === username
    );
    setFilteredTimesheets(filtered);
  };

  return (
    <div className="report-container">
      <h2>Weekly Report</h2>
      <Table>
        <TableHead className="TableHead">
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell>Employee ID</TableCell>
            <TableCell>From Date</TableCell>
            <TableCell>To Date</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Hours Worked</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            {/* <TableCell>Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTimesheets.map((timesheet) => (
            <TableRow key={timesheet.id}>
              <TableCell>{timesheet.employeeName}</TableCell>
              <TableCell>{timesheet.employeeId}</TableCell>
              <TableCell>{timesheet.fromDate}</TableCell>
              <TableCell>{timesheet.toDate}</TableCell>
              <TableCell>{timesheet.project}</TableCell>
              <TableCell>{timesheet.hoursWorked}</TableCell>
              <TableCell>{timesheet.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WeeklyEntry;
