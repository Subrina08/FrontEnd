import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Modal, Box, Typography } from "@mui/material";

const HomePage = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    axios
      .post(`http://localhost:3034/attendance/${employeeId}`)
      .then((response) => {
        setResponseMessage(response.data);
        setShowModal(true);

        
        setTimeout(() => {
          setShowModal(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMessage("Error occurred while making the request.");
        setShowModal(true);

        
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
          
            <div className="d-grid gap-2">
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

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

