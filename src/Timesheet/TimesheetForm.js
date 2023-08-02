// import React, { useState} from 'react';
// import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import axios from 'axios';
// import './TimesheetForm.css';

// const TimesheetForm = () => {
//   const [timesheetData, setTimesheetData] = useState({
//     employeeName: '',
//     employeeId: '',
//     fromDate: '',
//     toDate: '',
//     project: '',
//     hoursWorked: '',
//     description: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTimesheetData({ ...timesheetData, [name]: value });
//   };

//   const handleEmployeeIdChange = (e) => {
//     // Prevent negative values for Employee ID
//     const value = e.target.value;
//     const employeeId = value >= 0 ? value : 0;
//     setTimesheetData({ ...timesheetData, employeeId });
//   };

//   const handleHoursWorkedChange = (e) => {
//     // Prevent negative values for Hours Worked
//     const value = e.target.value;
//     const hoursWorked = value >= 0 ? value : 0;
//     setTimesheetData({ ...timesheetData, hoursWorked });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       setIsConfirmationOpen(true);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleConfirmSubmit = async () => {
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3034/timesheets', timesheetData);
//       console.log('Timesheet created:', response.data);
//       // Reset the form after successful submission
//       setTimesheetData({
//         employeeName: '',
//         employeeId: '',
//         fromDate: '',
//         toDate: '',
//         project: '',
//         hoursWorked: '',
//         description: '',
//       });
//       setIsFormSubmitted(true); // Set isFormSubmitted to true
//       setIsConfirmationOpen(false);
//     } catch (error) {
//       console.error('Error creating timesheet:', error);
//     }
//   };

//   const handleCloseConfirmation = () => {
//     setIsConfirmationOpen(false);
//   };

//   const validateForm = () => {
//     let errors = {};

//     if (!timesheetData.employeeName) {
//       errors.employeeName = 'Employee Name is required';
//     }

//     if (!timesheetData.employeeId) {
//       errors.employeeId = 'Employee ID is required';
//     } else if (isNaN(timesheetData.employeeId)) {
//       errors.employeeId = 'Employee ID must be a number';
//     }

//     if (!timesheetData.fromDate) {
//       errors.fromDate = 'From Date is required';
//     }

//     if (!timesheetData.toDate) {
//       errors.toDate = 'To Date is required';
//     }

//     if (!timesheetData.project) {
//       errors.project = 'Project is required';
//     }

//     if (!timesheetData.hoursWorked) {
//       errors.hoursWorked = 'Hours Worked is required';
//     } else if (isNaN(timesheetData.hoursWorked)) {
//       errors.hoursWorked = 'Hours Worked must be a number';
//     }

//     // Validate the description field
//     if (!timesheetData.description) {
//       errors.description = 'Description is required';
//     }

//     return errors;
//   };

//   return (
//     <div className="form-container">
//       <h2>Create Timesheet</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Employee Name"
//           name="employeeName"
//           value={timesheetData.employeeName}
//           onChange={handleChange}
//           error={!!errors.employeeName}
//           helperText={errors.employeeName}
//           fullWidth
//           required
//         />
//         <TextField
//           label="Employee ID"
//           name="employeeId"
//           value={timesheetData.employeeId}
//           onChange={handleEmployeeIdChange}
//           error={!!errors.employeeId}
//           helperText={errors.employeeId}
//           type="number"
//           fullWidth
//           required
//         />
//         <TextField
//           label="From Date"
//           name="fromDate"
//           type="date"
//           value={timesheetData.fromDate}
//           onChange={handleChange}
//           error={!!errors.fromDate}
//           helperText={errors.fromDate}
//           fullWidth
//           required
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           label="To Date"
//           name="toDate"
//           type="date"
//           value={timesheetData.toDate}
//           onChange={handleChange}
//           error={!!errors.toDate}
//           helperText={errors.toDate}
//           fullWidth
//           required
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//                 <TextField
//           label="Project"
//           name="project"
//           value={timesheetData.project}
//           onChange={handleChange}
//           error={!!errors.project}
//           helperText={errors.project}
//           fullWidth
//           required
//         />
//         <TextField
//           label="Hours Worked"
//           name="hoursWorked"
//           type="number"
//           step="0.1"
//           min="0" // Set the minimum value to 0 (positive non-zero value)
//           value={timesheetData.hoursWorked}
//           onChange={handleHoursWorkedChange}
//           error={!!errors.hoursWorked}
//           helperText={errors.hoursWorked}
//           fullWidth
//           required
//         />
//         {/* Add the description text box */}
//         <TextField
//           label="Description"
//           name="description"
//           value={timesheetData.description}
//           onChange={handleChange}
//           multiline
//           rows={4}
//           variant="outlined"
//           error={!!errors.description}
//           helperText={errors.description}
//           fullWidth
//           required
//         />
//         <div className="form-actions">
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </div>
//       </form>
//       <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation}>
//         <DialogTitle>Confirm Submission</DialogTitle>
//         <DialogContent>
//           Are you sure you want to submit this timesheet?
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseConfirmation} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleConfirmSubmit} color="primary" variant="contained">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Dialog open={isFormSubmitted} onClose={() => setIsFormSubmitted(false)}>
//         <DialogTitle>Form Submitted</DialogTitle>
//         <DialogContent>
//           Your timesheet has been successfully submitted.
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setIsFormSubmitted(false)} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default TimesheetForm;

