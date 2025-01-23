import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimpleTextArea() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          width: 310,
          border: '2px solid',
          borderRadius: '20px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#000',
            textAlign: 'justify',
          }}
        >
          Enviaremos um código ao seu e-mail de login. Quando confirmado, você poderá atualizar sua senha.
        </Typography>
      </Paper>
    </Box>
  );
}
