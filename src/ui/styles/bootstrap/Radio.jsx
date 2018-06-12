import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './RadioStyles';
import Radio from '../../Radio/Radio';

/* eslint-disable */
const radio = props => (
  <Radio
    {...props}
    RadioProps={{
      ...props.RadioProps,
      disableRipple: true,
    }}
  />
);

export default withStyles(styles)(radio);