// import React, { useEffect, useState } from "react";
// import {
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import axios from "axios";
// import "./TimesheetForm.css";

// const TimesheetForm = ({ Username }) => {
//   const [timesheetData, setTimesheetData] = useState({
//     employeeName: Username,
//     employeeId: "",
//     fromDate: "",
//     toDate: "",
//     project: "",
//     hoursPerDay: new Array(7).fill(0),
//     description: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const daysOfWeek = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   useEffect(() => {
//     // Fetch the accessCardId based on the provided username
//     const fetchAccessCardId = async () => {
//       try {
//         const response = await axios.get("http://localhost:3034/employees");
//         const user = response.data.find(
//           (employee) => employee.name === Username
//         );
//         if (user) {
//           setTimesheetData((prevState) => ({
//             ...prevState,
//             employeeId: user.accessCardId.toString(),
//           }));
//         }
//       } catch (error) {
//         console.error("Error fetching accessCardId:", error);
//       }
//     };

//     fetchAccessCardId();
//   }, [Username]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTimesheetData({ ...timesheetData, [name]: value });
//   };

//   const handleEmployeeIdChange = (e) => {
//     // Prevent negative values for Employee ID
//     const value = e.target.value;
//     const employeeId = value >= 0 ? value : 0;
//     setTimesheetData({ ...timesheetData, employeeId });
//   };

//   const handleHoursWorkedChange = (e, index) => {
//     // Prevent negative values for Hours Worked
//     const value = e.target.value;
//     const hoursWorked = value >= 0 ? value : 0;
//     const updatedHoursPerDay = [...timesheetData.hoursPerDay];
//     updatedHoursPerDay[index] = parseFloat(hoursWorked);
//     setTimesheetData({ ...timesheetData, hoursPerDay: updatedHoursPerDay });
//   };

//   const handleFromDateChange = (e) => {
//     const fromDate = e.target.value;
//     const selectedDate = new Date(fromDate);
//     const selectedDayOfWeek = selectedDate.getDay();

//     if (selectedDayOfWeek !== 1) {
//       alert("Please select a Monday as the From Date.");
//       return;
//     }

//     const toDate = new Date(selectedDate);
//     toDate.setDate(selectedDate.getDate() + 6); // Add 6 days to get the next Sunday
//     const toDateISOString = toDate.toISOString().split("T")[0];

//     setTimesheetData({ ...timesheetData, fromDate, toDate: toDateISOString });
//   };

//   const getNearestMonday = (dateString) => {
//     const date = new Date(dateString);
//     const dayOfWeek = date.getDay();
//     const daysUntilMonday = dayOfWeek === 1 ? 0 : dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
//     const nearestMonday = new Date(date);
//     nearestMonday.setDate(date.getDate() + daysUntilMonday);
//     return nearestMonday.toISOString().split("T")[0];
//   };

