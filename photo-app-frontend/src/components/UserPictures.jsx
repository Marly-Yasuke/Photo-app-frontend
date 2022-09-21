import React from "react";
import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axiosInstance from "../utils/axiosInstance";

const API_URL = "https://lets-shoot.herokuapp.com";

const UserPictures = ({ id }) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`${API_URL}/api/images`)
      .then((response) => {
        console.log(response.data);
        setPictures(response.data);
      })
      .catch((error) => {
        console.log("No images found");
      });
  }, []);
  //const filteredPictures = pictures.filter(pictures => {
   // return pictures.model === "Mila"
//})
  return (
    <>
      <section>
        <h2>My Pictures</h2>
      </section>
      <section >
        <ImageList sx={{ width: "90%", height: 500, display: "flex",
              flexDirection: "row",
              justifyContent: "center", }} cols={3} rowHeight={164}>
          {pictures.map((picture) => (
            <ImageListItem key={picture.link}>
              <img
                src={`${picture.link}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${picture.link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"users pic"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </>
  );
};

export default UserPictures;
