import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/default/TextFieldStyles';
import TextField from './TextField';

/* eslint-disable */
const textField = props => (
  <TextField
    {...props}
    InputLabelProps={{
      ...props.InputLabelProps,
      shrink: true,
    }}
  />
);

export default withStyles(styles)(textField);