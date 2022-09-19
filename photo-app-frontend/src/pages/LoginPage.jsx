import { useState } from "react";
import Signup from "../components/Signup/Signup";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Name of the app {""}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function LogIn() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (event) => {
    event.preventDefault();
    setShowModal(!showModal);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate>
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            <Grid container justifyContent="center">
              <Grid item>Don't have an account?</Grid>
              <br></br>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="signup-button"
                onClick={handleShowModal}
              >
                Sign Up
              </Button>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {showModal && <Signup setShowModal={setShowModal} />}
    </ThemeProvider>
  );
}

export default LogIn;
