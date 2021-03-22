import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ProfileInfo from '../profileInfo'

const useStyles = makeStyles((theme) => ({
  navigationBar: {
    backgroundColor: '#fff',
    paddingLeft: '3%',
    paddingRight: '3%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(2), 
  },
  link: {
      textDecoration: 'none',
      padding: theme.spacing(2),
      fontSize: '18px',
      color: '#1A1A1D'
  }
}));
  
function Navigation (){
    const classes = useStyles(); 
    return (
        <div className={classes.navigation}>
            <AppBar className={classes.navigationBar} position="static" elevation={1}>
                <Toolbar>
                    <Grid 
                        justify="space-between"
                        container 
                        spacing={24}
                    >
                        <Grid item>
                            <Typography variant="h6" className={classes.title}>
                                <Link
                                    to="/"
                                    className={classes.link} 
                                    style={{ textDecoration: 'none' }} 
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about" 
                                    className={classes.link}
                                    style={{ textDecoration: 'none' }} 
                                >
                                    About
                                </Link>
                            </Typography>
                        </Grid>

                        <Grid item>
                            <ProfileInfo />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
} 
  
export default Navigation; 