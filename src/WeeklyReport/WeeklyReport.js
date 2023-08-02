import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Icon } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';
import WarningIcon from '@mui/icons-material/Warning';
import './WeeklyReport.css';

const WeeklyReport = () => {
  const [timesheets, setTimesheets] = useState([]);

  useEffect(() => {
    fetchTimesheets();
  }, []);

  const fetchTimesheets = async () => {
    try {
      const response = await axios.get('http://localhost:3034/timesheets');
      setTimesheets(response.data);
    } catch (error) {
      console.error('Error fetching timesheets:', error);
    }
  };

  const handleApprove = async (timesheetId) => {
    try {
      await axios.put(`http://localhost:3034/timesheets/${timesheetId}/approve`);
      fetchTimesheets(); // Refresh the timesheets after approval
    } catch (error) {
      console.error('Error approving timesheet:', error);
    }
  };

  const handleReject = async (timesheetId) => {
    try {
      await axios.put(`http://localhost:3034/timesheets/${timesheetId}/reject`);
      fetchTimesheets(); // Refresh the timesheets after rejection
    } catch (error) {
      console.error('Error rejecting timesheet:', error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <CheckCircleIcon style={{ color: 'green' }} />;
      case 'Rejected':
        return <ClearIcon style={{ color: 'red' }} />;
      default:
        return <WarningIcon style={{ color: 'yellow' }} />;
    }
  };

  return (
    <div className="report-container">
      <h2>Weekly Report</h2>
      <Table>
        <TableHead className="head">
          <TableRow>
            <TableCell className="heading-cell">Employee Name</TableCell>
            <TableCell className="heading-cell">Employee ID</TableCell>
            <TableCell className="heading-cell">From Date</TableCell>
            <TableCell className="heading-cell">To Date</TableCell>
            <TableCell className="heading-cell">Project</TableCell>
            <TableCell className="heading-cell">Hours Worked</TableCell>
            <TableCell className="heading-cell">Description</TableCell>
            <TableCell className="heading-cell">Status</TableCell>
            <TableCell className="heading-cell">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {timesheets.map((timesheet) => (
            <TableRow key={timesheet.id}>
              <TableCell>{timesheet.employeeName}</TableCell>
              <TableCell>{timesheet.employeeId}</TableCell>
              <TableCell>{timesheet.fromDate}</TableCell>
              <TableCell>{timesheet.toDate}</TableCell>
              <TableCell>{timesheet.project}</TableCell>
              <TableCell>{timesheet.hoursWorked}</TableCell>
              <TableCell>{timesheet.description}</TableCell>
              <TableCell>{getStatusIcon(timesheet.status)}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'green', color: 'white' }}
                  onClick={() => handleApprove(timesheet.id)}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'red', color: 'white' }}
                  onClick={() => handleReject(timesheet.id)}
                >
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WeeklyReport;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import ClearIcon from "@mui/icons-material/Clear";
// import WarningIcon from "@mui/icons-material/Warning";
// import "./WeeklyReport.css";

// const WeeklyReport = () => {
//   const [timesheets, setTimesheets] = useState([]);

//   useEffect(() => {
//     fetchTimesheets();
//   }, []);

//   const fetchTimesheets = async () => {
//     try {
//       const response = await axios.get("http://localhost:3034/timesheets");
//       setTimesheets(response.data);
//     } catch (error) {
//       console.error("Error fetching timesheets:", error);
//     }
//   };

//   const handleApprove = async (timesheetId) => {
//     try {
//       await axios.put(`http://localhost:3034/timesheets/${timesheetId}/approve`);
//       fetchTimesheets(); // Refresh the timesheets after approval
//     } catch (error) {
//       console.error("Error approving timesheet:", error);
//     }
//   };

//   const handleReject = async (timesheetId) => {
//     try {
//       await axios.put(`http://localhost:3034/timesheets/${timesheetId}/reject`);
//       fetchTimesheets(); // Refresh the timesheets after rejection
//     } catch (error) {
//       console.error("Error rejecting timesheet:", error);
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Approved":
//         return <CheckCircleIcon style={{ color: "green" }} />;
//       case "Rejected":
//         return <ClearIcon style={{ color: "red" }} />;
//       default:
//         return <WarningIcon style={{ color: "yellow" }} />;
//     }
//   };

//   return (
//     <div className="report-container">
//       <h2>Weekly Report</h2>
//       <Table>
//         <TableHead className="head">
//           <TableRow>
//             <TableCell className="heading-cell">Employee Name</TableCell>
//             <TableCell className="heading-cell">Employee ID</TableCell>
//             <TableCell className="heading-cell">From Date</TableCell>
//             <TableCell className="heading-cell">To Date</TableCell>
//             <TableCell className="heading-cell">Project</TableCell>
//             <TableCell className="heading-cell">Hours Worked</TableCell>
//             <TableCell className="heading-cell">Description</TableCell>
//             <TableCell className="heading-cell">Status</TableCell>
//             <TableCell className="heading-cell">Action</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {timesheets.map((timesheet) => (
//             <TableRow key={timesheet.id}>
//               <TableCell>{timesheet.employeeName}</TableCell>
//               <TableCell>{timesheet.employeeId}</TableCell>
//               <TableCell>{timesheet.fromDate}</TableCell>
//               <TableCell>{timesheet.toDate}</TableCell>
//               <TableCell>{timesheet.project}</TableCell>
//               <TableCell>{timesheet.hoursWorked}</TableCell>
//               <TableCell>{timesheet.description}</TableCell>
//               <TableCell>
//                 <span className="status-icon">{getStatusIcon(timesheet.status)}</span>
//                 {timesheet.status}
//               </TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   style={{ backgroundColor: "green", color: "white" }}
//                   onClick={() => handleApprove(timesheet.id)}
//                 >
//                   Approve
//                 </Button>
//                 <Button
//                   variant="contained"
//                   style={{ backgroundColor: "red", color: "white" }}
//                   onClick={() => handleReject(timesheet.id)}
//                 >
//                   Reject
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default WeeklyReport;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
// import "./WeeklyReport.css"
// const WeeklyReport = () => {
//   const [timesheets, setTimesheets] = useState([]);

//   useEffect(() => {
//     fetchTimesheets();
//   }, []);

//   const fetchTimesheets = async () => {
//     try {
//       const response = await axios.get('http://localhost:3034/timesheets');
//       setTimesheets(response.data);
//     } catch (error) {
//       console.error('Error fetching timesheets:', error);
//     }
//   };

//   const handleApprove = async (timesheetId) => {
//     try {
//       await axios.put(`http://localhost:3034/timesheets/${timesheetId}/approve`);
//       fetchTimesheets(); // Refresh the timesheets after approval
//     } catch (error) {
//       console.error('Error approving timesheet:', error);
//     }
//   };

//   const handleReject = async (timesheetId) => {
//     try {
//       await axios.put(`http://localhost:3034/timesheets/${timesheetId}/reject`);
//       fetchTimesheets(); // Refresh the timesheets after rejection
//     } catch (error) {
//       console.error('Error rejecting timesheet:', error);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Approved':
//         return 'green';
//       case 'Rejected':
//         return 'red';
//       default:
//         return 'yellow';
//     }
//   };

//   return (
//     <div className="report-container">
//       <h2>Weekly Report</h2>
//       <Table>
//         <TableHead className="head">
//           <TableRow>
//             <TableCell className="heading-cell">Employee Name</TableCell>
//             <TableCell className="heading-cell">Employee ID</TableCell>
//             <TableCell className="heading-cell">From Date</TableCell>
//             <TableCell className="heading-cell">To Date</TableCell>
//             <TableCell className="heading-cell">Project</TableCell>
//             <TableCell className="heading-cell">Hours Worked</TableCell>
//             <TableCell className="heading-cell">Description</TableCell>
//             <TableCell className="heading-cell">Status</TableCell>
//             <TableCell className="heading-cell">Action</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {timesheets.map((timesheet) => (
//             <TableRow key={timesheet.id}>
//               <TableCell>{timesheet.employeeName}</TableCell>
//               <TableCell>{timesheet.employeeId}</TableCell>
//               <TableCell>{timesheet.fromDate}</TableCell>
//               <TableCell>{timesheet.toDate}</TableCell>
//               <TableCell>{timesheet.project}</TableCell>
//               <TableCell>{timesheet.hoursWorked}</TableCell>
//               <TableCell>{timesheet.description}</TableCell>
//               <TableCell>
//                 <span style={{ backgroundColor: getStatusColor(timesheet.status), color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
//                   {timesheet.status}
//                 </span>
//               </TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   style={{ backgroundColor: 'green', color: 'white' }}
//                   onClick={() => handleApprove(timesheet.id)}
//                 >
//                   Approve
//                 </Button>
//                 <Button
//                   variant="contained"
//                   style={{ backgroundColor: 'red', color: 'white' }}
//                   onClick={() => handleReject(timesheet.id)}
//                 >
//                   Reject
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
      
//     </div>
//   );
// };

// export default WeeklyReport;
