import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SelectUI from '@material-ui/core/Select';

const styles = {
  labelLeft: {
    formControl_root: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputLabel_root: {
      position: 'inherit',
    },
    input_root: {
    },
    select_root: {
      minWidth: '80px',
      marginTop: '0px',
    },
  },
};

export default class Select extends React.Component {
  static propTypes = {
    // id
    id: PropTypes.string,
    // value
    value: PropTypes.string,
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
    // onChange
    onChange: PropTypes.func,
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
  }

  render() {
    const {
      classes, children, id, value, onChange,
      label, labelPosition, disabled,
      inputProps, InputProps, InputLabelProps, FormControlProps, MenuProps, MenuListProps, SelectProps,
    } = this.props;

    const labelLeft = labelPosition === 'left' ? styles.labelLeft : undefined;

    return (
      <FormControl
        style={labelLeft && labelLeft.formControl_root}
        classes={{
          root: classes.formControl_root,
          marginNormal: classes.formControl_marginNormal,
          marginDense: classes.formControl_marginDense,
          fullWidth: classes.formControl_fullWidth,
        }}
        {...FormControlProps}
        disabled={disabled}
      >
        {label && (
          <InputLabel
            style={labelLeft && labelLeft.inputLabel_root}
            htmlFor={id}
            classes={{
              root: classes.inputLabel_root,
              formControl: classes.inputLabel_formControl,
              marginDense: classes.inputLabel_marginDense,
              shrink: classes.inputLabel_shrink,
              animated: classes.inputLabel_animated,
            }}
            {...InputLabelProps}
          >
            {label}
          </InputLabel>
        )}
        <SelectUI
          style={labelLeft && labelLeft.select_root}
          {...SelectProps}
          classes={{
            root: classes.select_root,
            select: classes.select_select,
            selectMenu: classes.select_selectMenu,
            disabled: classes.select_disabled,
            icon: classes.select_icon,
          }}
          input={
            <Input
              style={labelLeft && labelLeft.input_root}
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
              {...InputProps}
            />
          }
          inputProps={{
            ...inputProps,
            id,
          }}
          MenuProps={{
            classes: {
              paper: classes.menu_paper,
            },
            MenuListProps: {
              classes: {
                root: classes.menuList_root,
                padding: classes.menuList_padding,
                dense: classes.menuList_dense,
                subheader: classes.menuList_subheader,
              },
              ...MenuListProps,
            },
            ...MenuProps,
          }}
          value={value}
          onChange={onChange}
        >
          {children}
        </SelectUI>
      </FormControl>
    );
  }
}
