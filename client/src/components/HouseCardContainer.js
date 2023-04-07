import React from 'react';
import Box from '@material-ui/core/Box';
import HouseCardUno from './HouseCardUno';

export default function Display() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <HouseCardUno />
        {/* will be replaced with a map method and then map each property inside the container.  */}
      </Box>
    </div>
  );
}