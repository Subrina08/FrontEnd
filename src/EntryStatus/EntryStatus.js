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
                  
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      
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
