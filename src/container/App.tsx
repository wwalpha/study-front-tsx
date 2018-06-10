import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Props } from 'typings';
import Grid from '@material-ui/core/Grid';
import withRoot from 'src/withRoot';
import { WithStyles, StyleRulesCallback, withStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

class App extends React.Component<Props.AppProps & WithStyles<StyleRulesCallback>, any> {

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

export default hot(module)(withRoot(withStyles(styles)<Props.AppProps>(App)));
