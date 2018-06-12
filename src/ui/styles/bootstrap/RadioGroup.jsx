import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import common from './RadioGroupStyles';
import RadioGroupUI from '../../reduxform/radiogroup/RadioGroup';

const radioGroup = (props = {}) => (
  <RadioGroupUI
    {...props}
  />
);

const RadioGroup = withStyles(common)(radioGroup);

export default RadioGroup;
