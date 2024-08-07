import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import "./App.css"

const Layout = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Book Store
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Book List
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Layout;
