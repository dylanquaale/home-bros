import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { red, grey } from "@mui/material/colors";
import { SAVE_PROPERTY } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function FavoriteButton({ property }) {

  const [isLiked, setLiked] = useState(false);
  const [saveProperty] = useMutation(SAVE_PROPERTY);
  async function handleClick(prevState) {
    setLiked(!prevState);
   
    try {
      const { data } = await saveProperty({
        variables: {
          propertyData: property._id,
        },
      });

     
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <IconButton
      aria-label="add to favorites"
      onClick={() => handleClick(isLiked)}>
      <FavoriteIcon sx={isLiked ? { color: red[500] } : { color: grey[500] }} />
    </IconButton>
  );
}
