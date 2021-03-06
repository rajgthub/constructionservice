import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import DrawerComponent from './DrawerComponent/DrawerComponent';
import { GiBookAura } from 'react-icons/gi';
import { FcHome } from 'react-icons/fc';
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosConstruct } from "react-icons/io";

import { MdContacts } from 'react-icons/md';

const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: '1.9rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
  },
  acount: {
    marginLeft: 'auto',
    '&:hover': {
      background: 'purple',
    },
  },
  tabsContainer: {
    marginLeft: 'auto',
  },
  iconLogo: {
    color: 'yellow',
    fontSize: '3rem',
  },
  icons: {
    fontSize: '1.4rem',
  },
}));

const Navbar = () => {
  //Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  //Functions
  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    setValue(newValue);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar elevation={0} color='primary'>
        <Toolbar>
          <Typography>
            <GiBookAura className={classes.iconLogo} />
          </Typography>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor='secondary'
                value={value}>
                <Tab
                  disableRipple
                  FcHome
                  icon={<FcHome className={classes.icons} />}
                  label='Home'
                  component="a"
                  href="#home"
                  
                />
                <Tab
                  disableRipple
                  icon={<BsFillPeopleFill className={classes.icons} />}
                  label='About Us'
                  component="a"
                  href="#aboutus"
                />
                <Tab
                  disableRipple
                  icon={<IoIosConstruct className={classes.icons} />}
                  label='Service'
                  component="a"
                  href="#service"
                />

                <Tab
                  disableRipple
                  icon={<MdContacts className={classes.icons} />}
                  label='Contact'
                  component="a"
                  href="#contact"
                />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Menu */}
      <Menu
        style={{ marginTop: '50px' }}
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
        <MenuItem onClick={handleCloseMenu}>About</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Service</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Contact</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
