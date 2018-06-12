import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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

class TextField extends React.Component {
  static propTypes = {
    // ラベル用ID
    id: PropTypes.string,
    // value
    value: PropTypes.string,
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
    // onChange
    onChange: PropTypes.func,
    // Properties applied to the FormControl element.
    FormControlProps: PropTypes.objectOf(PropTypes.any),
    // Properties applied to the InputLabel element.
    InputLabelProps: PropTypes.objectOf(PropTypes.any),
    // Properties applied to the Input element.
    InputProps: PropTypes.objectOf(PropTypes.any),
  }

  render() {
    const {
      classes, id, value, onChange,
      label, labelPosition, disabled, readOnly, width, maxLength,
      FormControlProps, InputLabelProps, InputProps,
    } = this.props;

    const labelLeft = labelPosition === 'left' ? styles.labelLeft : {};
    const inputWidth = width ? { width: `${width}rem` } : {};

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
          htmlFor={id}
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
          id={id}
          value={value}
          readOnly={readOnly}
          onChange={(e) => {
            if (maxLength && e.target.value) {
              const inputLength = e.target.value.length;

              if (inputLength > maxLength) {
                e.preventDefault();
                return;
              }
            }

            onChange(e);
          }}
        />
      </FormControl>
    );
  }
}

TextField.defaultProps = {
  labelPosition: 'left',
};

export default TextField;
