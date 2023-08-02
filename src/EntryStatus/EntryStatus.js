// import React from 'react';

// import WeeklyReport from "../WeeklyReport/WeeklyReport";

// const EntryStatus = ({ username }) => {
//   return (
//     <div>
//       <h1>Entry Status Page</h1>
//       <WeeklyReport username={username} />
//     </div>
//   );
// };

// export default EntryStatus;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

// const EntryStatus = () => {
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

//   return (
//     <div className="report-container">
//       <h2>Weekly Report</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Employee Name</TableCell>
//             <TableCell>Employee ID</TableCell>
//             <TableCell>From Date</TableCell>
//             <TableCell>To Date</TableCell>
//             <TableCell>Project</TableCell>
//             <TableCell>Hours Worked</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Status</TableCell>

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
//               <TableCell>{timesheet.status}</TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default EntryStatus;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

// const EntryStatus = ({ username }) => {
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

//   // Filter timesheets to show only the row of the logged-in user
//   const filteredTimesheets = timesheets.filter((timesheet) => timesheet.employeeName === username);

//   return (
//     <div className="report-container">
//       <h2>Weekly Report</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Employee Name</TableCell>
//             <TableCell>Employee ID</TableCell>
//             <TableCell>From Date</TableCell>
//             <TableCell>To Date</TableCell>
//             <TableCell>Project</TableCell>
//             <TableCell>Hours Worked</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredTimesheets.map((timesheet) => (
//             <TableRow key={timesheet.id}>
//               <TableCell>{timesheet.employeeName}</TableCell>
//               <TableCell>{timesheet.employeeId}</TableCell>
//               <TableCell>{timesheet.fromDate}</TableCell>
//               <TableCell>{timesheet.toDate}</TableCell>
//               <TableCell>{timesheet.project}</TableCell>
//               <TableCell>{timesheet.hoursWorked}</TableCell>
//               <TableCell>{timesheet.description}</TableCell>
//               <TableCell>{timesheet.status}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default EntryStatus;

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

// const EntryStatus = ({ Username }) => {
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

//   return (
//     <div className="report-container">
//       <h2>Weekly Report</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Employee Name</TableCell>
//             <TableCell>Employee ID</TableCell>
//             <TableCell>From Date</TableCell>
//             <TableCell>To Date</TableCell>
//             <TableCell>Project</TableCell>
//             <TableCell>Hours Worked</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {timesheets
//             .filter(
//               (timesheet) =>
//                 timesheet.employeeName.toLowerCase() === Username.toLowerCase()
//             )
//             .map((timesheet) => (
//               <TableRow key={timesheet.id}>
//                 <TableCell>{timesheet.employeeName}</TableCell>
//                 <TableCell>{timesheet.employeeId}</TableCell>
//                 <TableCell>{timesheet.fromDate}</TableCell>
//                 <TableCell>{timesheet.toDate}</TableCell>
//                 <TableCell>{timesheet.project}</TableCell>
//                 <TableCell>{timesheet.hoursWorked}</TableCell>
//                 <TableCell>{timesheet.description}</TableCell>
//                 <TableCell>{timesheet.status}</TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default EntryStatus;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";

// const EntryStatus = ({ Username }) => {
//   const [timesheets, setTimesheets] = useState([]);
//   const [selectedTimesheet, setSelectedTimesheet] = useState(null);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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

//   const handleEdit = (timesheet) => {
//     setSelectedTimesheet(timesheet);
//     setIsEditDialogOpen(true);
//   };

//   const handleCloseEditDialog = () => {
//     setIsEditDialogOpen(false);
//   };

//   const handleSubmitEditDialog = () => {
//     // Update the timesheets state with the edited data
//     setTimesheets((prevTimesheets) =>
//       prevTimesheets.map((timesheet) =>
//         timesheet.id === selectedTimesheet.id ? selectedTimesheet : timesheet
//       )
//     );
//     setIsEditDialogOpen(false);
//   };

//   const handleFieldChange = (fieldName, value) => {
//     setSelectedTimesheet((prevTimesheet) => ({
//       ...prevTimesheet,
//       [fieldName]: value,
//     }));
//   };

