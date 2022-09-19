import React, { useEffect, useRef } from "react";
import "./Signup.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Signup = ({ setShowModal }) => {
  const modal = useRef();

  useEffect(() => {
    modal.current.showModal();
    return () => setShowModal((prev) => !prev);
  }, []);
  return (
    <dialog ref={modal} className="Signup">
      <h2>Create an account!</h2>
      <form action="">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
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
            />
          </Grid>
        </Grid>{" "}
        <br />
        <Button
          type="submit"
          halfWidth
          variant="contained"
          className="signup-button"
        >
          Register
        </Button>
      </form>
    </dialog>
  );
};

export default Signup;
