import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '../../reduxform/textfield/TextField';
import styles from './TextFieldStyles';

/* eslint-disable react/prop-types */
const textField = props => (
  <TextField
    {...props}
    InputProps={{
      ...props.InputProps,
      disableUnderline: true,
    }}
    InputLabelProps={{
      shrink: true,
    }}
  />
);

export default withStyles(styles)(textField);
