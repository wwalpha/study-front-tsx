import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from 'src';
import Grid from '@material-ui/core/Grid';
import { StyleRulesCallback, withStyles, Theme } from '@material-ui/core';
import AppBar from 'app/AppBar';
import AppBody from 'app/AppBody';
import BottomNav from 'src/components/BottomNav';

import { Props, StateFromProps } from './Top.d';

class Top extends React.Component<Props, any> {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0}>
        <AppBar />
        <AppBody />
        <BottomNav />
      </Grid>
    );
  }
}

const styles: StyleRulesCallback = (theme: Theme) => ({
});

const mapStateToProps = (state: IState) => ({
});

export default connect<StateFromProps, void, Props>(
  mapStateToProps,
)(withStyles(styles)(Top));
