// import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Imagem_tudo from '../../assets/Imagem_tudo.png';

export default function SimplePaper2() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: { xs: '100%', sm: 320 },
          height: 'auto',
          borderRadius: "30px",
          border: "2px solid",
          textAlign: "center",
          marginBottom: "8rem"
        },
      }}
    >
      <Paper>
        <Typography variant='h6' style={{ padding: "20px" }}>
          Organize seu dia, realize seus sonhos
        </Typography>
        <Box
          component="img"
          src={Imagem_tudo}
          alt="Organize seu dia, realize seus sonhos"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: "0 0 30px 30px",
          }}
        />
      </Paper>
    </Box>
  );
}
