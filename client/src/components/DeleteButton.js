import React, { useState } from "react";
import { REMOVE_PROPERTY } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { Button } from "@mui/material";

export default function DeleteButton({ property }) {
  console.log(property);
  const [isDeleted, setDeleted] = useState(false);
  const [removeProperty] = useMutation(REMOVE_PROPERTY);
  async function handleClick(prevState) {
    // setDeleted(!prevState);
    console.log(property._id);
      try {
        const { data } = await removeProperty({
          variables: {
            propertyId: property._id, 
          },
        });

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <Button variant="contained" onClick={() => handleClick(isDeleted)}>
      Delete This Property
    </Button>
  );
}