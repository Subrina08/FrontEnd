import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const EmployeeAttendanceTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Attendance ID</TableCell>
            <TableCell>Access Card ID</TableCell> {/* Added the new field */}
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>In Time</TableCell>
            <TableCell>Out Time</TableCell>
            <TableCell>Hours Worked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((attendance) => (
            <TableRow key={attendance.attendanceId}>
              <TableCell>{attendance.attendanceId}</TableCell>
              <TableCell>{attendance.employee.accessCardId}</TableCell> {/* Displaying the new field */}
              <TableCell>{attendance.employee.name}</TableCell>
              <TableCell>{attendance.employee.location}</TableCell>
              <TableCell>{attendance.date}</TableCell>
              <TableCell>{attendance.inTime}</TableCell>
              <TableCell>{attendance.outTime}</TableCell>
              <TableCell>{attendance.hoursWorked}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeAttendanceTable;
