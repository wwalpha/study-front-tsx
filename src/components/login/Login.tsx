import * as React from 'react';
import { LoginProps } from 'typings';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Login extends React.Component<LoginProps, any> {

  render() {
    return (
      <Card >
        <CardContent>
          <Grid container >
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                margin="normal"
                required
                fullWidth
              />
            </Grid>

          </Grid>
          <Button
            color="primary"
            style={{ float: 'right' }}
            size="small"
          >
            Forgot your password?
          </Button>
          <Grid
            container
            spacing={16}
          >
            <Grid item xs={12} >
              <Button variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="subheading">
                Don't you have an account?
              </Typography>
            </Grid>
            <Grid item xs={12} >
              <Button variant="contained" color="secondary" fullWidth>
                Register for free!
              </Button>
            </Grid>
          </Grid>
        </CardContent>

      </Card>
    );
  }
}

export default Login;
