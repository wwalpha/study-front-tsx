import * as React from 'react';
import { IForgotRenew as Defs } from 'typings';
import { Link } from 'react-router-dom';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'reduxform/index';
import { FormErrors, reduxForm } from 'redux-form';

class ForgotRenew extends React.Component<Defs.Props, any> {

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="false">
        <Card classes={{ root: classes.root }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Typography align="center" variant="headline">
                  Forgot Password
              </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="code"
                  label="Verification Code"
                  margin="dense"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="New Password"
                  margin="dense"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} classes={{ item: classes.createBtn }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component={(props: any) => <Link to="/" {...props} />}
                >
                  Submit
              </Button>
              </Grid>
              <Grid item xs={12} classes={{ item: classes.returnlink }}>
                <Typography align="left" variant="body2">
                  <Link className={classes.loginLink} to="/">Back to Signin</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card >
      </form>
    );
  }
}

const styles: StyleRules = {
  root: {
    maxWidth: '496px',
    width: 'calc(100% - 3rem)',
  },
  cardContent: {
    padding: '2rem',
  },
  createBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  returnlink: {
    marginTop: '1rem',
  },
  loginLink: {
    textDecoration: 'none',
    color: 'rgb(25, 118, 210)',
  },
};

// 入力値チェック
const validate = (values: Defs.Form, props: Defs.Props): Defs.FormErrors => {
  const errors: FormErrors<Defs.Form> = {};

  return errors;
};

// フォーム定義
const forgotRenew = reduxForm({
  form: 'forgotRenew',
  validate,
})(withStyles(styles)(ForgotRenew))

export default forgotRenew;

