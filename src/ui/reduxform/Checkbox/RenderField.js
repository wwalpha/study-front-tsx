import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

/* eslint-disable arrow-body-style */

// 下記はESLintのチェックミスなので、無効にする
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
export default ({
  // { checked, name, value, onBlur, onChange, onDragStart, onDrop, onFocus }
  input,
  // { touched, error, warning... }
  meta,
  // label
  label,
  // label positon: left or right
  labelPosition,
  // disabled
  disabled,
  // Useful to extend the style applied to components.
  classes,
  CheckboxProps = {},
  FormLabelProps = {},
  FormControlProps = {},
}) => {
  const labelCtrl = (
    <FormLabel
      {...FormLabelProps}
      classes={{
        root: classes.formLabel_root,
        focused: classes.formLabel_focused,
        error: classes.formLabel_error,
        disabled: classes.formLabel_disabled,
      }}
      htmlFor={`${meta.form}_${input.name}`}
    >
      {label}
    </FormLabel>
  );

  return (
    <FormControl
      {...FormControlProps}
      classes={{
        root: classes.formControl_root,
        marginNormal: classes.formControl_marginNormal,
        marginDense: classes.formControl_marginDense,
        fullWidth: classes.formControl_fullWidth,
      }}
      disabled={disabled}
    >
      {label && labelPosition === 'left' && labelCtrl}
      <Checkbox
        id={`${meta.form}_${input.name}`}
        {...CheckboxProps}
        classes={{
          root: classes.checkbox_root,
          checked: classes.checkbox_checked,
          disabled: classes.checkbox_disabled,
          colorPrimary: classes.checkbox_colorPrimary,
          colorSecondary: classes.checkbox_colorSecondary,
        }}
        checked={input.value}
        onChange={input.onChange}
      />
      {label && labelPosition === 'right' && labelCtrl}
    </FormControl>
  );
};