//   return (
//     <div className="report-container">
//       <h2>Weekly Report</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Employee Name</TableCell>
//             <TableCell>Employee ID</TableCell>
//             <TableCell>From Date</TableCell>
//             <TableCell>To Date</TableCell>
//             <TableCell>Project</TableCell>
//             <TableCell>Hours Worked</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Action</TableCell> {/* Add an extra table cell for the edit button */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {timesheets
//             .filter(
//               (timesheet) =>
//                 timesheet.employeeName.toLowerCase() === Username.toLowerCase()
//             )
//             .map((timesheet) => (
//               <TableRow key={timesheet.id}>
//                 <TableCell>{timesheet.employeeName}</TableCell>
//                 <TableCell>{timesheet.employeeId}</TableCell>
//                 <TableCell>{timesheet.fromDate}</TableCell>
//                 <TableCell>{timesheet.toDate}</TableCell>
//                 <TableCell>{timesheet.project}</TableCell>
//                 <TableCell>{timesheet.hoursWorked}</TableCell>
//                 <TableCell>{timesheet.description}</TableCell>
//                 <TableCell>{timesheet.status}</TableCell>
//                 <TableCell>
//                   <Button
//                     onClick={() => handleEdit(timesheet)}
//                     variant="outlined"
//                     color="primary"
//                   >
//                     Edit
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//       <Dialog open={isEditDialogOpen} onClose={handleCloseEditDialog}>
//         <DialogTitle>Edit Timesheet</DialogTitle>
//         <DialogContent>
//           {selectedTimesheet && (
//             <>
//               <TextField
//                 label="Employee Name"
//                 value={selectedTimesheet.employeeName}
//                 onChange={(e) => handleFieldChange("employeeName", e.target.value)}
//                 fullWidth
//               />
//               <TextField
//                 label="Employee ID"
//                 value={selectedTimesheet.employeeId}
//                 onChange={(e) => handleFieldChange("employeeId", e.target.value)}
//                 fullWidth
//               />
//               <TextField
//                 label="From Date"
//                 type="date"
//                 value={selectedTimesheet.fromDate}
//                 onChange={(e) => handleFieldChange("fromDate", e.target.value)}
//                 fullWidth
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//               <TextField
//                 label="To Date"
//                 type="date"
//                 value={selectedTimesheet.toDate}
//                 onChange={(e) => handleFieldChange("toDate", e.target.value)}
//                 fullWidth
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//               <TextField
//                 label="Project"
//                 value={selectedTimesheet.project}
//                 onChange={(e) => handleFieldChange("project", e.target.value)}
//                 fullWidth
//               />
//               <TextField
//                 label="Hours Worked"
//                 type="number"
//                 value={selectedTimesheet.hoursWorked}
//                 onChange={(e) => handleFieldChange("hoursWorked", e.target.value)}
//                 fullWidth
//               />
//               <TextField
//                 label="Description"
//                 value={selectedTimesheet.description}
//                 onChange={(e) => handleFieldChange("description", e.target.value)}
//                 fullWidth
//                 multiline
//                 rows={4}
//               />
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseEditDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmitEditDialog} color="primary" variant="contained">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default EntryStatus;


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

// const EntryStatus = ({ Username }) => {
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

//   const handleEdit = (timesheet) => {
//     // Handle the edit functionality, e.g., open a dialog for editing the timesheet
//     console.log("Editing timesheet:", timesheet);
//   };

//   const handleDelete = async (timesheetId) => {
//     try {
//       await axios.delete(`http://localhost:3034/timesheets/${timesheetId}`);
//       // After successful deletion, fetch timesheets again to update the table
//       fetchTimesheets();
//     } catch (error) {
//       console.error("Error deleting timesheet:", error);
//     }
//   };

//   return (
//     <div className="report-container">
//       <h2>Weekly Timesheet Status</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Employee Name</TableCell>
//             <TableCell>Employee ID</TableCell>
//             <TableCell>From Date</TableCell>
//             <TableCell>To Date</TableCell>
//             <TableCell>Project</TableCell>
//             <TableCell>Hours Worked</TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {timesheets
//             .filter(
//               (timesheet) =>
//                 timesheet.employeeName.toLowerCase() === Username.toLowerCase()
//             )
//             .map((timesheet) => (
//               <TableRow key={timesheet.id}>
//                 <TableCell>{timesheet.employeeName}</TableCell>
//                 <TableCell>{timesheet.employeeId}</TableCell>
//                 <TableCell>{timesheet.fromDate}</TableCell>
//                 <TableCell>{timesheet.toDate}</TableCell>
//                 <TableCell>{timesheet.project}</TableCell>
//                 <TableCell>{timesheet.hoursWorked}</TableCell>
//                 <TableCell>{timesheet.description}</TableCell>
//                 <TableCell>{timesheet.status}</TableCell>
//                 <TableCell>
//                   <Button
//                     onClick={() => handleEdit(timesheet)}
//                     variant="outlined"
//                     color="primary"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     onClick={() => handleDelete(timesheet.id)}
//                     variant="outlined"
//                     color="secondary"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default EntryStatus;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";
// import "./EntryStatus.css"
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ClearIcon from '@mui/icons-material/Clear';
// import WarningIcon from '@mui/icons-material/Warning';


