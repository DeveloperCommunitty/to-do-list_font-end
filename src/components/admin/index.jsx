import React from 'react';
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
  Checkbox,
  Pagination,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { getUserQuery, useDeleteUserMutation } from '../../server/api';

export default function AdminPage() {
  const { data: users, isLoading, isError } = getUserQuery();

  const deleteUserMutation = useDeleteUserMutation();

  const handleDeleteUser = async(userId) => {
    await deleteUserMutation.mutate(userId);
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
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 610,
          border: '2px solid',
          borderRadius: '20px',
          alignItems: 'center',
          padding: '50px',
        },
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Lista de Usuários
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar..."
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
          <IconButton sx={{ marginLeft: 2 }}>
            <DeleteIcon />
          </IconButton>
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
              {users.map((user) => (
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Pagination count={68} shape="rounded" />
        </Box>
      </Paper>
    </Box>
  );
}