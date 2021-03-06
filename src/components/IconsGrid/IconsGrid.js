import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Icon} from '@iconify/react';
import carpentrySaw from '@iconify-icons/noto/carpentry-saw';
import plumberIcon from '@iconify-icons/map/plumber';
import baselineElectricalServices from '@iconify-icons/ic/baseline-electrical-services';
import networkSettingsLine from '@iconify-icons/clarity/network-settings-line';

const useStyles = makeStyles(theme => ({
  iconsGridContainer: {
    color: 'yellow',
    background: '#303030',
    paddingTop: '20px',
  },

  card_1: {
    marginTop: '-70px',
    height: '150px',
    marginBottom: '20px',
    background: '#264653',
    textAlign: 'center',
    '&:hover': {
      background: '#303030',
    },
  },

  card_2_3: {
    textAlign: 'center',
    marginBottom: '20px',
    background: '#264653',
    '&:hover': {
      background: '#303030',
    },
  },

  icons: {
    fontSize: '4rem',
    textAlign: 'center',
    marginRight: '10px',
    marginLeft: '10px',
  },

  icon_1: {
    fontSize: '4rem',
    textAlign: 'center',
    marginRight: '80px',
    marginLeft: '100px',
    color: 'yellow',
  },
}));

const IconsGrid = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.iconsGridContainer}
        container
        direction='row'
        justify='space-evenly'>
        <Grid item xs={12} md={2}>
          <Card elevation={0} className={classes.card_1}>
            <CardContent>
              <div>
                <div>
                <Icon icon={plumberIcon} color="#52FF33" className={classes.icon_1}/>
                  {/* <GiPayMoney className={classes.icon_1} /> */}
                </div>
                <div>
                  <h3>Design and Build Plumbing</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card className={classes.card_2_3}>
            <CardContent>
              <div className={classes.card_2_3_parent}>
                <div>
                <Icon icon={carpentrySaw} className={classes.icons}/>
                  {/* <GiSpellBook className={classes.icons} /> */}
                </div>
                <div>
                  <h3> Carpentry </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card  className={classes.card_2_3}>
            <CardContent>
              <div className={classes.card_2_3_parent}>
                <div>
                <Icon icon={baselineElectricalServices} className={classes.icons} color="#ebdb34"/>
                  {/* <baselineElectricalServices className={classes.icons} color="#ebdb34"/> */}
                </div>
                <div>
                  <h3>Block paving and Driveways Electrical</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card className={classes.card_2_3}>
            <CardContent>
              <div className={classes.card_2_3_parent}>
                <div>
                  {/* <FaUserGraduate className={classes.icons} /> */}
                  <Icon icon={networkSettingsLine} color="#9ef542" className={classes.icons}/>
                </div>
                <div>
                  <h3>Network and security</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default IconsGrid;
