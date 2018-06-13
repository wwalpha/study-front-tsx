import * as React from 'react';
import { WrappedFieldProps, GenericField, BaseFieldProps } from 'redux-form'
import { Field } from 'redux-form/immutable'
import { TextFieldProps as MTextFieldProps } from '@material-ui/core/TextField';
import MTextField from '@material-ui/core/TextField';
import { Omit } from '@material-ui/core';

type AddedFieldProps = Omit<MTextFieldProps, 'component'>

export type TextFieldProps = BaseFieldProps & AddedFieldProps
export type WrappedProps = WrappedFieldProps & AddedFieldProps

const FieldNew = Field as new () => GenericField<AddedFieldProps>;

const RenderComp = (props: WrappedProps): any => {
  const { input, meta, id } = props;

  console.log(input);
  return (
    <MTextField
      {...props}
      id={id || `${meta.form}_${input.name}`}
      value={input.value}
      onChange={e => input.onChange(e.target.value)}
    />
  )
}

class TextField extends React.Component<TextFieldProps, any> {
  render() {
    const {
      name, ...props
    } = this.props;

    return (
      <FieldNew
        id={name}
        name={name}
        component={RenderComp}
        {...props}
      />
    );
  }
}

export default TextField;
