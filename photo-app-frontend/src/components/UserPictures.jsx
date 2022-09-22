import { useState, useEffect, useCallback } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axiosInstance from "../utils/axiosInstance";
import DeleteImage from "./DeleteImage";
import { API_URL } from "../utils/consts";
import AddImage from "./AddImage";

const UserPictures = ({ id }) => {
  const [pictures, setPictures] = useState([]);

  const getLatestPictures = useCallback(() => {
    axiosInstance
      .get(`${API_URL}/api/images/user/${id}`)
      .then((response) => {
        setPictures(response.data);
      })
      .catch((error) => {
        console.log("No images found");
      });
  }, [id]);

  useEffect(getLatestPictures, [getLatestPictures]);

  // const filteredPictures = pictures.filter((pictures) => {
  //   console.log(pictures.model);
  //   return pictures.shot_by?.username === "Marko89";
  // });

  return (
    <>
      <section>
        <h2>My Pictures</h2>
      </section>
      <AddImage getLatestPictures={getLatestPictures} />
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
              <DeleteImage
                imageId={picture._id}
                getLatestPictures={getLatestPictures}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </>
  );
};

export default UserPictures;
