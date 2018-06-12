import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import renderField from './RenderField';

class RadioGroup extends React.Component {
  render() {
    const {
      name, validate, warn,
      onChange, onBlur, onDragStart, onDrop, onFocus,
      children, ...props
    } = this.props;
    return (
      <Field
        name={name}
        validate={validate}
        warn={warn}
        component={renderField}
        onChange={onChange}
        onBlur={onBlur}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onFocus={onFocus}
        {...props}
      >
        {children}
      </Field>
    );
  }
}

RadioGroup.propTypes = {
  // ReduxForm用変数
  name: PropTypes.string.isRequired,
  // (value, allValues, props, name) => error
  validate: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  // (value, allValues, props) => warning
  warn: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  // (event, newValue, previousValue) => void
  onChange: PropTypes.func,
  // (event, newValue, previousValue) => void
  onBlur: PropTypes.func,
  // (event) => void
  onDragStart: PropTypes.func,
  // (event, newValue, previousValue) => void
  onDrop: PropTypes.func,
  // (event) => void
  onFocus: PropTypes.func,
  // ★★★ MaterialUI ★★★
  // Children
  children: PropTypes.node,
  // Useful to extend the style applied to components.
  classes: PropTypes.objectOf(PropTypes.string),
  // label
  label: PropTypes.string,
  // Properties applied to the RadioGroup element.
  RadioGroupProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the FormControl element.
  FormControlProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the FormLabel element.
  FormLabelProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the FormHelperText element.
  FormHelperTextProps: PropTypes.objectOf(PropTypes.any),
};

export default RadioGroup;
