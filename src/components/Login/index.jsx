import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function SimplePaper() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    if (!credentials.email || !credentials.password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      setError(null);
      await login(credentials);
      const role = user.role;
      console.log("Role do usuário:", role);
      if (role === 'USER') {
        navigate("/tarefas");
      } else if (role === "ADMIN") {
        navigate("/administracao");
      }
    } catch (error) {
      console.log(error);
      setError("Usuário não encontrado ou credenciais inválidas.");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: { xs: "100%", sm: 400 },
          height: { xs: "auto", sm: 400 },
          border: "2px solid",
          borderRadius: "20px",
          marginRight: "7rem",
          marginBottom: "5rem",
        },
      }}
    >
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Entrar
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Email"
            id="email"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
          <TextField
            label="Senha"
            id="password"
            type={showPassword ? "text" : "password"}
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            variant="h8"
            sx={{ color: "#0080FF", marginLeft: "auto", cursor: "pointer" }}
            onClick={() => navigate('/recuperacao_senha')}
          >
            Esqueceu sua senha?
          </Typography>

          {error && (
            <Typography color="error" style={{ marginTop: "1rem" }}>
              {error}
            </Typography>
          )}

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
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="text"
            size="large"
            style={{
              borderRadius: "20px",
              width: "80%",
              marginBottom: "4%",
              border: "2px solid black",
              color: "black",
            }}
            onClick={() => navigate('/cadastro')}
          >
            Cadastrar
          </Button>
        </div>
      </Paper>
    </Box>
  );
}