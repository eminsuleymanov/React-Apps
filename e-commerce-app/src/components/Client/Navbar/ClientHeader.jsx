import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
const ClientHeader = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home Page Products
        </Typography>
        <Button color="inherit">
          <Link to={""}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/products"}>Products</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/basket"}>Basket</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/contact-us"}>Contact Us</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/login"}>Login</Link>
        </Button>
        <Button color="inherit">
          <Link to={"/register"}>Register</Link>
        </Button>
        
       
      </Toolbar>
    </AppBar>
  </Box>
    
  </>
  )
}

export default ClientHeader