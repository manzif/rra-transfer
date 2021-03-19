import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navigation: {

    },
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
  buttonProfile: {
    padding: theme.spacing(2),
    fontSize: '20px'
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
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef(null);

        const handleToggle = () => {
            setOpen((prevOpen) => !prevOpen);
        };

        const handleClose = (event) => {
            if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
            }

            setOpen(false);
        };

        function handleListKeyDown(event) {
            if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
            }
        }

        // return focus to the button when we transitioned from !open -> open
        const prevOpen = React.useRef(open);
        React.useEffect(() => {
            if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
            }

            prevOpen.current = open;
        }, [open]);
    return (
        <div className={classes.navigation}>
            <AppBar className={classes.navigationBar} position="static" elevation={1}>
                <Toolbar>
                    <Grid 
                        justify="space-between" // Add it here :)
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
                            <div className={classes.buttonProfile}>
                                <Button
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                    endIcon={<ArrowDropDownIcon />}
                                >
                                Peter
                                </Button>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                    </Grow>
                                )}
                                </Popper>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
} 
  
export default Navigation; 