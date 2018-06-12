import React from 'react';
import PropTypes from 'prop-types';
import CheckboxUI from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    // label name
    id: PropTypes.string.isRequired,
    // label
    label: PropTypes.string,
    // label position
    labelPosition: PropTypes.oneOf(['left', 'right']),
    // Disabled
    disabled: PropTypes.bool,
    // onChange Event
    onChange: PropTypes.func,
    // Useful to extend the style applied to components.
    classes: PropTypes.objectOf(PropTypes.string),
    // Properties applied to the Checkbox element.
    CheckboxProps: PropTypes.objectOf(PropTypes.any),
    // Properties applied to the FormLabel element.
    FormLabelProps: PropTypes.objectOf(PropTypes.any),
    // Properties applied to the FormControl element.
    FormControlProps: PropTypes.objectOf(PropTypes.any),
  }

  render() {
    const { classes, onChange,
      id, checked, label, labelPosition, disabled,
      CheckboxProps, FormLabelProps, FormControlProps,
    } = this.props;

    const labelCtrl = (
      <FormLabel
        {...FormLabelProps}
        classes={{
          root: classes.formLabel_root,
          focused: classes.formLabel_focused,
          error: classes.formLabel_error,
          disabled: classes.formLabel_disabled,
        }}
        htmlFor={id}
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
        <CheckboxUI
          id={id}
          {...CheckboxProps}
          classes={{
            root: classes.checkbox_root,
            checked: classes.checkbox_checked,
            disabled: classes.checkbox_disabled,
            colorPrimary: classes.checkbox_colorPrimary,
            colorSecondary: classes.checkbox_colorSecondary,
          }}
          checked={checked}
          onChange={onChange}
        />
        {label && labelPosition === 'right' && labelCtrl}
      </FormControl>
    );
  }
}

