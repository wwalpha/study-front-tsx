import * as React from 'react';
import { StyleRulesCallback, withStyles, Theme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import { Props } from './MenuList.d';

class MenuList extends React.Component<Props, any> {
  state = {
    menuOpened: false,
  }

  openMenu = () => this.setState({ menuOpened: true });
  closeMenu = () => this.setState({ menuOpened: false });

  render() {
    const { classes, menuList = [] } = this.props;

    return (
      <Paper className={classes.root}>
        <List classes={{ root: classes.list }}>
          {(() => {
            const items: Array<any> = [];

            menuList.forEach((item, idx) => {
              // item
              items.push(
                <ListItem button key={idx}>
                  <Avatar classes={{ root: classes.avatar }}>
                    <FolderIcon />
                  </Avatar>
                  <ListItemText primary={item.primaryText} secondary={item.secondaryText} />
                </ListItem>
              );

              // divider
              items.push(
                <li key={`divider${idx}`}>
                  <Divider inset />
                </li>
              );
            });

            return items;
          })()}
        </List>
      </Paper>
    );
  }
}

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    width: '100%',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light,
  },
  list: { padding: '0px' }
});

export default withStyles(styles)(MenuList);
