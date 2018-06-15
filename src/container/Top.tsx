import * as React from 'react';
import { IAuth, IState } from 'typings';
import { StyleRulesCallback, withStyles, Theme, Grid } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { connect } from 'react-redux';

class Top extends React.Component<IAuth.Props, any> {
  render() {
    const { classes } = this.props;

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
        {this.props.children}
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

export default connect<IAuth.StateFromProps, void, IAuth.Props>(
  mapStateToProps,
)(withStyles(styles)(Top));
