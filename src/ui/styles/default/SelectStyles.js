import { Select } from '../index';

export default theme => ({
  ...Select,
  formControl_root: {
    margin: theme.spacing.unit,
  },
  formHelper_error: {
    fontSize: '0.85rem',
    marginTop: '0px',
    marginLeft: theme.spacing.unit,
  },
  select_select: {
    paddingLeft: '6px',
  },
  inputLabel_root: {
    fontSize: 18,
    minWidth: 100,
  },
  inputLabel_shrink: {
    transform: 'translate(0, 1.5px) scale(0.9)',
  },
  input_root: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  menuList_root: {
    padding: '0px',
  },
});
