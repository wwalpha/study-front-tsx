import * as React from 'react';
import { hot } from 'react-hot-loader';
import { AppProps } from 'typings';
import Grid from '@material-ui/core/Grid';
import Login from 'src/components/login/Login';
import withRoot from 'src/withRoot';
import { WithStyles, StyleRulesCallback, withStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

class App extends React.Component<AppProps & WithStyles<StyleRulesCallback>, any> {

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

export default withRoot(withStyles(styles)<AppProps>(App));
