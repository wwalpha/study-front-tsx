import * as React from 'react';
import { StyleRulesCallback, withStyles, Theme } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MenuList from 'src/components/MenuList';
import { Props } from './AppBody.d';

class AppBody extends React.Component<Props, any> {

  render() {
    const { classes } = this.props;
    const menuList: Array<any> = [
      { primaryText: 'AAA1', secondaryText: 'BBB1' },
      { primaryText: 'AAA2', secondaryText: 'BBB2' },
      { primaryText: 'AAA3', secondaryText: 'BBB3' },
      { primaryText: 'AAA4', secondaryText: 'BBB4' },
      { primaryText: 'AAA4', secondaryText: 'BBB4' },
      { primaryText: 'AAA4', secondaryText: 'BBB4' },
      { primaryText: 'AAA4', secondaryText: 'BBB4' },
      { primaryText: 'AAA4', secondaryText: 'BBB4' },
      { primaryText: 'AAA4', secondaryText: 'BBB4' },
      { primaryText: 'AAA4', secondaryText: 'BBB4' },
    ];
    return (
      <Card className={classes.root}>
        <CardMedia
          classes={{ root: classes.media }}
          title="Contemplative Reptile"
        >
          <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            classes={{ root: classes.button }}>
            <AddIcon />
          </Button>
        </CardMedia>
        <CardContent classes={{ root: classes.content }}>
          <MenuList menuList={menuList} />
        </CardContent>
      </Card>
    );
  }
}

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    width: '100%',
    boxShadow: 'none',
  },
  content: {
    padding: '0px !important',
  },
  media: {
    height: '180px',
    backgroundColor: theme.palette.primary.light,
  },
  button: {
    position: 'absolute',
    top: '206px',
    right: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(AppBody);
