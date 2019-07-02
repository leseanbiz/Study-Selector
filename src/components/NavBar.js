import React from 'react';
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const NavBar = () => {
 return (
  <div>
   <AppBar position="static">
    <Toolbar color="inherit">
     <Typography color="inherit">
      React & Material-UI Sample Application
     </Typography>
    </Toolbar>
   </AppBar>
  </div>
 )
}

export default NavBar;