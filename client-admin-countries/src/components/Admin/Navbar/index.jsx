import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
const AdminNavbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ADMIN page Products
          </Typography>
          <Button color="inherit">
            <Link to={"/admin"}>Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/countries"}>Countries</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/add-country"}>Add Country</Link>
          </Button>
         
        </Toolbar>
      </AppBar>
    </Box>
      
    </>
  )
}

export default AdminNavbar