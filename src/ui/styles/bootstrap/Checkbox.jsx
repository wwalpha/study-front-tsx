import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import common from './CheckboxStyles';
import CheckboxUI from '../../reduxform/checkbox/Checkbox';

/* eslint-disable */
const checkbox = props => (
  <CheckboxUI
    {...props}
    CheckboxProps={{
      ...props.CheckboxProps,
      disableRipple: true,
    }}
  />
);

const Checkbox = withStyles(common)(checkbox);

export default Checkbox;
