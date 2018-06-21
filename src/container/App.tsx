import * as React from 'react';
import { IState } from 'src';
import { StyleRulesCallback, withStyles, Theme, Grid } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect, withRouter, Route } from 'react-router';
import { Props, StateFromProps } from './App.d';

class App extends React.Component<Props, any> {
  render() {
    const { classes, isLoggedIn } = this.props;

    // if (!isLoggedIn) {
    //   return (
    //     <Redirect to="/auth" />
    //   )
    // }

    return (
      <React.Fragment>
        <Route children={this.props.children} />
      </React.Fragment>
    );
  }
}

const styles: StyleRulesCallback = (theme: Theme): StyleRules => ({
  root: {
    backgroundColor: theme.palette.grey['300'],
    minHeight: '100vh'
  },
});

const mapStateToProps = (state: IState) => ({
  isLoggedIn: state.get('auth').isLoggedIn,
});

export default connect<StateFromProps, void, void>(
  mapStateToProps,
)(withStyles(styles)(withRouter(App)));
