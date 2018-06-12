import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import RenderField from './RenderField';

class TextField extends React.Component {
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
        component={RenderField}
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

TextField.defaultProps = {
  labelPosition: 'left',
};

TextField.propTypes = {
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
  // Type attribute of the Input element. It should be a valid HTML5 input type.
  label: PropTypes.string,
  // label position
  labelPosition: PropTypes.oneOf(['left', 'top']),
  // disabled
  disabled: PropTypes.bool,
  // readonly
  readOnly: PropTypes.bool,
  // 全角文字の長さ、単位：rem
  width: PropTypes.number,
  // 最大入力数
  maxLength: PropTypes.number,
  // Classes
  classes: PropTypes.objectOf(PropTypes.string),
  // Properties applied to the FormControl element.
  FormControlProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the InputLabel element.
  InputLabelProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the Input element.
  InputProps: PropTypes.objectOf(PropTypes.any),
  // Properties applied to the native FormHelperText element.
  FormHelperTextProps: PropTypes.objectOf(PropTypes.any),
};

export default TextField;
