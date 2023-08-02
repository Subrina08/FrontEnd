import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardHeader, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = ({ onLogin }) => {
  const [username, setUsernameLocal] = useState("");
  const [password, setPasswordLocal] = useState("");
  const [error, setError] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(""); 

  const navigate = useNavigate();

  const handleLogin = () => {
    const basicAuthHeader = "Basic " + btoa(username + ":" + password);

    axios
      .get("http://localhost:3034/user", {
        headers: {
          Authorization: basicAuthHeader,
        },
      })
      .then((response) => {
        
        const user = response.data.find((user) => user.username === username);
        if (user) {
          console.log("Login successful");
          console.log(user.role);
          console.log(user.username);
          onLogin(user.role, user.username);
          setLoggedInUsername(user.username); 
          navigate("/");
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((error) => {
        
        setError("Invalid username or password");
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card className="card-container" style={{ borderColor: "black" }}>
            <CardHeader
              title={
                <Typography variant="h5" color="primary" className="login-header">
                  Login
                </Typography>
              }
            />
            <CardContent>
              <div className="mb-3">
                <TextField
                  fullWidth
                  label="Username"
                  value={username}
                  onChange={(e) => setUsernameLocal(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPasswordLocal(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  className="login-button" 
                >
                  Login
                </Button>
              </div>
              {error && (
                <Typography variant="body2" color="error" mt={2}>
                  {error}
                </Typography>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {loggedInUsername && (
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <Typography variant="body1">Logged in as: {loggedInUsername}</Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
