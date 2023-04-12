import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { red, grey } from "@mui/material/colors";
import { SAVE_PROPERTY } from "../utils/mutations";
import { useMutation } from "@apollo/client";
export default function FavoriteButton({ property }) {
  console.log(property);
  const [isLiked, setLiked] = useState(false);
  const [saveProperty, { error }] = useMutation(SAVE_PROPERTY);
  async function handleClick(prevState) {
    setLiked(!prevState);
    console.log(property._id)// need SAVE_PROPERTY mutation
    try {
      const { data } = await saveProperty({
        variables: {
          propertyData: property._id,
        },
      });
      
     console.log(data);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <IconButton
      aria-label="add to favorites"
      onClick={() => handleClick(isLiked)}
    >
      <FavoriteIcon sx={isLiked ? { color: red[500] } : { color: grey[500] }} />
    </IconButton>
  );
}
