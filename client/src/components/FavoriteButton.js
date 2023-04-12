import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { red, grey } from '@mui/material/colors';

export default function FavoriteButton() {

    const [isLiked, setLiked] = useState(false);
    
    function handleClick(prevState) {
        setLiked(!prevState);
        // need SAVE_PROPERTY mutation
    } 

    return (
        <IconButton aria-label="add to favorites" onClick={() => handleClick(isLiked)}> 
        <FavoriteIcon sx=
        {isLiked ? ({ color: red[500] }): ({ color: grey[500] })}
    />
      </IconButton>
    )
}