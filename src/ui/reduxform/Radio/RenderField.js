import React from 'react';
import classnames from 'classnames';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

/* eslint-disable arrow-body-style */
export const isEmpty = value => (value === '' || value === undefined || value === null);

const getByteLength = (str) => {
  if (isEmpty(str)) return 0;

  return encodeURI(str).replace(/%../g, '*').length;
};

// 下記はESLintのチェックミスなので、無効にする
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
export default ({
  // { checked, name, value, onBlur, onChange, onDragStart, onDrop, onFocus }
  input,
  // { touched, error, warning... }
  meta,
  // Useful to extend the style applied to components.
  classes,
  // label
  label,
  // Properties applied to the RadioGroup element.
  RadioGroupProps = {},
  // Properties applied to the FormControl element.
  FormControlProps = {},
  // Properties applied to the FormHelperText element.
  FormHelperTextProps = {},
  // Properties applied to the FormLabel element.
  FormLabelProps,
  // children
  children,
}) => {
  const showError = (
    <FormHelperText
      {...FormHelperTextProps}
      classes={{
        root: classes.formHelper_root,
        error: classes.formHelper_error,
        disabled: classes.formHelper_disabled,
      }}
      error={meta.error !== undefined || meta.warning !== undefined}
    >
      {meta.error || meta.warning}
    </FormHelperText>
  );

  const labelComp = (
    <FormLabel
      classes={{
        root: classes.formLabel_root,
        focused: classes.formLabel_focused,
        error: classes.formLabel_error,
        disabled: classes.formLabel_disabled,
      }}
      {...FormLabelProps}
    >
      {label}
    </FormLabel>
  );

  const radioComp = (
    <RadioGroup
      {...RadioGroupProps}
      className={classnames({
        [classes.radioGroup_root]: true,
        [classes.radioGroup_hasLabel]: getByteLength(label) > 10,
      })}
      name={input.name}
      value={isEmpty(input.value) ? '' : String(input.value)}
      onChange={input.onChange}
    >
      {children}
    </RadioGroup>
  );

  return (
    <FormGroup
      classes={{
        root: classes.formGroup_root,
        row: classes.formGroup_row,
      }}
    >
      {(() => {
        if (label) {
          return (
            <React.Fragment>
              <Grid container alignItems="center" spacing={0}>
                {labelComp}
                {radioComp}
              </Grid>
              {(meta.error || meta.warning) && showError}
            </React.Fragment>
          );
        }

        return (
          <React.Fragment>
            <FormControl
              {...FormControlProps}
              classes={{
                root: classes.formControl_root,
                marginNormal: classes.formControl_marginNormal,
                marginDense: classes.formControl_marginDense,
                fullWidth: classes.formControl_fullWidth,
              }}
            >
              {radioComp}
            </FormControl>
            {(meta.error || meta.warning) && showError}
          </React.Fragment>
        );
      })()}
    </FormGroup>
  );
};
