import React, { useState } from 'react';
import { Typography, Box, Paper, TextField, Button, IconButton, InputAdornment } from '@mui/material';;
import { useUpdatePasswdMutation } from '../../server/api';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function AddSenha() {
  const navigate = useNavigate();
  const [currentPasswd, setCurrentPasswd] = useState("");
  const [newPasswd, setNewPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const updatePasswordMutation = useUpdatePasswdMutation();

  const handleUpdatePassword = async () => {
    if (newPasswd !== confirmPasswd) {
      setError("As senhas não coincidem");
      return;
    }

    await updatePasswordMutation.mutateAsync(newPasswd);
    navigate("/");
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 350,
          border:"2px solid",
          borderRadius:"20px",
          marginBottom:"5rem"
          
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
            Nova Senha:
          </Typography>
          <TextField
            onChange={(e) => setNewPasswd(e.target.value)}
            label="Digite aqui"
            id="outlined-size-small"
            size="small"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <Typography variant="h6" style={{ marginBottom: '-1rem', marginRight: '4rem',width:"80%" }}>
            Confirmar Nova Senha:
          </Typography>
          <TextField
            onChange={(e) => setConfirmPasswd(e.target.value)}
            label="Digite aqui"
            id="outlined-size-small"
            size="small"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            style={{ width: "100%", marginTop: "1rem" }}
          />
          {error && (
            <Typography variant="body2" color="error" style={{ marginTop: "1rem" }}>
              {error}
            </Typography>
          )}
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
