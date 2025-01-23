// import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AlterarSenhaPaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 375,
          border:"2px solid",
          borderRadius:"20px",
          marginBottom:"5rem"
        },
      }}
    >
      <Paper style={{padding:20}}>
        <Typography variant="h5" style={{textAlign:"center"}}>
            Alterar Senha
      </Typography>
      <Typography variant='h9' style={{display: 'flex', justifyContent: 'center'}}>
            Digite a sua nova senha
      </Typography>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Typography variant="h6" style={{marginBottom: '-1rem', marginRight: '16.5rem'}}>
            Senha Atual:
      </Typography>
      <TextField
          label="Digite aqui"
          id="outlined-size-small"
          size="small"
          style={{width:"100%",marginTop:"1rem"}}
        />
      <Typography variant="h6" style={{marginBottom: '-1rem', marginRight: '16.5rem'}}>
            Nova Senha:
      </Typography>
      <TextField
          label="Digite aqui"
          id="outlined-size-small"
          size="small"
          style={{width:"100%",marginTop:"1rem"}}
        />
        <Typography variant="h6" style={{marginBottom: '-1rem', marginRight: '11rem'}}>
            Confirmar Nova Senha:
      </Typography>
        <TextField
          label="Digite aqui"
          id="outlined-size-small"
          size="small"
          style={{width:"100%",marginTop:"1rem"}}
        />

        <Button variant="text" size='large' style={{marginTop:"5%",borderRadius:"20px",width:"80%", marginBottom:"4%",border:"2px solid black",color:"black" }}>Confirmar</Button>

      </div>

      </Paper>

      
    </Box>
  );
}
