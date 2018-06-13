import * as React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router';
import { IAuth } from 'typings';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Confirm from './Confirm';
import Forgot from './Forgot';
import ForgotRenew from './ForgotRenew';
import { StyleRulesCallback, withStyles, Theme, Grid } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

class Auth extends React.Component<IAuth.Props & RouteComponentProps<any>, any> {

  render() {
    const { classes, location, match } = this.props;
    console.log(location, match);

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
          <Route exact path="/" component={SignIn} />
          <Route path="signup" component={SignUp} />
          <Route path="/confirm" component={Confirm} />
          {/* <Route path={`${match.url}forgot`} component={Forgot} />
          <Route path={`${match.url}forgotrenew`} component={ForgotRenew} /> */} */}
        </Switch>
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

export default withStyles(styles)(withRouter<IAuth.Props>(Auth));
