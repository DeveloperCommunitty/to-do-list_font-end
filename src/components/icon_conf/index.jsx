// import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

export default function SuccessMessage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 275,
          border: "2px solid",
          borderRadius: "20px",
          marginTop: "5rem",
          marginBottom: "-3rem",
        },
      }}
    >
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Senha atualizada com sucesso
        </Typography>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CheckCircleIcon style={{ fontSize: 90, color: 'green', marginTop: 10 }} /> {/* Ícone Check */}
          <Button
            variant="text"
            size="large"
            style={{
              marginTop: "5%",
              borderRadius: "20px",
              width: "80%",
              marginBottom: "4%",
              border: "2px solid black",
              color: "black",
            }}
            onClick={() => navigate('/')}
          >
            Fechar
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
