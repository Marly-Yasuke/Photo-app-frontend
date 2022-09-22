import React from "react";
import { useState, useEffect, useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axiosInstance from "../utils/axiosInstance";
import DeleteImage from "./DeleteImage";
import { useParams } from "react-router";

const API_URL = "https://lets-shoot.herokuapp.com";

const UserPictures = ({ id }) => {
  const { username } = useParams();
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`${API_URL}/api/images/user/${id}`)
      .then((response) => {
        // console.log("Pictures from " + username, response.data);
        setPictures(response.data);
      })
      .catch((error) => {
        console.log("No images found");
      });
  }, [username]);

  // const filteredPictures = pictures.filter((pictures) => {
  //   console.log(pictures.model);
  //   return pictures.shot_by?.username === "Marko89";
  // });

  return (
    <>
      <section>
        <h2>My Pictures</h2>
      </section>
      <button>Add Photos</button>
      <section>
        <ImageList
          sx={{
            width: "90%",
            height: 500,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          cols={3}
          rowHeight={164}
        >
          {pictures.map((picture) => (
            <ImageListItem key={picture.link}>
              <img
                src={`${picture.link}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${picture.link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"users pic"}
                loading="lazy"
              />
              <DeleteImage />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </>
  );
};

export default UserPictures;
