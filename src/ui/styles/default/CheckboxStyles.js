import { Checkbox } from '../index';

export default theme => ({
  ...Checkbox,
  formControl_root: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing.unit,
  },
  formLabel_root: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  formLabel_disabled: {
    '&:hover': {
      cursor: 'default',
    },
  },
  checkbox_root: {
    width: '32px',
    height: '32px',
  },
});
