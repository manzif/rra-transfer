import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import { login } from "../redux/actions/auth";
import loginStyle from "./loginStyle";

function Login() {
  const classes = loginStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.logging);
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogin = async () => {
    await dispatch(login(email, password));
    return history.push("/about");
  };
  return (
    <div>
      <Grid
        container
        justify="center"
        spacing={0}
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={6} md={9}>
          <Card className={classes.card}>
            <Grid container>
              <Grid item xs={12} sm={12} md={3}>
                <Box className={classes.hero}></Box>
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
                        <TextField
                          id="outlined-basic"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          fullWidth
                          placeholder="Email"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Password
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        placeholder="password"
                        variant="outlined"
                        size="small"
                      />
                      <Button
                        onClick={handleLogin}
                        variant="outlined"
                        color="primary"
                        disabled={loading}
                        startIcon={<ArrowForwardSharpIcon />}
                        fullWidth
                        className={classes.buttonLogin}
                      >
                        {loading && <CircularProgress size={14} />}
                        {!loading && "login"}
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
