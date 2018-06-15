import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Dispatch, connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { ISignIn as Defs } from 'typings';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { FormErrors } from 'redux-form';
import { Auth } from 'aws-amplify';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'reduxform/index';
import * as AuthActions from 'src/actions/auth';

class SignIn extends React.Component<Defs.Props, any> {

  signIn = (values: Defs.Form) => {
    const { signInSuccess, signInFailure } = this.props.actions;
    const inputs = values.toJS();

    Auth.signIn(inputs.username, inputs.password)
      .then(user => signInSuccess(user))
      .catch(err => signInFailure(err))
  }

  render() {
    const { classes, handleSubmit, match } = this.props;

    return (
      <form onSubmit={handleSubmit(this.signIn)} autoComplete="false">
        <Card classes={{ root: classes.root }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography align="center" variant="headline">
                  Log into your account
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="username"
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
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              color="primary"
              style={{ float: 'right' }}
              size="small"
              classes={{
                label: classes.forget,
              }}
              component={(props: any) => <Link to={`${match.path}/forgot`} {...props} />}
            >
              Forgot your password?
            </Button>
            <Grid
              container
              spacing={16}
            >
              <Grid item xs={12} >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  component={(props: any) => <Link to="/" {...props} />}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} classes={{ item: classes.register }}>
                <Typography align="center" variant="subheading">
                  Don't you have an account?
                </Typography>
              </Grid>
              <Grid item xs={12} >
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  component={(props: any) => <Link to={`${match.path}/signup`} {...props} />}
                >
                  Register for free!
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    );
  }
}

const styles: StyleRules = {
  root: {
    maxWidth: '496px',
    width: 'calc(100% - 48px)',
  },
  cardContent: {
    padding: '2rem',
  },
  forget: {
    fontSize: '0.5rem',
  },
  register: {
    paddingBottom: '0 !important',
  },
  headerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// 入力値チェック
const validate = (values: Defs.Form, props: Defs.Props): Defs.FormErrors => {
  const errors: Defs.FormErrors = {};

  return errors;
};

// フォーム定義
const signIn = reduxForm({
  form: 'signIn',
  validate,
})(withStyles(styles)(withRouter(SignIn)));

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(AuthActions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(signIn);
