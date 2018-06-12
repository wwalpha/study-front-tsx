import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

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
      // marginTop: '0px',
    },
    select_root: {
      minWidth: '80px',
      marginTop: '0px',
    },
  },
};

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
export default ({
  // { checked, name, value, onBlur, onChange, onDragStart, onDrop, onFocus }
  input,
  // { touched, error, warning... }
  meta,
  // label
  label,
  // labelPosition
  labelPosition,
  // styles
  classes,
  // disabled
  disabled,
  // The option elements to populate the select with. Can be some MenuItem when native is false and option when native is true.
  children,
  // An Input element; does not have to be a material-ui specific Input.
  // inputElement,
  // Properties applied to the input element. When native is true, the properties are applied on the select element.
  inputProps,
  // Properties applied to the Select element.
  SelectProps,
  // Properties applied to the Input element.
  InputProps,
  // Properties applied to the InputLabel element.
  InputLabelProps,
  // Properties applied to the FormControl element.
  FormControlProps,
  // Properties applied to the FormHelperText element.
  FormHelperTextProps,
  // Properties applied to the Menu element.
  MenuProps,
  // Properties applied to the MenuList element.
  MenuListProps,
}) => {
  const labelLeft = labelPosition === 'left' ? styles.labelLeft : undefined;
  return (
    <React.Fragment>
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
            htmlFor={`${meta.form}_${input.name}`}
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
        <Select
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
            name: input.name,
            id: `${meta.form}_${input.name}`,
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
          value={input.value}
          onChange={input.onChange}
        >
          {children}
        </Select>
      </FormControl>
      {
        (meta.error || meta.warning) && (
          <FormHelperText
            classes={{
              root: classes.formHelper_root,
              error: classes.formHelper_error,
              disabled: classes.formHelper_disabled,
            }}
            {...FormHelperTextProps}
            error={(meta.error || meta.warning) ? true : FormHelperTextProps.error}
          >
            {meta.error || meta.warning}
          </FormHelperText>
        )
      }
    </React.Fragment >
  );
};

