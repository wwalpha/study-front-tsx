import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import renderField from './RenderField';

class Select extends React.Component {
  render() {
    const {
      name, validate, warn,
      // redux form events
      onChange, onBlur, onDragStart, onDrop, onFocus,
      // customize properties
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

Select.defaultProps = {
  labelPosition: 'left',
};

Select.propTypes = {
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
  labelPosition: PropTypes.oneOf(['left', 'top']),
  // disabled
  disabled: PropTypes.bool,
  // Styles
  classes: PropTypes.objectOf(PropTypes.string),
  // The option elements to populate the select with. Can be some MenuItem when native is false and option when native is true.
  children: PropTypes.node,
  // An Input element; does not have to be a material-ui specific Input.
  // input: PropTypes.element,
  // Properties applied to the input element. When native is true, the properties are applied on the select element.
  inputProps: PropTypes.objectOf(PropTypes.any),
  // If true, value must be an array and the menu will support multiple selections.
  // You can only use it when the native property is false (default).
  // Properties applied to the Input element.
  InputProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the InputLabel element.
  InputLabelProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the FormControl element.
  FormControlProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the FormHelperText element.
  FormHelperTextProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the Menu element.
  MenuProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the Menu element.
  MenuListProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the Menu element.
  SelectProps: PropTypes.objectOf(PropTypes.any),
};

export default Select;
