import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Dispatch, connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-dom';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'reduxform/index';
import * as AuthActions from 'src/actions/auth';
import { Props, Form, FormErrors } from './Confirm.d';


class Confirm extends React.Component<Props, any> {

  render() {
    const { classes } = this.props;

    return (
      <Card classes={{ root: classes.root }}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Typography align="center" variant="headline">
                Confirm Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" variant="body1">
                wwalpha@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="code"
                label="Verification Code "
                margin="dense"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6} classes={{ item: classes.createBtn }}>
              <Button variant="contained" color="primary" component={(props: any) => <Link to="." {...props} />}>
                Confirm
              </Button>
            </Grid>
            <Grid item xs={6} classes={{ item: classes.createBtn }}>
              <Button variant="contained" color="primary">
                Resend Code
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" variant="body2">
                <Link className={classes.loginLink} to=".">Back to Signin</Link>
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
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  loginLink: {
    textDecoration: 'none',
    color: 'rgb(25, 118, 210)',
  },
};

// 入力値チェック
const validate = (values: Form, props: Props) => {
  const errors: FormErrors = {};

  return errors;
};

// フォーム定義
const confirm = reduxForm({
  form: 'confirm',
  validate,
})(withStyles(styles)(Confirm));

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(AuthActions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(confirm);
