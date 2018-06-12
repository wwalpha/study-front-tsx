import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import renderField from './RenderField';

class Checkbox extends React.Component {
  render() {
    const {
      name, validate, warn,
      onChange, onBlur, onDragStart, onDrop, onFocus,
      ...props
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
      />
    );
  }
}

Checkbox.defaultProps = {
  labelPosition: 'right',
};

Checkbox.propTypes = {
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
  // label
  label: PropTypes.string,
  // label position
  labelPosition: PropTypes.oneOf(['left', 'right']),
  // Disabled
  disabled: PropTypes.bool,
  // Useful to extend the style applied to components.
  classes: PropTypes.objectOf(PropTypes.string),
  // Properties applied to the Checkbox element.
  CheckboxProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the Checkbox element.
  FormLabelProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the Checkbox element.
  FormControlProps: PropTypes.objectOf(PropTypes.any),
};

export default Checkbox;
