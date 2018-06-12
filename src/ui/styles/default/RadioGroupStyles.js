import { RadioGroup } from '../index';

export default theme => ({
  ...RadioGroup,
  radioGroup_root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioGroup_hasLabel: {
    marginLeft: theme.spacing.unit * 1.5,
  },
  formHelper_error: {
    fontSize: '0.85rem',
    marginTop: theme.spacing.unit * 0.5,
  },
  formLabel_root: {
    minWidth: 100,
  },
  formGroup_root: {
    margin: theme.spacing.unit,
  },
  formGroup_row: {
    alignItems: 'center',
  },
});
