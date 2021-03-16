import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Login from './component/login'

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    backgroundColor: '#FFA500',
    height: '100vh'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box className={classes.loginContainer}>
        <Login />
      </Box>
    </div>
  );
}

export default App;
