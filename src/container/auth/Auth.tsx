import * as React from 'react';
import { Route, withRouter, Switch } from 'react-router';
import { StyleRulesCallback, withStyles, Theme, Grid } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Confirm from './Confirm';
import Forgot from './Forgot';
import ForgotRenew from './ForgotRenew';
import { IState } from 'src';
import { Props, StateFromProps } from './Auth.d';

class Auth extends React.Component<Props, any> {

  componentWillMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUpdate(nextProps: Props) {
    if (nextProps.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    const { classes, children, match } = this.props;

    return (
      <Grid
        container
        spacing={8}
        alignItems="center"
        justify="center"
        classes={{
          container: classes.root,
        }}
      >
        <Switch>
          <Route exact path={`${match.path}`} component={SignIn} />
          <Route path={`${match.path}/signup`} component={SignUp} />
          <Route path={`${match.path}/confirm`} component={Confirm} />
          <Route path={`${match.path}/forgot`} component={Forgot} />
          <Route path={`${match.path}/forgotrenew`} component={ForgotRenew} />
        </Switch>
        <Route children={children} />
      </Grid>
    );
  }
}

const styles: StyleRulesCallback = (theme: Theme): StyleRules => ({
  root: {
    height: 'calc(100vh - 16px)',
    backgroundColor: theme.palette.grey['300'],
  },
});

const mapStateToProps = (state: IState) => ({
  isLoggedIn: state.get('auth').isLoggedIn,
});

export default connect<StateFromProps, void, void>(
  mapStateToProps,
)(withStyles(styles)(withRouter(Auth)));
