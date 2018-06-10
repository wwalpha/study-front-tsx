import * as React from 'react';
import { Field } from "redux-form/immutable";
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { Validator } from 'redux-form';

export interface RTextFieldProps extends TextFieldProps {
  validate?: Validator | Validator[];
}

const renderComp = (props: any) => {
  console.log(props);
  return (
    <TextField
      id={props.id}
      label={props.label}
      margin={props.margin}
      required={props.required}
      fullWidth={props.fullWidth}
      type={props.type}
    />
  );
}

class RTextField extends React.Component<RTextFieldProps, any> {
  render() {
    const { name, ...props } = this.props;

    return (
      <Field
        name={name}
        component={renderComp}
        {...props}
      />
    );
  }
};

export default RTextField;
