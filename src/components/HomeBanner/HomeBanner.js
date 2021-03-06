import React from 'react';
import { Container, Hidden, makeStyles, Button } from '@material-ui/core';
import MainContent from '../MainContent/MainContent';
import IconsGrid from '../IconsGrid/IconsGrid';
import landing from '../../img/landing.jpeg';
const useStyles = makeStyles(theme => ({
  conatainer: {
    height: '100vh',
    background: `url(
      ${landing}
    )`,
    backgroundPosition: 'contained',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexDirection: 'column',
  },
  title: {
    fontSize: '2.5rem',
    color: '#fff1e6',
    backgroundColor: "#003049",
    opacity: 0.8,
    padding: '0.6rem',
  },
  text: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    backgroundColor: "#003049",
    opacity: 0.8,
    padding: '0.6rem',
  },
}));

const HomeBanner = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.conatainer} maxWidth={false} id="home">
        <Hidden mdDown>
          <h1 className={classes.title}>Welcome to 3D Civil Engineering Service</h1>
          <p className={classes.text}>Your Greatest Choice</p>

          {/* <Button variant='contained' color='secondary'>
            Discover more
          </Button> */}
        </Hidden>
      </div>
      <IconsGrid />
      <MainContent />
    </>
  );
};

export default HomeBanner;
