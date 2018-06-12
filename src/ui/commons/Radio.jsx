import React from 'react';
import PropTypes from 'prop-types';
import RadioUI from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Radio extends React.Component {
  render() {
    const { classes, RadioProps, FormControlLabelProps, ...props } = this.props;
    return (
      <FormControlLabel
        classes={{
          root: classes.formControlLabel_root,
          disabled: classes.formControlLabel_disabled,
          label: classes.formControlLabel_label,
        }}
        {...FormControlLabelProps}
        {...props}
        control={
          <RadioUI
            classes={{
              root: classes.radio_root,
              checked: classes.radio_checked,
              disabled: classes.radio_disabled,
              colorPrimary: classes.radio_colorPrimary,
              colorSecondary: classes.radio_colorSecondary,
            }}
            {...RadioProps}
          />
        }
      />
    );
  }
}

Radio.propTypes = {
  // Styles
  classes: PropTypes.objectOf(PropTypes.string),
  // If true, the component appears selected.
  checked: PropTypes.bool,
  // name
  name: PropTypes.string,
  // The text to be used in an enclosing label element.
  label: PropTypes.node,
  // The value of the component.
  value: PropTypes.string,
  // If true, the control will be disabled.
  disabled: PropTypes.bool,
  // Callback fired when the state is changed.
  onChange: PropTypes.func,
  // Properties applied to the Radio element.
  RadioProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the FormControlLabel element.
  FormControlLabelProps: PropTypes.objectOf(PropTypes.any),
};

export default Radio;
