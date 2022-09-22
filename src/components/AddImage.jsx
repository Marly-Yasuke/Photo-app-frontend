import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
const API_URL = "https://lets-shoot.herokuapp.com";

const AddImage = ({ getLatestPictures }) => {
  const [image, setImage] = useState("");
  const { authenticateUser, token } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData();
    fd.append("image", image);
    const config = {
      baseURL: API_URL,
      url: "/api/images",
      method: "POST",
      headers: { Authorization: "Bearer " + token },
      data: fd,
    };
    axios(config)
      .then((res) => {
        console.log(res.data);
        getLatestPictures();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Profile picture</label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button>Add photos</button>
    </form>
  );
};

export default AddImage;
