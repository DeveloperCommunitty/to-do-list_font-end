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
import React, { useState } from "react";
import { useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskStatusMutation } from "../../server/api";

export default function SimplePaper() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(false); // Estado para controlar o filtro

  const { data, isLoading, isError, error } = useGetTasksQuery({
    page: currentPage,
  });

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const updateTaskStatus = useUpdateTaskStatusMutation();

  const handleDoneTask = async (taskId) => {
    const statusNow = !status;
    await updateTaskStatus.mutateAsync({ id: taskId, status: statusNow });
    setStatus(statusNow);
  };

  const deleteTask = useDeleteTaskMutation();

  const handleDeleteTask = async (taskId) => {
    await deleteTask.mutateAsync({ id: taskId });
  };

  // Função para alternar o filtro de tarefas completadas
  const handleFilterCompleteds = () => {
    setFilterCompleted(!filterCompleted);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar tarefas: {error.message}</div>;
  }

  const tasks = data?.data || [];
  const totalPages = data?.totalPage || 1;

  // Filtrar tarefas com base no status (completadas ou não)
  const filteredTasks = filterCompleted
    ? tasks.filter((task) => task.done === true) // Filtra tarefas completadas
    : tasks; // Mostra todas as tarefas

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

          {/* Botão para filtrar tarefas completadas */}
          <IconButton
            aria-label="done"
            size="large"
            sx={{ border: "3px solid black", mr: 1 }}
            onClick={handleFilterCompleteds}
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
          {filteredTasks.map((task) => (
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
                  cursor: "pointer",
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
                  aria-label="done"
                  size="mediun"
                  sx={{ border: "2px solid black", ml: "auto" }}
                  onClick={() => handleDoneTask(task.id)}
                >
                  <DoneIcon />
                </IconButton>

                <ModalEditar taskId={task.id} />

                <IconButton
                  aria-label="delete"
                  size="mediun"
                  sx={{ border: "2px solid black", ml: 1 }}
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>

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
                  {task.createdAt.split("T")[0]}
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
          <Pagination
            sx={{ ml: "auto" }}
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
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