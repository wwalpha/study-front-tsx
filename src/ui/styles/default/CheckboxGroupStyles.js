import { CheckboxGroup } from '../index';

export default theme => ({
  ...CheckboxGroup,
  formLabel_root: {
    minWidth: 90,
  },
  formGroup_root: {
    margin: `0px ${theme.spacing.unit}px`,
  },
  formGroup_row: {
    alignItems: 'center',
  },
});
