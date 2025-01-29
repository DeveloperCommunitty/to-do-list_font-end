// import * as React from 'react';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


export default function SimplePaper() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 400,
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
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            label="Senha"
            id="outlined-size-small"
            size="small"
            style={{ width: "100%", marginTop: "1rem" }}
          />
          <Typography
            variant="h8"
            sx={{ color: "#0080FF", marginLeft: "49%", cursor: "pointer" }}
            onClick={() => navigate('/recuperacao_senha')}
          >
            Esqueceu sua senha?
          </Typography>

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
            onClick={() => navigate('/tarefas')}
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