//   const handleToDateChange = (e) => {
//     setTimesheetData({ ...timesheetData, toDate: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       setIsConfirmationOpen(true);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleConfirmSubmit = async () => {
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const totalHours = timesheetData.hoursPerDay.reduce(
//         (total, hours) => total + hours,
//         0
//       );
//       const timesheetDataWithTotalHours = {
//         ...timesheetData,
//         hoursWorked: totalHours,
//       };
//       const response = await axios.post(
//         "http://localhost:3034/timesheets",
//         timesheetDataWithTotalHours
//       );
//       console.log("Timesheet created:", response.data);
//       // Reset the form after successful submission
//       setTimesheetData({
//         employeeName: "",
//         employeeId: "",
//         fromDate: "",
//         toDate: "",
//         project: "",
//         hoursPerDay: new Array(7).fill(0),
//         description: "",
//       });
//       setIsFormSubmitted(true); // Set isFormSubmitted to true
//       setIsConfirmationOpen(false);
//     } catch (error) {
//       console.error("Error creating timesheet:", error);
//     }
//   };

//   const handleCloseConfirmation = () => {
//     setIsConfirmationOpen(false);
//   };

//   const validateForm = () => {
//     let errors = {};

//     if (!timesheetData.employeeName) {
//       errors.employeeName = "Employee Name is required";
//     }

//     if (!timesheetData.employeeId) {
//       errors.employeeId = "Employee ID is required";
//     } else if (isNaN(timesheetData.employeeId)) {
//       errors.employeeId = "Employee ID must be a number";
//     }

//     if (!timesheetData.fromDate) {
//       errors.fromDate = "From Date is required";
//     }

//     if (!timesheetData.toDate) {
//       errors.toDate = "To Date is required";
//     }

//     for (let i = 0; i < 7; i++) {
//       if (isNaN(timesheetData.hoursPerDay[i])) {
//         errors[`hoursPerDay[${i}]`] = "Hours Worked must be a number";
//       }
//     }

//     // Validate the description field
//     if (!timesheetData.description) {
//       errors.description = "Description is required";
//     }

//     return errors;
//   };

//   const getDayDate = (dayIndex) => {
//     if (!timesheetData.fromDate) return ""; // Return empty string if "From Date" is not set

//     const fromDate = new Date(timesheetData.fromDate);
//     const dayDate = new Date(fromDate);
//     dayDate.setDate(fromDate.getDate() + dayIndex);
//     return dayDate.toISOString().split("T")[0];
//   };

//   return (
//     <div className="form-container">
//       <h2>Weekly Timesheet Entry</h2>
//       <form onSubmit={handleSubmit} className="full-width-form">
//         <TextField
//           label="Employee Name"
//           name="employeeName"
//           value={timesheetData.employeeName}
//           onChange={handleChange}
//           error={!!errors.employeeName}
//           helperText={errors.employeeName}
//           fullWidth
//           required
//           disabled
//         />

//         <TextField
//           label="Employee ID"
//           name="employeeId"
//           value={timesheetData.employeeId}
//           onChange={handleEmployeeIdChange}
//           error={!!errors.employeeId}
//           helperText={errors.employeeId}
//           type="number"
//           fullWidth
//           required
//           disabled
//         />

//         <TextField
//           label="From Date"
//           name="fromDate"
//           type="date"
//           value={timesheetData.fromDate}
//           onChange={handleFromDateChange}
//           error={!!errors.fromDate}
//           helperText={errors.fromDate}
//           fullWidth
//           required
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />

//         <TextField
//           label="To Date"
//           name="toDate"
//           type="date"
//           value={timesheetData.toDate}
//           onChange={handleToDateChange}
//           error={!!errors.toDate}
//           helperText={errors.toDate}
//           fullWidth
//           required
//           InputLabelProps={{
//             shrink: true,
//           }}disabled // <-- Disable the "To Date" input field
//         />

//         <div className="horizontal-fields-container">
//           {daysOfWeek.map((day, index) => (
//             <div key={index} className="horizontal-field">
//               <TextField
//                 label={`${day} - Hours Worked (${getDayDate(index)})`}
//                 name={`hoursPerDay[${index}]`}
//                 type="number"
//                 step="0.1"
//                 min="0"
//                 value={timesheetData.hoursPerDay[index]}
//                 onChange={(e) => handleHoursWorkedChange(e, index)}
//                 error={!!errors[`hoursPerDay[${index}]`]}
//                 helperText={errors[`hoursPerDay[${index}]`]}
//                 fullWidth
//                 required
//               />
//             </div>
//           ))}
//         </div>

//         <TextField
//           label="Project"
//           name="project"
//           value={timesheetData.project}
//           onChange={handleChange}
//           error={!!errors.project}
//           helperText={errors.project}
//           fullWidth
//           required
//         />

//         <TextField
//           label="Description"
//           name="description"
//           value={timesheetData.description}
//           onChange={handleChange}
//           multiline
//           rows={4}
//           variant="outlined"
//           error={!!errors.description}
//           helperText={errors.description}
//           fullWidth
//           required
//         />

//         <div className="form-actions">
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </div>
//       </form>
//       <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation}>
//         <DialogTitle>Confirm Submission</DialogTitle>
//         <DialogContent>
//           Are you sure you want to submit this timesheet?
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseConfirmation} color="primary">
//             Cancel
//           </Button>
//           <Button
//             onClick={handleConfirmSubmit}
//             color="primary"
//             variant="contained"
//           >
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Dialog open={isFormSubmitted} onClose={() => setIsFormSubmitted(false)}>
//         <DialogTitle>Form Submitted</DialogTitle>
//         <DialogContent>
//           Your timesheet has been successfully submitted.
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setIsFormSubmitted(false)} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default TimesheetForm;


