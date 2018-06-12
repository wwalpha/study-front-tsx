// For Example:
// export const styles = theme => ({
// formControl_root: {},
// formControl_marginNormal: {},
// formControl_marginDense: {},
// formControl_fullWidth: {},
// radioGroup_root: {},
// formHelper_root: {},
// formHelper_dense: {},
// formHelper_error: {},
// formHelper_disabled: {},
// });

/** Bootstrap風 */
const styles = theme => ({
  formControl_root: {
    margin: theme.spacing.unit,
  },
  formControl_marginNormal: {},
  formControl_marginDense: {},
  formControl_fullWidth: {},
  radioGroup_root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formHelper_root: {},
  formHelper_dense: {},
  formHelper_error: {
    fontSize: '0.85rem',
    marginTop: '0px',
    marginLeft: theme.spacing.unit * 1.5,
  },
  formHelper_disabled: {},
});

export default styles;
