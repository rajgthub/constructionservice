import React from 'react';
import {
  Grid,
  ListItem,
  List,
  ListItemAvatar,
  makeStyles
} from '@material-ui/core';

import {
  FcPhone,
  FcOnlineSupport
} from 'react-icons/fc';
import './Footer.css';
import { GiBookAura } from 'react-icons/gi';

const useStyles = makeStyles(theme => ({
  footer_icons: {
    fontSize: '2rem',
  },
  text: {
    fontSize: '1.1rem',
  },
  logo: {
    fontSize: '8rem',
    color: 'yellow',
  },
}));

const FooterComponent = () => {
  const classes = useStyles();
  return (
    <div className='footer'>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'>
          <Grid item sm={12} xs={12} md={4}>
            <div className='childe1__container'>
              <div>
                <GiBookAura className={classes.logo} />
              </div>
            </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='childe2__container'>
              <div className='childe2__title'>
                <List dense>
                  <ListItem>
                    <ListItemAvatar>
                      <FcOnlineSupport className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>24/7 Support</ListItem>
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <FcPhone className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>+44******</ListItem>
                  </ListItem>
                </List>
              </div>
            </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='child3__container' id="contact">
              <div className='child3__title'>
                <h1>Address one</h1>
                <p className={classes.text}>
                  ADDRESS
                </p>
              </div>
            </div>
           
          </Grid>
        </Grid>
    </div>
  );
};

export default FooterComponent;
