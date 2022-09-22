import { height } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import EditProfile from "../../components/EditProfile";
import UserPictures from "../../components/UserPictures";
import { AuthContext } from "../../context/auth.context";
import { convertLength } from "@mui/material/styles/cssUtils";
import Button from "@mui/material/Button";
import "./UserProfile.css";

const API_URL = "https://lets-shoot.herokuapp.com";

const UserProfile = () => {
  const [userToDisplay, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setUser(user);
  }, [user]);

  // users profile
  if (!userToDisplay) return <div>No profile</div>;
  return (
    <div>
      <section className="user">
        {userToDisplay.avatar && (
          <img
            className="avatar"
            src={userToDisplay.avatar}
            alt={`profile ${userToDisplay.username}`}
          />
        )}
        <ul className="userInfos">
          <li className="username">{userToDisplay.username}</li>
          <li className="role">{userToDisplay.role}</li>
          <li>{userToDisplay.email}</li>
          <li>{userToDisplay._id}</li>
        </ul>
      </section>

      <Button variant="outlined" onClick={() => setShowForm(!showForm)}>
        Edit profile
      </Button>
      {showForm && <EditProfile />}
      <UserPictures id={userToDisplay._id} />
    </div>
  );
};

export default UserProfile;
