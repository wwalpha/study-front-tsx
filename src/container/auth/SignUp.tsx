import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Dispatch, connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-dom';
import { TextField } from 'reduxform/index';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ISignUp } from 'typings';
import * as AuthActions from 'src/actions/auth';

class SignUp extends React.Component<ISignUp.Props, any> {

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
                name="username"
                label="Name"
                margin="dense"
                required
                fullWidth
              />
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
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                margin="dense"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
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
                component={(props: any) => <Link to="/confirm" {...props} />}
              >
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
    padding: '2rem',
  },
  createBtn: {
    marginTop: '1rem',
  },
  loginLink: {
    textDecoration: 'none',
    color: 'rgb(25, 118, 210)',
  },
};

// 入力値チェック
const validate = (values: ISignUp.Form, props: ISignUp.Props): ISignUp.FormErrors => {
  const errors: ISignUp.FormErrors = {};

  return errors;
};

// フォーム定義
const signUp: ISignUp.ReduxForm = reduxForm({
  validate,
  form: 'signUp',
})(withStyles(styles)(SignUp));

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(AuthActions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(signUp);
