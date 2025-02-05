import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from "../../assets/Logo.png";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static" style={{ background: "#6A8191" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 40,
              height: 40,
              marginRight: 2,
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>

          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: 90,
              height: 90,
              marginRight: 2,
            }}
          />
          
          <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 'auto' }}>
            Sair
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
