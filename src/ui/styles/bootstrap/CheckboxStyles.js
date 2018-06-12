// For Example:
// export const styles = theme => ({
//   formControl_root: {},
//   formControl_marginNormal: {},
//   formControl_marginDense: {},
//   formControl_fullWidth: {},
//   formLabel_root: {},
//   formLabel_focused: {},
//   formLabel_error: {},
//   formLabel_disable: {},
//   checkbox_root: {},
//   checkbox_checked: {},
//   checkbox_disabled: {},
//   checkbox_colorPrimary: {},
//   checkbox_colorSecondary: {},
// });

/** Bootstrap風 */
const styles = theme => ({
  formControl_root: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing.unit,
  },
  formControl_marginNormal: {},
  formControl_marginDense: {},
  formControl_fullWidth: {},
  formLabel_root: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  formLabel_focused: {},
  formLabel_error: {},
  formLabel_disable: {},
  checkbox_root: {
    width: '32px',
    height: '32px',
    color: '#dee2e6',
  },
  checkbox_checked: {
    color: '#007bff',
  },
  checkbox_disabled: {},
  checkbox_colorPrimary: {},
  checkbox_colorSecondary: {},
});

export default styles;
