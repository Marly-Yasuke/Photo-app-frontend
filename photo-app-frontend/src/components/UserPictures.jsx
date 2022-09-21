import React from "react";
import { useState, useEffect, useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axiosInstance from "../utils/axiosInstance";
import DeleteImage from "./DeleteImage";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router";
import Button from '@mui/material/Button';



const API_URL = "https://lets-shoot.herokuapp.com";

const UserPictures = ({ id }) => {
  const {username} = useParams()
  const [pictures, setPictures] = useState([]);
  const {user} = useContext(AuthContext)
  const [image, setImage] = useState("");
  useEffect(() => {
    axiosInstance
      .get(`${API_URL}/api/images?shot_by=${username}`)
      .then((response) => {
        console.log(response.data);
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
      
      <section>
        <ImageList
          sx={{
            width: 500,
            height: 450,
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
              {/* <DeleteIImage /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </>
  );
};

export default UserPictures;
