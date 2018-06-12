import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './SelectStyles';
import Select from '../../reduxform/select/Select';

const select = props => (
  <Select
    {...props}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{
      disableUnderline: true,
    }}
  />
);

export default withStyles(styles)(select);
