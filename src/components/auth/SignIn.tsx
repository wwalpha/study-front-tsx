import * as React from 'react';
import { SignIn, IState } from 'typings';
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
import * as AuthActions from 'src/actions/auth';
import { connect, MapDispatchToProps, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';


class CSignIn extends React.Component<SignIn.FormProps & WithStyles<StyleRules>, any> {

  signIn = (data: SignIn.Props) => {

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
const validate = (values: SignIn.Props, props: SignIn.FormProps): FormErrors<SignIn.Props> => {
  const errors: FormErrors<SignIn.Props> = {};

  return errors;
};

// フォーム定義
const signIn = reduxForm({
  form: 'signIn',
  validate,
})(CSignIn);

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

const mapStateToProps = (state: IState): SignIn.StateToProps => ({
  username: state.auth.username,
});

// const mapDispatchToProps: MapDispatchToProps<{}, void> = (dispatch: Dispatch) => ({
//   actions: bindActionCreators(AuthActions, dispatch),
// });

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(MenuActions, dispatch),
//   formSet: (field, value) => dispatch(change('menubar', field, value)),
// });

export default connect<SignIn.StateProps, SignIn.DispatchProps, {}>(
  mapStateToProps,
)(SignIn);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(withStyles(styles)(menubar));


// export default withRoot(withStyles(styles)<Props.SignInFormProps>(signIn));
