import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import planning from '../../img/planning.jpeg';
import design from '../../img/design.jpeg';
import service from '../../img/service.jpeg';
import process2 from '../../img/process2.jpeg';
import './MainContent.css';

const useStyles = makeStyles(theme => ({
  content: {
    fontSize: '1.2rem',
    textAlign: 'justify'
  },
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    '&:hover': {
      background: 'black',
    },
  },
  btn: {
    color: 'yellow',
    border: '1px solid yellow',
  },
  imgText: {
    color: '#457b9d',
    border: '1px solid white',
    width: '100%',
    textAlign: 'right',
    paddingRight: '10px',
    zIndex: '-1',
    fontSize: '2rem',
    padding: '90px',
  },
}));
const imageStyle = { width: '100%', height: '30rem' }
const MainContent = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={6} item>
        <div className='main'>
            <img
              style={imageStyle}
              src={process2}
              alt=''
            />
          </div>
        </Grid>

        <Grid md={6} item>
          <div className={classes.container} id="hero">
            <Typography variant='h2'>The Process</Typography>
            <p className={classes.content}>
            Before the start of any project with us , we will agree a building programme, specification and detailed costs overview. We will do everything to ensure that projects will be delivered on time and within the allocated budget.
            </p>
            {/* <Button variant='outlined' className={classes.btn}>
              Read More
            </Button> */}
          </div>
        </Grid>
      </Grid>
      {/* Container 2 */}
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={6} item>
          <div className={classes.container} id="service">
            <Typography variant='h2'>Customer Service</Typography>
            <p className={classes.content}>
            We constantly thrive for excellent relationships with our clients, some which we have had for multiple generations. There is no task too small and we are always here to listen to your requirements.
 Our after-sales team are on hand to help with any issues when settling in to your new
 home. All our clients are presented with a comprehensive handover pack, which includes a full specification for their home, together with any warranties for the building and its appliances.
            </p>
            {/* <Button className={classes.btn} variant='outlined' color='primary'>
              Read More
            </Button> */}
          </div>
        </Grid>

        <Grid md={6} item>
          <div className='main'>
            <img
              style={imageStyle}
              src={service}
              alt=''
            />
          </div>
        </Grid>
      </Grid>

      {/* additional containers */}
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={6} item>
        <div className='main'>
            <img
              style={imageStyle}
              src={planning}
              alt=''
            />
          </div>
        </Grid>

        <Grid md={6} item>
          <div className={classes.container} id="hero">
            <Typography variant='h2'>Planning</Typography>
            <p className={classes.content}>
            We are experienced in working with Local Authorities and community stakeholders to maximise our chances of obtaining planning permission including Conservation Areas and Green Belt Land. We can assist with a range of property requirements including single plots and multi-unit developments.
            </p>
            {/* <Button variant='outlined' className={classes.btn}>
              Read More
            </Button> */}
          </div>
        </Grid>
      </Grid>
      {/* Container 2 */}
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={6} item>
          <div className={classes.container}>
            <Typography variant='h2'>Interior Design</Typography>
            <p className={classes.content}>
            3D Engineering Services offers an in-house architectural and interior design team who will listen to your requirements and provide illustrations to show how your new home could look. Our services include bedroom and bathroom design, bespoke furniture and kitchens, fittings, skirting and more.
            </p>
            {/* <Button className={classes.btn} variant='outlined' color='primary'>
              Read More
            </Button> */}
          </div>
        </Grid>

        <Grid md={6} item>
          <div className='main'>
            <img
              style={imageStyle}
              src={design}
              alt=''
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainContent;
