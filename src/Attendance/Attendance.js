import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Attendance.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const role = useSelector((state) => state.userReducer?.role ?? null);
  console.log(role);

  useEffect(() => {
    // Fetch the attendance data
    axios
      .get("http://localhost:3034/attendance")
      .then((response) => {
        setAttendanceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching attendance data:", error);
      });
  }, []);

  // Filter attendance data based on the selected date, name, and location
  const filteredData = attendanceData.filter((attendance) => {
    if (selectedDate) {
      // Filter by selected date
      if (attendance.date !== selectedDate) {
        return false;
      }
    }

    // Filter by name
    if (searchName && !attendance.employee.name.toLowerCase().includes(searchName.toLowerCase())) {
      return false;
    }

    // Filter by location
    if (searchLocation && !attendance.employee.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="table-container-log" >
      <h2> Daily Log </h2>
      <div className="search-container">
        {/* Date selection control */}
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <TextField
          label="Search by Location"
          variant="outlined"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate || ""}
          onChange={(e) => setSelectedDate(e.target.value || null)}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* Display the selected date above the table headers */}
              <TableCell colSpan={7} align="center" className="selected-date">
                {selectedDate && `Selected Date: ${selectedDate}`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="heading-cell">Attendance ID</TableCell>
              <TableCell className="heading-cell">Access ID</TableCell>
              <TableCell className="heading-cell">Name</TableCell>
              <TableCell className="heading-cell">Location</TableCell>
              <TableCell className="heading-cell">Date</TableCell>
              <TableCell className="heading-cell">In Time</TableCell>
              <TableCell className="heading-cell">Out Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((attendance) => (
              <TableRow key={attendance.attendanceId}>
                <TableCell>{attendance.attendanceId}</TableCell>
                <TableCell>{attendance.employee.accessCardId}</TableCell>
                <TableCell>{attendance.employee.name}</TableCell>
                <TableCell>{attendance.employee.location}</TableCell>
                <TableCell>{attendance.date}</TableCell>
                <TableCell>{formatTime(attendance.inTime)}</TableCell>
                <TableCell>
                  {attendance.outTime ? formatTime(attendance.outTime) : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AttendanceTable;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Attendance.css";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
// } from "@mui/material";
// import { useSelector } from "react-redux";

// const AttendanceTable = () => {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [searchName, setSearchName] = useState("");
//   const [searchLocation, setSearchLocation] = useState("");

//   const role = useSelector((state) => state.userReducer?.role ?? null);

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp);
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");

//     return `${hours}:${minutes}:${seconds}`;
//   };

//   useEffect(() => {
//     // Fetch the attendance data
//     axios
//       .get("http://localhost:3034/attendance")
//       .then((response) => {
//         setAttendanceData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching attendance data:", error);
//       });
//   }, []);

//   // Filter attendance data based on the selected date, name, and location
//   const filteredData = attendanceData.filter((attendance) => {
//     if (selectedDate) {
//       // Filter by selected date
//       if (attendance.date !== selectedDate) {
//         return false;
//       }
//     }

//     // Filter by name
//     if (
//       searchName &&
//       !attendance.employee.name.toLowerCase().includes(searchName.toLowerCase())
//     ) {
//       return false;
//     }

//     // Filter by location
//     if (
//       searchLocation &&
//       !attendance.employee.location
//         .toLowerCase()
//         .includes(searchLocation.toLowerCase())
//     ) {
//       return false;
//     }

//     return true;
//   });

//   return (
    
//     <div className="table-container-log">
//       <h2> Daily Log </h2>
//       <div className="search-container">
//         {/* Date selection control */}
//         <TextField
//           label="Search by Name"
//           variant="outlined"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//         />
//         <TextField
//           label="Search by Location"
//           variant="outlined"
//           value={searchLocation}
//           onChange={(e) => setSearchLocation(e.target.value)}
//         />
//         <input
//           type="date"
//           value={selectedDate || ""}
//           onChange={(e) => setSelectedDate(e.target.value || null)}
//         />
//       </div>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {/* Display the selected date above the table headers */}
//               <TableCell colSpan={7} align="center" className="selected-date">
//                 {selectedDate && `Selected Date: ${selectedDate}`}
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               {/* <TableCell className="heading heading-cell">Attendance ID</TableCell> */}
//               <TableCell className="heading heading-cell">Access ID</TableCell>
//               <TableCell className="heading heading-cell">Name</TableCell>
//               <TableCell className="heading heading-cell">Location</TableCell>
//               <TableCell className="heading heading-cell">Date</TableCell>
//               <TableCell className="heading heading-cell">In Time</TableCell>
//               <TableCell className="heading heading-cell">Out Time</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData.map((attendance) => (
//               <TableRow key={attendance.employee.accessCardId}>
                
//                 <TableCell>{attendance.employee.accessCardId}</TableCell>
//                 <TableCell>{attendance.employee.name}</TableCell>
//                 <TableCell>{attendance.employee.location}</TableCell>
//                 <TableCell>{attendance.date}</TableCell>
//                 <TableCell>{formatTime(attendance.inTime)}</TableCell>
//                 <TableCell>
//                   {attendance.outTime ? formatTime(attendance.outTime) : "-"}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
    
//   );
// };

// export default AttendanceTable;
