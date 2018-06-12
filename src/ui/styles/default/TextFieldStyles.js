import { TextField } from '../index';

export default theme => ({
  ...TextField,
  formControl_root: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing.unit,
  },
  inputLabel_root: {
    fontSize: 18,
    minWidth: '100px',
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
  formHelper_error: {
    fontSize: '0.85rem',
    marginTop: '0px',
    marginLeft: theme.spacing.unit,
  },
});

