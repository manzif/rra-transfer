import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import background from '../assets/background.jpg'

const useStyles = makeStyles((theme) => ({
    card: {
        // margin: '15% 20%',
    },
    media: {
        width: '100%'
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        height: '350px',
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    cardLogin : {
        margin: '0 10%',
        border: "none",
        boxShadow: "none",
    },
    buttonLogin: {
        borderRadius: 25,
        marginTop: '30px'
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
}));


function Login() {
  const classes = useStyles();

  return (
    <div>
        <Grid 
            container 
            justify="center"   
            spacing={0}
            alignItems="center"
            style={{ minHeight: "90vh" }}
        >
            <Grid item xs={12} sm={6} md={9}>
                <Card className={classes.card}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3}>
                            <Box className={classes.hero}>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9}>
                            <Card className={classes.cardLogin}>
                                <CardContent>
                                    <Typography variant="h5" className={classes.blogTitle}>
                                        RRA Transfer Login
                                    </Typography>
                                    <form autoComplete="off">
                                        <Box mb={2}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Email
                                            </Typography>
                                            <TextField id="outlined-basic" 
                                                fullWidth 
                                                placeholder="Email" 
                                                variant="outlined" 
                                                size="small"
                                            />
                                        </Box>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Password
                                        </Typography>
                                        <TextField id="outlined-basic" 
                                            fullWidth 
                                            placeholder="password" 
                                            variant="outlined" 
                                            size="small"/>
                                        <Button 
                                            variant="outlined" 
                                            color="primary" 
                                            startIcon={<ArrowForwardSharpIcon />} 
                                            fullWidth 
                                            className={classes.buttonLogin}
                                        >
                                            Login
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}

export default Login;