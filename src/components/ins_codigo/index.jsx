// import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function SimplePaper4() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 230,
          border:"2px solid",
          borderRadius:"20px",
          marginTop: "5rem",
          marginBottom:"-3rem"
        },
      }}
    >
      <Paper style={{padding:20}}>
      <Typography variant="h5" style={{textAlign:"center"}}>
            Recuperar Senha
      </Typography>
      <Typography variant='h9' style={{display: 'flex', justifyContent: 'center'}}>
            Digite o código enviado
      </Typography>
      <Typography variant="h6" style={{marginBottom: '-1rem'}}>
            Código:
      </Typography>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        
      <TextField
          label="Digite o código aqui:"
          id="outlined-size-small"
          size="small"
          style={{width:"100%",marginTop:"1rem"}}
        />
        <Button onClick={() => navigate('/alt_senha')} variant="text" size='large' style={{marginTop:"5%",borderRadius:"20px",width:"80%", marginBottom:"4%",border:"2px solid black",color:"black" }}>Avançar</Button>
      </div>
      </Paper>
    </Box>
  );
}
