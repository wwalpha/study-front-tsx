import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = {
  labelLeft: {
    inputLabel_root: {
      position: 'inherit',
    },
    input_root: {
      marginTop: '0px',
    },
  },
};

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
  // label
  labelPosition,
  // width
  width,
  // maxLength
  maxLength,
  // disabled
  disabled,
  // readOnly
  readOnly,
  // Useful to extend the style applied to components.
  classes,
  // Properties applied to the FormControl element.
  FormControlProps = {},
  // Properties applied to the InputLabel element.
  InputLabelProps = {},
  // Properties applied to the Input element.
  InputProps = {},
  // Properties applied to the FormHelperTextProp element.
  FormHelperTextProps = {},
}) => {
  const labelLeft = labelPosition === 'left' ? styles.labelLeft : {};
  const inputWidth = width ? { width: `${width}rem` } : {};

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
        disabled={disabled}
      >
        <InputLabel
          style={labelLeft.inputLabel_root}
          {...InputLabelProps}
          classes={{
            root: classes.inputLabel_root,
            formControl: classes.inputLabel_formControl,
            marginDense: classes.inputLabel_marginDense,
            shrink: classes.inputLabel_shrink,
            animated: classes.inputLabel_animated,
          }}
          htmlFor={InputProps.id || `${meta.form}_${input.name}`}
        >
          {label}
        </InputLabel>
        <Input
          style={{ ...labelLeft.input_root, ...inputWidth }}
          {...InputProps}
          classes={{
            root: classes.input_root,
            formControl: classes.input_formControl,
            focused: classes.input_focused,
            disabled: classes.input_disabled,
            underline: classes.input_underline,
            error: classes.input_error,
            multiline: classes.input_multiline,
            fullWidth: classes.input_fullWidth,
            input: classes.input_input,
            inputMarginDense: classes.input_inputMarginDense,
            inputMultiline: classes.input_inputMultiline,
            inputType: classes.input_inputType,
            inputTypeSearch: classes.input_inputTypeSearch,
          }}
          id={InputProps.id || `${meta.form}_${input.name}`}
          value={input.value}
          readOnly={readOnly}
          onChange={(e) => {
            if (maxLength && e.target.value) {
              const inputLength = e.target.value.length;

              if (inputLength > maxLength) {
                e.preventDefault();
                return;
              }
            }

            input.onChange(e);
          }}
        />
      </FormControl>
      {(meta.error || meta.warning) && (
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
      )}
    </React.Fragment>
  );
};
