// // import React, { useState } from "react";
// // import axios from "axios";

// // const HomePage = () => {
// //   const [employeeId, setEmployeeId] = useState("");
// //   const [responseMessage, setResponseMessage] = useState("");
// //   const [showModal, setShowModal] = useState(false);

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     // Make the POST request to the API
// //     axios
// //       .post(`http://localhost:3034/attendance/${employeeId}`)
// //       .then((response) => {
// //         setResponseMessage(response.data);
// //         setShowModal(true);

// //         // Automatically close the modal after 2 seconds
// //         setTimeout(() => {
// //           setShowModal(false);
// //         }, 2000);
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //         setResponseMessage("Error occurred while making the request.");
// //         setShowModal(true);

// //         // Automatically close the modal after 2 seconds
// //         setTimeout(() => {
// //           setShowModal(false);
// //         }, 2000);
// //       });
// //   };

// //   return (
// //     <div className="container">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <h2 className="text-center mt-4">Employee Attendance</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div className="input-group mb-3">
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 placeholder="Enter Employee ID"
// //                 value={employeeId}
// //                 onChange={(e) => setEmployeeId(e.target.value)}
// //               />
// //             </div>
// //             {/* Button in next line and bigger */}
// //             <div className="d-grid gap-2">
// //               <button type="submit" className="btn btn-primary btn-lg">
// //                 Submit
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Bootstrap Modal */}
// //       <div
// //         className={`modal ${showModal ? "show" : ""}`}
// //         style={{ display: showModal ? "block" : "none" }}
// //       >
// //         <div className="modal-dialog">
// //           <div className="modal-content">
// //             <div className="modal-header">
// //               <h5 className="modal-title">Response Message</h5>
// //               <button
// //                 type="button"
// //                 className="btn-close"
// //                 onClick={() => setShowModal(false)}
// //               ></button>
// //             </div>
// //             <div className="modal-body">
// //               <p>{responseMessage}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;


// import React, { useState } from "react";
// import { TextField, Button, Modal, Box } from "@mui/material";
// import axios from "axios";

// const HomePage = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Make the POST request to the API
//     axios
//       .post(`http://localhost:3034/attendance/${employeeId}`)
//       .then((response) => {
//         setResponseMessage(response.data);
//         setShowModal(true);

//         // Automatically close the modal after 2 seconds
//         setTimeout(() => {
//           setShowModal(false);
//         }, 1000);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setResponseMessage("Error occurred while making the request.");
//         setShowModal(true);

//         // Automatically close the modal after 2 seconds
//         setTimeout(() => {
//           setShowModal(false);
//         }, 2000);
//       });
//   };

//   return (
//     <Box className="container">
//       <Box className="row justify-content-center">
//         <Box className="col-md-6">
//           <h2 className="text-center mt-4">Employee Attendance</h2>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Enter Employee ID"
//               variant="outlined"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               fullWidth
//               className="input-group mb-3"
//             />
//             {/* Button in next line and bigger */}
//             <Button type="submit" variant="contained" size="large" fullWidth>
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Box>

//       {/* Material-UI Modal */}
//       <Modal open={showModal} onClose={() => setShowModal(false)}>
//         <Box className="modal-dialog">
//           <Box className="modal-content">
//             <Box className="modal-header">
//               <h5 className="modal-title">Response Message</h5>
//               <Button onClick={() => setShowModal(false)} color="primary">
//                 Close
//               </Button>
//             </Box>
//             <Box className="modal-body">
//               <p>{responseMessage}</p>
//             </Box>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default HomePage;


// import React, { useState } from "react";
// import { TextField, Button, Modal, Box } from "@mui/material";
// import axios from "axios";


// const HomePage = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Make the POST request to the API
//     axios
//       .post(`http://localhost:3034/attendance/${employeeId}`)
//       .then((response) => {
//         setResponseMessage(response.data);
//         setShowModal(true);

//         // Automatically close the modal after 2 seconds
//         setTimeout(() => {
//           setShowModal(false);
//         }, 1000);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setResponseMessage("Error occurred while making the request.");
//         setShowModal(true);

//         // Automatically close the modal after 2 seconds
//         setTimeout(() => {
//           setShowModal(false);
//         }, 1000);
//       });
//   };

//   return (
//     <Box className="container">
//       <Box className="row justify-content-center">
//         <Box className="col-md-6">
//           <h2 className="text-center mt-4">Employee Attendance</h2>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Enter Employee ID"
//               variant="outlined"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               fullWidth
//               className="input-group mb-3"
//             />
//             {/* Button in next line and bigger */}
//             <Button type="submit" variant="contained" size="large" fullWidth>
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Box>

//       {/* Material-UI Modal */}
//       <Modal open={showModal} onClose={() => setShowModal(false)}>
//         <Box className="modal-dialog">
//           <Box className="modal-content">
//             <Box className="modal-header">
//               <h5 className="modal-title">Response Message</h5>
//               <Button onClick={() => setShowModal(false)} color="primary">
//                 Close
//               </Button>
//             </Box>
//             <Box className="modal-body">
//               <p>{responseMessage}</p>
//             </Box>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default HomePage;

// import React, { useState } from "react";
// import { TextField, Button, Modal, Box } from "@mui/material";
// import axios from "axios";


// const HomePage = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Make the POST request to the API
//     axios
//       .post(`http://localhost:3034/attendance/${employeeId}`)
//       .then((response) => {
//         setResponseMessage(response.data);
//         setShowModal(true);

//         // Automatically close the modal after 2 seconds
//         setTimeout(() => {
//           setShowModal(false);
//         }, 1000);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setResponseMessage("Error occurred while making the request.");
//         setShowModal(true);

//         // Automatically close the modal after 2 seconds
//         setTimeout(() => {
//           setShowModal(false);
//         }, 1000);
//       });
//   };

//   return (
//     <Box className="container">
//       <Box className="row justify-content-center">
//         <Box className="col-md-6">
//           <h2 className="text-center mt-4">Employee Attendance</h2>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Enter Employee ID"
//               variant="outlined"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               fullWidth
//               className="input-group mb-3"
//             />
//             {/* Button in next line and bigger */}
//             <Button type="submit" variant="contained" size="large" fullWidth>
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Box>

//       {/* Material-UI Modal */}
//       <Modal open={showModal} onClose={() => setShowModal(false)}>
//         <Box className="modal-dialog">
//           <Box className="modal-content">
//             <Box className="modal-header">
//               <h5 className="modal-title">Response Message</h5>
//               <Button onClick={() => setShowModal(false)} color="primary">
//                 Close
//               </Button>
//             </Box>
//             <Box className="modal-body">
//               <p>{responseMessage}</p>
//             </Box>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Modal, Box, Typography } from "@mui/material";

const HomePage = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the POST request to the API
    axios
      .post(`http://localhost:3034/attendance/${employeeId}`)
      .then((response) => {
        setResponseMessage(response.data);
        setShowModal(true);

        // Automatically close the modal after 2 seconds
        setTimeout(() => {
          setShowModal(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMessage("Error occurred while making the request.");
        setShowModal(true);

        // Automatically close the modal after 2 seconds
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mt-4">Employee Attendance</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <TextField
                label="Enter Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                fullWidth
              />
            </div>
            {/* Button in next line and bigger */}
            <div className="d-grid gap-2">
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* MUI Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Response Message
          </Typography>
          <Typography>{responseMessage}</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default HomePage;

