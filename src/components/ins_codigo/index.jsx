import React, { useState } from "react";
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
import { useGetPlaylistsQuery, useDeletePlaylistMutation } from "../../server/api";

export default function PaperPasta() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError, error } = useGetPlaylistsQuery({
    page: currentPage,
  });

  const deletePlaylist = useDeletePlaylistMutation();

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleDeletePlaylist = async (playlistId) => {
    await deletePlaylist.mutateAsync(playlistId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return <div>Carregando playlists...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar playlists: {error.message}</div>;
  }

  const playlists = data?.data || [];
  const totalPages = data?.totalPages || 1;

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                "&:before": { borderBottom: "none" },
                "&:after": { borderBottom: "none" },
                "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
                "&.Mui-focused:before": { borderBottom: "none" },
              }}
            />
          </Box>
        </Stack>

        {/* Lista de playlists */}
        {filteredPlaylists.map((playlist) => (
          <Stack
            key={playlist.id}
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
            <FolderIcon sx={{ fontSize: 30, marginRight: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray", flexGrow: 1 }}>
              {playlist.name}
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Button
                variant="outlined"
                color="black"
                sx={{ border: "3px solid black", borderRadius: "30px", textTransform: "none" }}
                onClick={() => navigate(`/playlist/${playlist.id}/tasks`)}
              >
                Ver Tarefas
              </Button>
              <ModalEditarPasta playlistId={playlist.id} />

              <IconButton
                aria-label="delete"
                size="medium"
                sx={{ border: "2px solid black", ml: 1 }}
                onClick={() => handleDeletePlaylist(playlist.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Stack>
        ))}

        <Stack
          direction="row"
          sx={{ justifyContent: "center", alignItems: "center", width: "100%", display: "flex", marginTop: "10px" }}
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