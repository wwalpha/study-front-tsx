import * as React from 'react';
import { RegisterProps } from 'typings';
import { StyleRules, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class Register extends React.Component<RegisterProps & WithStyles<StyleRules>, any> {

  render() {
    const { classes } = this.props;

    return (
      <Card classes={{ root: classes.root }}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Typography align="center" variant="headline">
                Register your account
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Name"
                margin="normal"
                required
                fullWidth
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} classes={{ item: classes.createBtn }}>
              <Button variant="contained" color="primary" fullWidth>
                CREATE ACCOUNT
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="body2">
                Already have an account? <Link className={classes.loginLink} to="/">Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card >
    );
  }
}

const styles: StyleRules = {
  root: {
    maxWidth: '496px',
    width: 'calc(100% - 3rem)',
  },
  cardContent: {
    padding: '1rem',
  },
  createBtn: {
    marginTop: '2rem',
  },
  loginLink: {
    textDecoration: 'none',
    color: 'rgb(25, 118, 210)'
  }
};

export default withStyles(styles)<RegisterProps>(Register);
