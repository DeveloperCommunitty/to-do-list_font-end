// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from "../../assets/Logo.png";




function ResponsiveAppBarLogin() {


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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBarLogin;
