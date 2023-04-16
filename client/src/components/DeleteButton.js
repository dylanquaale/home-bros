import React, { useState } from "react";
import { REMOVE_PROPERTY } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { Button } from "@mui/material";

export default function DeleteButton({ property }) {
  
  const [isDeleted, setDeleted] = useState(false);
  const [removeProperty] = useMutation(REMOVE_PROPERTY);
  async function handleClick(prevState) {
    // setDeleted(!prevState);
    
      try {
        const { data } = await removeProperty({
          variables: {
            propertyId: property._id, 
          },
        });

        
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