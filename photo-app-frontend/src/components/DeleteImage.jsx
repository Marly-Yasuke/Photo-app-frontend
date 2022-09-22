import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
const API_URL = "https://lets-shoot.herokuapp.com";

const DeleteImage = () => {
  const [imageToDelete, setImageToDelete] = useState("");
  const { authenticateUser } = useContext(AuthContext);

  const handleClick = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("authToken");
    const fd = new FormData();
    fd.append(imageToDelete);
    const config = {
      baseURL: API_URL,
      url: "/api/images/:imageId",
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
      data: fd,
    };
    axios(config)
      .then((res) => {
        console.log(res.data);
        authenticateUser();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <button onClick={(handleClick) => setImageToDelete()}>
      Delete picture
    </button>
  );
};

export default DeleteImage;
