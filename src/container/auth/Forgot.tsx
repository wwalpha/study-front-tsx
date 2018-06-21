import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'reduxform/index';
import { reduxForm } from 'redux-form';
import { Props, Form, FormErrors } from './Forgot.d';

class Forgot extends React.Component<Props, any> {

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
                  name="email"
                  label="Email"
                  margin="dense"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} classes={{ item: classes.createBtn }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component={(props: any) => <Link to="forgotrenew" {...props} />}>
                  Send Code
              </Button>
              </Grid>
              <Grid item xs={12} classes={{ item: classes.returnlink }}>
                <Typography align="left" variant="body2">
                  <Link className={classes.loginLink} to=".">Back to Sign In</Link>
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
const validate = (values: Form, props: Props): FormErrors => {
  const errors: FormErrors = {};

  return errors;
};

// フォーム定義
const forgot = reduxForm({
  form: 'forgot',
  validate,
})(withStyles(styles)(Forgot))

export default forgot;
