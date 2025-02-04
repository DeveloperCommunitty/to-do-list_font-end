// import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUpdatePasswdMutation } from '../../server/api';

export default function AlterarSenhaPaper() {
  const navigate = useNavigate();
  const [passwd,setPasswd]= useState("")

  const updatePasswordMutation=useUpdatePasswdMutation();

  const handleUpdatePassword=async()=>{
    await updatePasswordMutation.mutateAsync(passwd)
    navigate("conf_senha");
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 430,
          border: "2px solid",
          borderRadius: "20px",
          marginBottom: "5rem"
        },
      }}
    >
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Alterar Senha
        </Typography>
        <Typography variant='h9' style={{ display: 'flex', justifyContent: 'center',marginBottom:"3%" }}>
          Digite a sua nova senha
        </Typography>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h6" style={{ marginBottom: '-1rem', marginRight: '4.5rem',width:"80%" }}>
            Senha Atual:
          </Typography>
          <TextField
          onChange={(e)=>setPasswd(e.target.value)}
            label="Digite aqui"
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <Typography variant="h6" style={{ marginBottom: '-1rem', marginRight: '4.5rem',width:"80%"}}>
            Nova Senha:
          </Typography>
          <TextField
            label="Digite aqui"
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <Typography variant="h6" style={{ marginBottom: '-1rem', marginRight: '4rem',width:"80%" }}>
            Confirmar Nova Senha:
          </Typography>
          <TextField
            label="Digite aqui"
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <Button
            variant="text"
            size='large'
            style={{
              marginTop: "3%",
              borderRadius: "20px",
              width: "80%",
              marginBottom: "4%",
              border: "2px solid black",
              color: "black"
            }}
            onClick={handleUpdatePassword}
          >
            Confirmar
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
