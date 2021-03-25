import { makeStyles } from '@material-ui/core/styles';
import background from '../assets/background.jpg'

const loginStyles = makeStyles((theme) => ({
    card: {
        [theme.breakpoints.down("sm")]: {
            height: '100vh',
            marginBottom: '0'
        }
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        height: '350px',
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("sm")]: {
            height: '50vh'
        }
    },
    cardLogin : {
        margin: '0 10%',
        border: "none",
        boxShadow: "none",
        [theme.breakpoints.down("sm")]: {
            margin: '0 5%',
        }
    },
    buttonLogin: {
        borderRadius: 25,
        marginTop: '30px',
        [theme.breakpoints.down("sm")]: {
            marginTop: '20px',
        }
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
           paddingBottom: theme.spacing(2)
        }
    },
}));

export default loginStyles