import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { deleteUser, getUserQuery } from "../../server/api";


export default function AdminPage() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const pageSize = 5;

  const { data, isLoading, isError } = getUserQuery(page, pageSize);
  
  useEffect(() => {
    console.log(data?.totalPage)
    if (data && data.data) {
      setUsers(data.data);
    }
  }, [data]);

  const filteredUsers = users
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (isError) {
    return <Typography>Erro ao carregar usuários</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 800,
          height: 610,
          border: "2px solid",
          borderRadius: "20px",
          alignItems: "center",
          padding: "50px",
        },
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Lista de Usuários
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Conta criada em</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => handleDeleteUser(user.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    Nenhum usuário encontrado
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Pagination
            count={data?.totalPage}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
          />
        </Box>
      </Paper>
    </Box>
  );
}
