import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DrawerComponent = () => {
  const useStyles = makeStyles(theme => ({
    drawerContainer: {
      width:"30%"
    },
    iconButtonContainer: {
      marginLeft: 'auto',
      color: 'white',
    },

    menuIconToggle: {
      fontSize: '3rem',
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor='right'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
        <List>
          <ListItem divider button component="a" href="#home" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> Home</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button component="a" href="#about" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> About</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button component="a" href="#service" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> Service</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button component="a" href="#contact" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> Contact</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
