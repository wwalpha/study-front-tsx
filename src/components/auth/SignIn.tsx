import * as React from 'react';
import { Props } from 'typings';
import { Link } from 'react-router-dom';
import { FormErrors } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';
import { StyleRules, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'reduxform/index';
import withRoot from '../../withRoot';
import * as actions from 'src/actions/auth';

class SignIn extends React.Component<Props.SignInFormProps & WithStyles<StyleRules>, any> {

  signIn = (data: Props.SignInProps) => {

  }

  render() {
    const { classes, handleSubmit } = this.props;

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
                  id="email"
                  label="Email"
                  margin="dense"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
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
              component={(props: any) => <Link to="/forgot" {...props} />}
            >
              Forgot your password?
            </Button>
            <Grid
              container
              spacing={16}
            >
              <Grid item xs={12} >
                <Button variant="contained" color="primary" fullWidth type="submit">
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
                  component={(props: any) => <Link to="/register" {...props} />}
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

// 入力値チェック
const validate = (values: Props.SignInProps, props: Props.SignInFormProps): FormErrors<Props.SignInProps> => {
  const errors: FormErrors<Props.SignInProps> = {};

  return errors;
};

// フォーム定義
const signIn = reduxForm({
  form: 'signIn',
  validate,
})(SignIn);

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

export default withRoot(withStyles(styles)<Props.SignInFormProps>(signIn));
