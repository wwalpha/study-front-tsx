import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/default/SelectStyles';
import Select from './Select';

const select = props => (
  <Select
    {...props}
    InputLabelProps={{
      shrink: true,
    }}
  />
);

export default withStyles(styles)(select);
