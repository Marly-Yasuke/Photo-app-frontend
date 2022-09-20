import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import UserPictures from "../components/UserPictures";
import { AuthContext } from "../context/auth.context";
const API_URL = "https://lets-shoot.herokuapp.com";

const UserProfile = () => {
  const params = useParams();
  const [userToDisplay, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (params.username) {
      const token = localStorage.getItem("authToken");
      axios
        .get(`${API_URL}/api/user?username=${params.username}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setUser(res.data[0]);
        });
    } else {
      setUser(user);
    }
  }, [params.username]);

  if (!userToDisplay) return <div>No profile</div>;
  return (
    <div>
      <ul>
        <li>{userToDisplay.username}</li>
        <li>{userToDisplay.email}</li>
        <li>{userToDisplay._id}</li>
        {userToDisplay.avatar && <li><img src={userToDisplay.avatar} alt={`profile ${userToDisplay.username}`} /></li>}
      </ul>
      <button onClick={() => setShowForm(!showForm)}>Edit profile</button>
      {showForm && <EditProfile />}
      <UserPictures id={userToDisplay._id} />
      
    </div>
  );
};

export default UserProfile;
