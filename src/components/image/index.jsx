// import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper2() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 320,
          height: 250,
          borderRadius:"30px",
          border:"2px solid",
          textAlign:"center",
            marginLeft:"7rem",
          marginBottom:"8rem"
        },
      }}
    >
      <Paper>
        <Typography variant='h6' style={{padding:"20px"}}>
        Organize seu dia,
        realize seus sonhos
        </Typography>
      </Paper>
    </Box>
  );
}