// const EntryStatus = ({ Username }) => {
//   const [timesheets, setTimesheets] = useState([]);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [selectedTimesheet, setSelectedTimesheet] = useState(null);
//   const [editedTimesheet, setEditedTimesheet] = useState({
//     // State to hold the edited timesheet data
//     employeeName: "",
//     employeeId: "",
//     fromDate: "",
//     toDate: "",
//     project: "",
//     hoursWorked: "",
//     description: "",
//   });

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

//   const handleEdit = (timesheet) => {
//     setSelectedTimesheet(timesheet);
//     setEditedTimesheet(timesheet); // Initialize the editedTimesheet state with the selected timesheet data
//     setIsEditDialogOpen(true);
//   };

//   const handleEditDialogClose = () => {
//     setIsEditDialogOpen(false);
//     setSelectedTimesheet(null);
//     setEditedTimesheet({
//       employeeName: "",
//       employeeId: "",
//       fromDate: "",
//       toDate: "",
//       project: "",
//       hoursWorked: "",
//       description: "",
//     }); // Reset the editedTimesheet state when the dialog is closed
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedTimesheet((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveChanges = async () => {
//     try {
//       await axios.put(
//         `http://localhost:3034/timesheets/${selectedTimesheet.id}`,
//         editedTimesheet
//       );
//       // After successful update, fetch timesheets again to update the table
//       fetchTimesheets();
//       setIsEditDialogOpen(false);
//     } catch (error) {
//       console.error("Error updating timesheet:", error);
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'Approved':
//         return <CheckCircleIcon style={{ color: 'green' }} />;
//       case 'Rejected':
//         return <ClearIcon style={{ color: 'red' }} />;
//       default:
//         return <WarningIcon style={{ color: 'yellow' }} />;
//     }
//   };

//   const handleDelete = async (timesheetId) => {
//     try {
//       await axios.delete(`http://localhost:3034/timesheets/${timesheetId}`);
//       // After successful deletion, fetch timesheets again to update the table
//       fetchTimesheets();
//     } catch (error) {
//       console.error("Error deleting timesheet:", error);
//     }
//   };
  

//   return (
//     <div className="report-container">
//       <h2>Weekly Timesheet Status</h2>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell className="heading-cell">Employee Name</TableCell>
//             <TableCell className="heading-cell">Employee ID</TableCell>
//             <TableCell className="heading-cell">From Date</TableCell>
//             <TableCell className="heading-cell">To Date</TableCell>
//             <TableCell className="heading-cell">Project</TableCell>
//             <TableCell className="heading-cell">Hours Worked</TableCell>
//             <TableCell className="heading-cell">Description</TableCell>
//             <TableCell className="heading-cell">Actions</TableCell>
//             <TableCell className="heading-cell">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {timesheets
//             .filter(
//               (timesheet) =>
//                 timesheet.employeeName.toLowerCase() === Username.toLowerCase()
//             )
//             .map((timesheet) => (
//               <TableRow key={timesheet.id}>
//                 <TableCell>{timesheet.employeeName}</TableCell>
//                 <TableCell>{timesheet.employeeId}</TableCell>
//                 <TableCell>{timesheet.fromDate}</TableCell>
//                 <TableCell>{timesheet.toDate}</TableCell>
//                 <TableCell>{timesheet.project}</TableCell>
//                 <TableCell>{timesheet.hoursWorked}</TableCell>
//                 <TableCell>{timesheet.description}</TableCell>
//                 <TableCell>{getStatusIcon(timesheet.status)}</TableCell>
//                 <TableCell>
//                   <Button
//                     onClick={() => handleEdit(timesheet)}
//                     variant="outlined"
//                     color="primary"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     onClick={() => handleDelete(timesheet.id)}
//                     variant="outlined"
//                     color="secondary"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>

//       {/* Edit Timesheet Dialog */}
//       <Dialog
//         open={isEditDialogOpen}
//         onClose={handleEditDialogClose}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle>Edit Timesheet</DialogTitle>
//         <DialogContent>
//           {/* Render the form fields for editing the timesheet */}
//           {selectedTimesheet && (
//             <>
//               <TextField
//                 label="Employee Name"
//                 name="employeeName"
//                 value={editedTimesheet.employeeName}
//                 onChange={handleInputChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Employee ID"
//                 name="employeeId"
//                 type="number"
//                 value={editedTimesheet.employeeId}
//                 onChange={handleInputChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="From Date"
//                 name="fromDate"
//                 type="date"
//                 value={editedTimesheet.fromDate}
//                 onChange={handleInputChange}
//                 fullWidth
//                 required
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//               <TextField
//                 label="To Date"
//                 name="toDate"
//                 type="date"
//                 value={editedTimesheet.toDate}
//                 onChange={handleInputChange}
//                 fullWidth
//                 required
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//               <TextField
//                 label="Project"
//                 name="project"
//                 value={editedTimesheet.project}
//                 onChange={handleInputChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Hours Worked"
//                 name="hoursWorked"
//                 type="number"
//                 step="0.1"
//                 value={editedTimesheet.hoursWorked}
//                 onChange={handleInputChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Description"
//                 name="description"
//                 value={editedTimesheet.description}
//                 onChange={handleInputChange}
//                 multiline
//                 rows={4}
//                 fullWidth
//                 required
//               />
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleEditDialogClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveChanges} color="primary">
//             Save Changes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default EntryStatus;


import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import "./EntryStatus.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import WarningIcon from "@mui/icons-material/Warning";

const EntryStatus = ({ Username }) => {
  const [timesheets, setTimesheets] = useState([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedTimesheet, setSelectedTimesheet] = useState(null);
  const [editedTimesheet, setEditedTimesheet] = useState({
    // State to hold the edited timesheet data
    employeeName: "",
    employeeId: "",
    fromDate: "",
    toDate: "",
    project: "",
    hoursWorked: "",
    description: "",
  });

  useEffect(() => {
    fetchTimesheets();
  }, []);

  const fetchTimesheets = async () => {
    try {
      const response = await axios.get("http://localhost:3034/timesheets");
      setTimesheets(response.data);
    } catch (error) {
      console.error("Error fetching timesheets:", error);
    }
  };

  const handleEdit = (timesheet) => {
    if (timesheet.status === "Pending") {
      setSelectedTimesheet(timesheet);
      setEditedTimesheet(timesheet);
      setIsEditDialogOpen(true);
    } else {
      alert("Cannot edit after manager's approval.");
    }
  };

  const handleEditDialogClose = () => {
    setIsEditDialogOpen(false);
    setSelectedTimesheet(null);
    setEditedTimesheet({
      employeeName: "",
      employeeId: "",
      fromDate: "",
      toDate: "",
      project: "",
      hoursWorked: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTimesheet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:3034/timesheets/${selectedTimesheet.id}`,
        editedTimesheet
      );
      fetchTimesheets();
      setIsEditDialogOpen(false);
    } catch (error) {
      console.error("Error updating timesheet:", error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <CheckCircleIcon style={{ color: "green" }} />;
      case "Rejected":
        return <ClearIcon style={{ color: "red" }} />;
      default:
        return <WarningIcon style={{ color: "yellow" }} />;
    }
  };

  const handleDelete = async (timesheetId, status) => {
    if (status === "Pending") {
      try {
        await axios.delete(`http://localhost:3034/timesheets/${timesheetId}`);
        fetchTimesheets();
      } catch (error) {
        console.error("Error deleting timesheet:", error);
      }
    } else {
      alert("Cannot delete after manager's approval.");
    }
  };

  return (
    <div className="report-container">
      <h2>Weekly Timesheet Status</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="heading-cell">Employee Name</TableCell>
            <TableCell className="heading-cell">Employee ID</TableCell>
            <TableCell className="heading-cell">From Date</TableCell>
            <TableCell className="heading-cell">To Date</TableCell>
            <TableCell className="heading-cell">Project</TableCell>
            <TableCell className="heading-cell">Hours Worked</TableCell>
            <TableCell className="heading-cell">Description</TableCell>
            <TableCell className="heading-cell">Actions</TableCell>
            <TableCell className="heading-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timesheets
            .filter(
              (timesheet) =>
                timesheet.employeeName.toLowerCase() ===
                Username.toLowerCase()
            )
            .map((timesheet) => (
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
                    onClick={() => handleEdit(timesheet)}
                    variant="outlined"
                    color="primary"
                    disabled={timesheet.status !== "Pending"}
                  >
                    Edit
                  </Button>
                  {/* <Button
                    onClick={() => handleDelete(timesheet.id, timesheet.status)}
                    variant="outlined"
                    color="secondary"
                    disabled={timesheet.status !== "Pending"}
                  >
                    Delete
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {/* Edit Timesheet Dialog */}
      <Dialog
        open={isEditDialogOpen}
        onClose={handleEditDialogClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Timesheet</DialogTitle>
        <DialogContent>
          {selectedTimesheet && (
            <>
              <TextField
                label="Employee Name"
                name="employeeName"
                value={editedTimesheet.employeeName}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Employee ID"
                name="employeeId"
                type="number"
                value={editedTimesheet.employeeId}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="From Date"
                name="fromDate"
                type="date"
                value={editedTimesheet.fromDate}
                onChange={handleInputChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="To Date"
                name="toDate"
                type="date"
                value={editedTimesheet.toDate}
                onChange={handleInputChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Project"
                name="project"
                value={editedTimesheet.project}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Hours Worked"
                name="hoursWorked"
                type="number"
                step="0.1"
                value={editedTimesheet.hoursWorked}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Description"
                name="description"
                value={editedTimesheet.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                fullWidth
                required
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EntryStatus;
