import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LoginComponent from '../component/login'

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    backgroundColor: '#FFA500',
    height: '100vh',
    [theme.breakpoints.down("sm")]: {
      backgroundColor: '#FFA500'
    }
  }
}));

function Login() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box className={classes.loginContainer}>
        <LoginComponent />
      </Box>
    </div>
  );
}

export default Login;
