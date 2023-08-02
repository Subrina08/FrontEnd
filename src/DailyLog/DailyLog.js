import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";

import "./Attendancetable.css";

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("");
  const [dateOptions, setDateOptions] = useState([]);
  const [showEntries, setShowEntries] = useState(false);

  useEffect(() => {
   
    axios
      .get("http://localhost:3034/attendance/report")
      .then((response) => {
        setAttendanceData(response.data);
       
        const uniqueDates = [
          ...new Set(response.data.map((attendance) => attendance.date)),
        ];
        setDateOptions(uniqueDates);
       
        const currentDate = new Date().toISOString().split("T")[0];
        setSelectedFromDate(currentDate);
        setSelectedToDate(currentDate);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFromDateChange = (event) => {
    setSelectedFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setSelectedToDate(event.target.value);
  };

  const calculateTotalHoursByPerson = (personId) => {
    const filteredByPerson = filteredData.filter(
      (attendance) => attendance.id === personId
    );
    let totalHours = 0;

    filteredByPerson.forEach((attendance) => {
      totalHours += attendance.hoursWorked;
    });

    return hoursToMinutes(totalHours);
  };

  const hoursToMinutes = (hours) => {
    return (hours / 60).toFixed(2); 
  };

  const filteredData = attendanceData.filter((attendance) => {
    if (!selectedFromDate && !selectedToDate) {
      return true; 
    }

    
    const attendanceDate = new Date(attendance.date);
    const fromDate = selectedFromDate ? new Date(selectedFromDate) : null;
    const toDate = selectedToDate ? new Date(selectedToDate) : null;

    
    return (
      (!fromDate || attendanceDate >= fromDate) &&
      (!toDate || attendanceDate <= toDate)
    );
  });

  const uniquePersonIds = [
    ...new Set(filteredData.map((attendance) => attendance.id)),
  ];
  const totalHoursByPerson = uniquePersonIds.map((personId) => {
    const personData = {
      id: personId,
      name: filteredData.find((attendance) => attendance.id === personId).name,
      totalHours: calculateTotalHoursByPerson(personId),
    };

    
    const firstAttendance = filteredData.find(
      (attendance) => attendance.id === personId
    );
    if (firstAttendance) {
      personData.location = firstAttendance.location;
    }

    return personData;
  });

  const handleFilterEntries = () => {
    setShowEntries(true);
  };

  return (
    <div>
      <div className="date-filter-container">
      <h2> Hours Worked </h2>
        <FormControl style={{ minWidth: 160, marginRight: 10 }}>
          <TextField
            label="From Date"
            name="fromDate"
            type="date"
            value={selectedFromDate}
            onChange={handleFromDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            className="date-input"
          />
        </FormControl>

        <FormControl style={{ minWidth: 160, marginRight: 10 }}>
          <TextField
            label="To Date"
            name="toDate"
            type="date"
            value={selectedToDate}
            onChange={handleToDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            className="date-input"
          />
        </FormControl>

        <Button
          variant="contained"
          size="small"
          onClick={handleFilterEntries}
          className="filter-entries-button"
          style={{ width: 160 }}
        >
          Filter Entries
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          
          <TableHead className="TableHead">
            <TableRow>
              <TableCell className="heading-cell">Date</TableCell>
              <TableCell className="heading-cell">ID</TableCell>
              <TableCell className="heading-cell">Name</TableCell>
              <TableCell className="heading-cell">Location</TableCell>
              <TableCell className="heading-cell">Hours Worked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showEntries &&
              totalHoursByPerson.map((personData) => (
                <TableRow key={personData.id}>
                  <TableCell>
                    {selectedFromDate} to {selectedToDate}
                  </TableCell>
                  <TableCell>{personData.id}</TableCell>
                  <TableCell>{personData.name}</TableCell>
                  <TableCell>{personData.location}</TableCell>
                  <TableCell>{personData.totalHours}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AttendanceTable;
