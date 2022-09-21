import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link, NavLink } from "react-router-dom";
import { Route, Router } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, user } = useContext(AuthContext);
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
        </>
      )}
      {!isLoggedIn && <></>}{" "}
    </nav>
  );
}

export default Navbar;
