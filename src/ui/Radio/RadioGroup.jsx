import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import RadioGroupUI from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const isEmpty = value => (value === '' || value === undefined || value === null);

const getByteLength = (str) => {
  if (isEmpty(str)) return 0;

  return encodeURI(str).replace(/%../g, '*').length;
};

export default class RadioGroup extends React.Component {
  static propTypes = {
    // name
    name: PropTypes.string.isRequired,
    // value
    value: PropTypes.string,
    // Children
    children: PropTypes.node,
    // Useful to extend the style applied to components.
    classes: PropTypes.objectOf(PropTypes.string),
    // label
    label: PropTypes.string,
    // onChange
    onChange: PropTypes.func,
    // Properties applied to the RadioGroup element.
    RadioGroupProps: PropTypes.objectOf(PropTypes.any),
    // Properties applied to the FormControl element.
    FormControlProps: PropTypes.objectOf(PropTypes.any),
    // Properties applied to the FormLabel element.
    FormLabelProps: PropTypes.objectOf(PropTypes.any),
  }

  render() {
    const { classes, children, name, value, onChange,
      label,
      RadioGroupProps, FormControlProps, FormLabelProps,
    } = this.props;

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
      <RadioGroupUI
        {...RadioGroupProps}
        className={classnames({
          [classes.radioGroup_root]: true,
          [classes.radioGroup_hasLabel]: getByteLength(label) > 10,
        })}
        name={name}
        value={isEmpty(value) ? '' : String(value)}
        onChange={onChange}
      >
        {children}
      </RadioGroupUI>
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
              <Grid container alignItems="center" spacing={0}>
                {labelComp}
                {radioComp}
              </Grid>
            );
          }

          return (
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
          );
        })()}
      </FormGroup>
    );
  }
}
