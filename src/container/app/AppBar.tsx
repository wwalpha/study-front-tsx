import * as React from 'react';
import { StyleRulesCallback, withStyles, Theme } from '@material-ui/core';
import MAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Props } from './AppBar.d';

class AppBar extends React.Component<Props, any> {
  state = {
    menuOpened: false,
  }

  openMenu = () => this.setState({ menuOpened: true });
  closeMenu = () => this.setState({ menuOpened: false });

  render() {
    const { classes } = this.props;

    return (
      <MAppBar position="static" classes={{ root: classes.appbar }} >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            onClose={this.closeMenu}
            open={this.state.menuOpened}
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem>Menu1</MenuItem>
            <MenuItem>Menu2</MenuItem>
          </Menu>
          <Typography variant="title" color="inherit" className={classes.title}>
          </Typography>
          <div>
            <IconButton
              aria-owns="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {/* <Menu
              open={false}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu> */}
          </div>
        </Toolbar>
      </MAppBar>
    );
  }
}

const styles: StyleRulesCallback = (theme: Theme) => ({
  appbar: {
    boxShadow: 'none',
  },
  title: {
    flex: 1,
  },
  root: {
  },
});

export default withStyles(styles)(AppBar);
