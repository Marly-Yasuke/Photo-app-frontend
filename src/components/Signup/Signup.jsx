import React, { useEffect, useRef, useState } from "react";
import "./Signup.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://lets-shoot.herokuapp.com";

const Signup = ({ setShowModal }) => {
  const modal = useRef();
  const navigate = useNavigate();
  const [infos, setInfos] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleUsername = (e) =>
    setInfos({ ...infos, username: e.target.value });
  const handleEmail = (e) => setInfos({ ...infos, email: e.target.value });
  const handlePassword = (e) =>
    setInfos({ ...infos, password: e.target.value });
  const handleRole = (e) => setInfos({ ...infos, role: e.target.value });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // const requestBody = { infos };

    axios
      .post(`${API_URL}/api/auth/signup`, infos)
      .then((response) => {
        console.log(response);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("");
      });
  };

  useEffect(() => {
    modal.current.showModal();
    return () => setShowModal((prev) => !prev);
  }, []);
  return (
    <dialog ref={modal} className="Signup">
      <h2>Create an account!</h2>
      <form onSubmit={handleSignupSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={infos.username}
              onChange={handleUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={infos.email}
              onChange={handleEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={infos.password}
              onChange={handlePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="role"
              label="Role"
              name="role"
              autoComplete="role"
              value={infos.role}
              onChange={handleRole}
            />
          </Grid>
        </Grid>{" "}
        <br />
        <Button
          type="submit"
          halfwidth="true"
          variant="contained"
          className="signup-button"
        >
          Register
        </Button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </dialog>
  );
};

export default Signup;
