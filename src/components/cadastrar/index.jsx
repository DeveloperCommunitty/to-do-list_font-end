import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SimplePaper3() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [userData, setUserData] = useState({
    name: '', email: '', password: '', confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!userData.name || !userData.email || !userData.password || !userData.confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      setError(null);
      await register(userData);
      navigate('/');
    } catch (error) {
      console.log('Registro deu errado', error);
      setError("Erro ao registrar. Tente novamente.");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 470,
          border: "2px solid",
          borderRadius: "20px",
          marginBottom: "5rem"
        },
      }}
    >
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Cadastro
        </Typography>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TextField
            label="Nome"
            id="outlined-size-small"
            size="small"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            style={{ width: "100%", marginTop: "1rem" }}
            required
          />
          <TextField
            label="Email"
            id="outlined-size-small"
            size="small"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            style={{ width: "100%", marginTop: "1rem" }}
            required
          />
          <TextField
            label="Senha"
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            type={showPassword ? 'text' : 'password'}
            required
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <TextField
            label="Confirmar Senha"
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
            value={userData.confirmPassword}
            onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
            type={showPassword ? 'text' : 'password'}
            required
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          {error && (
            <Typography color="error" style={{ marginTop: "1rem" }}>
              {error}
            </Typography>
          )}

          <Button
            variant="text"
            size='large'
            style={{
              marginTop: "5%",
              borderRadius: "20px",
              width: "80%",
              marginBottom: "1%",
              border: "2px solid black",
              color: "black"
            }}
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
          <Button
            variant="text"
            size='large'
            style={{
              borderRadius: "20px",
              width: "80%",
              marginBottom: "4%",
              border: "2px solid black",
              color: "black"
            }}
            onClick={() => navigate('/')}
          >
            Login
          </Button>
        </div>
      </Paper>
    </Box>
  );
}