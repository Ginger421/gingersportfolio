import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Resume from "./Resume.pdf"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar({pageState, setPageState}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenAbout = () => {
    setPageState({...pageState, about: true, portfolio: false, contact: false})
  }

  const handleOpenPortfolio = () => {
    setPageState({...pageState, portfolio: true, about: false, contact: false})
  }
  const handleOpenContact = () => {
    setPageState({...pageState, contact: true, about: false, portfolio: false})
  }

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Virginia Owen
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
 
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Portfolio</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Resume</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
        
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Virginia Owen
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
                onClick={handleOpenAbout}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               About 
              </Button>

              <Button
                onClick={handleOpenPortfolio}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Portfolio
              </Button>

              <a href={Resume} target="_blank">
              <Button
                onClick={handleOpenPortfolio}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Resume
              </Button>
              </a>

              <Button
                onClick={handleOpenContact}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Contact 
              </Button>
            
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
