import React, { useState } from "react"; // import React, { useState } from "react";
import { REMOVE_PROPERTY } from "../utils/mutations"; // import { REMOVE_PROPERTY } mutation
import { useMutation } from "@apollo/client"; // import { useMutation } from "@apollo/client";
import { Button } from "@mui/material"; // import { Button } from "@mui/material";

// DeleteButton component that takes in a property as a prop and returns a button that when clicked will delete the property from the database
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
        
      }
    }

  return (
    <Button variant="contained" onClick={() => handleClick(isDeleted)}>
      Delete This Property
    </Button>
  );
}