import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
const AdminHeader = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ADMIN page 
          </Typography>
          <Button color="inherit">
            <Link to={"/admin"}>Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/products"}>Products</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/add-category"}>Add Category</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/add-product"}>Add Product</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/messages"}>Messages</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/categories"}>Categories</Link>
          </Button>
          {/* <Button color="inherit">
            <Link to={"/admin/users"}>Users</Link>
          </Button> */}
         
        </Toolbar>
      </AppBar>
    </Box>
      
    </>
  )
}

export default AdminHeader