import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import "./TimesheetForm.css";

const TimesheetForm = ({ Username }) => {
  const [timesheetData, setTimesheetData] = useState({
    employeeName: Username,
    employeeId: "",
    fromDate: "",
    toDate: "",
    project: "",
    hoursPerDay: new Array(7).fill(0),
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [previousFromDates, setPreviousFromDates] = useState({}); // State to store the "From Date" for each user
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    // Fetch the accessCardId based on the provided username
    // and get the previous "From Date" for the user
    const fetchAccessCardId = async () => {
      try {
        const response = await axios.get("http://localhost:3034/employees");
        const user = response.data.find(
          (employee) => employee.name === Username
        );
        if (user) {
          setTimesheetData((prevState) => ({
            ...prevState,
            employeeId: user.accessCardId.toString(),
          }));

          // Get the previous "From Date" for the user
          const prevFromDate = previousFromDates[user.accessCardId];
          if (prevFromDate) {
            setTimesheetData((prevState) => ({
              ...prevState,
              fromDate: getNearestMonday(prevFromDate),
            }));
          }

          setPreviousFromDates((prevDates) => ({
            ...prevDates,
            [user.accessCardId]: timesheetData.fromDate, // <-- Update 'prevState' with 'timesheetData'
          }));
        }
      } catch (error) {
        console.error("Error fetching accessCardId:", error);
      }
    };

    fetchAccessCardId();
  }, [Username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimesheetData({ ...timesheetData, [name]: value });
  };

  const handleEmployeeIdChange = (e) => {
    // Prevent negative values for Employee ID
    const value = e.target.value;
    const employeeId = value >= 0 ? value : 0;
    setTimesheetData({ ...timesheetData, employeeId });
  };

  const handleHoursWorkedChange = (e, index) => {
    // Prevent negative values for Hours Worked
    const value = e.target.value;
    const hoursWorked = value >= 0 ? value : 0;
    const updatedHoursPerDay = [...timesheetData.hoursPerDay];
    updatedHoursPerDay[index] = parseFloat(hoursWorked);
    setTimesheetData({ ...timesheetData, hoursPerDay: updatedHoursPerDay });
  };

  const handleFromDateChange = (e) => {
    const fromDate = e.target.value;
    const selectedDate = new Date(fromDate);
    const selectedDayOfWeek = selectedDate.getDay();

    if (selectedDayOfWeek !== 1) {
      alert("Please select a Monday as the From Date.");
      return;
    }

    const toDate = new Date(selectedDate);
    toDate.setDate(selectedDate.getDate() + 6); // Add 6 days to get the next Sunday
    const toDateISOString = toDate.toISOString().split("T")[0];

    setTimesheetData({ ...timesheetData, fromDate, toDate: toDateISOString });
  };

  const getNearestMonday = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    const daysUntilMonday = dayOfWeek === 1 ? 0 : dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    const nearestMonday = new Date(date);
    nearestMonday.setDate(date.getDate() + daysUntilMonday);
    return nearestMonday.toISOString().split("T")[0];
  };

  const handleToDateChange = (e) => {
    setTimesheetData({ ...timesheetData, toDate: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsConfirmationOpen(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleConfirmSubmit = async () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const totalHours = timesheetData.hoursPerDay.reduce(
        (total, hours) => total + hours,
        0
      );
      const timesheetDataWithTotalHours = {
        ...timesheetData,
        hoursWorked: totalHours,
      };
      const response = await axios.post(
        "http://localhost:3034/timesheets",
        timesheetDataWithTotalHours
      );
      console.log("Timesheet created:", response.data);
      // Reset the form after successful submission
      setTimesheetData({
        employeeName: "",
        employeeId: "",
        fromDate: "",
        toDate: "",
        project: "",
        hoursPerDay: new Array(7).fill(0),
        description: "",
      });
      setIsFormSubmitted(true); // Set isFormSubmitted to true
      setIsConfirmationOpen(false);
    } catch (error) {
      console.error("Error creating timesheet:", error);
    }
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const validateForm = () => {
    let errors = {};

    if (!timesheetData.employeeName) {
      errors.employeeName = "Employee Name is required";
    }

    if (!timesheetData.employeeId) {
      errors.employeeId = "Employee ID is required";
    } else if (isNaN(timesheetData.employeeId)) {
      errors.employeeId = "Employee ID must be a number";
    }

    if (!timesheetData.fromDate) {
      errors.fromDate = "From Date is required";
    }

    if (!timesheetData.toDate) {
      errors.toDate = "To Date is required";
    }

    for (let i = 0; i < 7; i++) {
      if (isNaN(timesheetData.hoursPerDay[i])) {
        errors[`hoursPerDay[${i}]`] = "Hours Worked must be a number";
      }
    }

    // Validate the description field
    if (!timesheetData.description) {
      errors.description = "Description is required";
    }

    return errors;
  };

  const getDayDate = (dayIndex) => {
    if (!timesheetData.fromDate) return ""; // Return empty string if "From Date" is not set

    const fromDate = new Date(timesheetData.fromDate);
    const dayDate = new Date(fromDate);
    dayDate.setDate(fromDate.getDate() + dayIndex);
    return dayDate.toISOString().split("T")[0];
  };

  return (
    <div className="form-container">
      <h2>Weekly Timesheet Entry</h2>
      <form onSubmit={handleSubmit} className="full-width-form">
        <TextField
          label="Employee Name"
          name="employeeName"
          value={timesheetData.employeeName}
          onChange={handleChange}
          error={!!errors.employeeName}
          helperText={errors.employeeName}
          fullWidth
          required
          disabled
        />

        <TextField
          label="Employee ID"
          name="employeeId"
          value={timesheetData.employeeId}
          onChange={handleEmployeeIdChange}
          error={!!errors.employeeId}
          helperText={errors.employeeId}
          type="number"
          fullWidth
          required
          disabled
        />

        <TextField
          label="From Date"
          name="fromDate"
          type="date"
          value={timesheetData.fromDate}
          onChange={handleFromDateChange}
          error={!!errors.fromDate}
          helperText={errors.fromDate}
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
          value={timesheetData.toDate}
          onChange={handleToDateChange}
          error={!!errors.toDate}
          helperText={errors.toDate}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
          disabled // <-- Disable the "To Date" input field
        />

        <div className="horizontal-fields-container">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="horizontal-field">
              <TextField
                label={`${day} - Hours Worked (${getDayDate(index)})`}
                name={`hoursPerDay[${index}]`}
                type="number"
                step="0.1"
                min="0"
                value={timesheetData.hoursPerDay[index]}
                onChange={(e) => handleHoursWorkedChange(e, index)}
                error={!!errors[`hoursPerDay[${index}]`]}
                helperText={errors[`hoursPerDay[${index}]`]}
                fullWidth
                required
              />
            </div>
          ))}
        </div>

        <TextField
          label="Project"
          name="project"
          value={timesheetData.project}
          onChange={handleChange}
          error={!!errors.project}
          helperText={errors.project}
          fullWidth
          required
        />

        <TextField
          label="Description"
          name="description"
          value={timesheetData.description}
          onChange={handleChange}
          multiline
          rows={4}
          variant="outlined"
          error={!!errors.description}
          helperText={errors.description}
          fullWidth
          required
        />

        <div className="form-actions">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          Are you sure you want to submit this timesheet?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmSubmit}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isFormSubmitted} onClose={() => setIsFormSubmitted(false)}>
        <DialogTitle>Form Submitted</DialogTitle>
        <DialogContent>
          Your timesheet has been successfully submitted.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsFormSubmitted(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TimesheetForm;



