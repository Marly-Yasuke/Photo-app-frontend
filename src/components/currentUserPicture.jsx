import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = "https://lets-shoot.herokuapp.com";

const CurrentUserPicture = () => {
  const { user } = useContext(AuthContext);
  const [userImage, setUserImage] = useState([]);
  useEffect(() => {
    if (!user) return;
    axios
      .get(`${API_URL}/api/images?shot_by=${user.username}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>Hey</div>;
};

export default CurrentUserPicture;
