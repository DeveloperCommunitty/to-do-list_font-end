// import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from 'react-router-dom';
import ModalPasta from "../modal_pasta";
import ModalEditarPasta from "../modal_editar_pasta";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export default function PaperPasta() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: 700,
          height: "auto",
          border: "3px solid black",
          borderRadius: "20px",
        },
      }}
    >
      <Paper elevation={5} style={{ padding: 20 }}>
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center", paddingBottom: 2 }}>
          <FolderIcon sx={{ fontSize: 40, marginRight: 1 }} />
          <Typography
            variant="h4"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Pasta de Tarefas
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <ModalPasta />

          <IconButton
            aria-label="delete"
            size="large"
            sx={{ border: "3px solid black", mr: 1 }}
          >
            <DeleteIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "3px solid black",
              borderRadius: "30px",
              padding: "4px",
              ml: "auto",
            }}
          >
            <SearchIcon
              sx={{
                fontSize: "200%",
                marginLeft: 1,
                color: "action.active",
                mr: 1,
                my: 0.5,
              }}
            />
            <Input
              placeholder="Pesquisar"
              sx={{
                "&:before": { borderBottom: "none" },
                "&:after": { borderBottom: "none" },
                "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
                "&.Mui-focused:before": { borderBottom: "none" },
              }}
            />
          </Box>
        </Stack>
        
        {[{ color: "black", label: "A fazeres domesticos", date: "20/12/2020" },
          { color: "red", label: "Atividades de casa", date: "22/12/2022" },
          { color: "green", label: "Atividades de trabalho", date: "25/12/2025" }].map((item, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              border: "3px solid black",
              borderRadius: "20px",
              marginBottom: "5px",
              padding: "10px",
            }}
          >
            <FolderIcon sx={{ color: item.color, fontSize: 30, marginRight: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray", flexGrow: 1 }}>
              {item.label}
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <ModalEditarPasta />
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray", marginLeft: 2 }}>
                {item.date}
              </Typography>
            </Stack>
          </Stack>
        ))}
        
        <Stack
          direction="row"
          sx={{ justifyContent: "center", alignItems: "center", width: "100%", display: "flex", marginTop: "10px" }}
        >
          <Pagination sx={{ ml: "auto" }} count={10} />
          <Button
            variant="outlined"
            color="black"
            sx={{ border: "3px solid black", borderRadius: "30px", justifyItems: "center", textTransform: "none", ml: "auto" }}
            startIcon={<NoteAddIcon />}
            onClick={() => navigate('/tarefas')}
          >
            Lista de Tarefas
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
