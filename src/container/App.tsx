import * as React from 'react';
import { IApp, IState, Models } from 'typings';
import { StyleRulesCallback, withStyles, Theme, Grid } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect, withRouter, Route } from 'react-router';

class App extends React.Component<IApp.Props, any> {
  render() {
    const { classes, isLoggedIn } = this.props;

    // if (!isLoggedIn) {
    //   return (
    //     <Redirect to="/auth" />
    //   )
    // }

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
        <Route children={this.props.children} />
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

export default connect<IApp.StateFromProps, void, void>(
  mapStateToProps,
)(withStyles(styles)(withRouter(App)));
