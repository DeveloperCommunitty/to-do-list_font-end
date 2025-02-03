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


export default function AdminPage() {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 800,
        height: 610,
        border:"2px solid",
        borderRadius:"20px",
        alignItems: 'center',
        padding: '50px',
      },
    }}>
      
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
                <TableCell align="center">Selecionar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {['Victor Daniel', 'Lucas Moura', 'Pedro Sales', 'João Paulo'].map((name, index) => (
                <TableRow key={index}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{`${name.toLowerCase().replace(' ', '')}@gmail.com`}</TableCell>
                  <TableCell>{`0${index + 1}/0${index + 1}/2024`}</TableCell>
                  <TableCell align="center">
                    <Checkbox />
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
