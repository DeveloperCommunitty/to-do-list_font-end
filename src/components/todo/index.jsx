import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import FolderIcon from "@mui/icons-material/Folder";
import ModalTarefa from "../modal_tarefa";
import ModalEditar from "../modal_editar";
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";

const tasks = [
  { id: 1, title: "Lavar a Louça", date: "20/12/2020" },
  { id: 2, title: "Limpar a casa", date: "23/12/2023" },
  { id: 3, title: "Ajeitar as malas", date: "25/12/2025" },
];

export default function SimplePaper() {
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
        <Typography
          variant="h4"
          style={{ textAlign: "center", fontWeight: "bold", paddingBottom: 20 }}
        >
          Tarefas
        </Typography>
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
          <ModalTarefa />

          <IconButton
            aria-label="delete"
            size="large"
            sx={{ border: "3px solid black", mr: 1 }}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton
            aria-label="delete"
            size="large"
            sx={{ border: "3px solid black", mr: 1 }}
          >
            <DoneIcon />
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

        <Grid container spacing={2}>
          {tasks.map((task) => (
            <Grid item xs={12} key={task.id}>
              <Stack
                direction="row"
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  border: "3px solid black",
                  borderRadius: "20px",
                  marginBottom: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  sx={{ margin: "10px" }}
                  color="gray"
                >
                  {task.title}
                </Typography>

                <IconButton
                  aria-label="delete"
                  size="mediun"
                  sx={{ border: "2px solid black", ml: "auto" }}
                >
                  <DoneIcon />
                </IconButton>

                <ModalEditar />

                <Typography
                  variant="h6"
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    ml: "auto",
                  }}
                  sx={{ margin: "10px" }}
                  color="gray"
                >
                  {task.date}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            display: "flex",
            marginTop: "10px",
          }}
        >
          <Pagination sx={{ ml: "auto" }} count={10} />
          <Button
            variant="outlined"
            color="black"
            sx={{
              border: "3px solid black",
              borderRadius: "30px",
              justifyItems: "center",
              textTransform: "none",
              ml: "auto",
            }}
            startIcon={<FolderIcon />}
            onClick={() => navigate('/pasta')}
          >
            Pasta de tarefas
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
