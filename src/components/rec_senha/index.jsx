// import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useCheckEmailMutation } from '../../server/api';
import { useState } from 'react';

export default function SimplePaper() {
  const navigate = useNavigate();
  const [email,setEmail]= useState("")
  

  const  handleEmail =async (email)=>{
    await useCheckEmailMutation(email)
    navigate("/insercao_codigo")
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 200,
          border: "2px solid",
          borderRadius: "20px",
          marginTop: "5rem",
          marginBottom: "-3rem"
        },
      }}
    >
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Recuperar Senha
        </Typography>
        <Typography variant="h6" style={{ marginBottom: '-1rem' }}>
          Email:
        </Typography>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TextField 
            onChange={(e) => setEmail({email: e.target.value })}
            label="Digite aqui"
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <Button
            variant="text"
            size='large'
            style={{
              marginTop: "5%",
              borderRadius: "20px",
              width: "80%",
              marginBottom: "4%",
              border: "2px solid black",
              color: "black"
            }}
            onClick={handleEmail}
          >
            Avançar
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
