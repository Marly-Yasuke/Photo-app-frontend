import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate, NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import { Button } from "@mui/material";

function Navbar() {
  const { isLoggedIn, user, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const destroyToken = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    authenticateUser();
  };
  return (
    <nav>
      {isLoggedIn && (
        <>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            Profile
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            About
          </NavLink>{" "}
          <button onClick={destroyToken}>Logout</button>
        </>
      )}
      {!isLoggedIn && <></>}{" "}
    </nav>
  );
}

export default Navbar;
