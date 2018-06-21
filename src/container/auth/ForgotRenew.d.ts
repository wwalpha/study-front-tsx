import { WithStyles, StyleRules } from "@material-ui/core/styles";
import { InjectedFormProps, FormErrors, ConfigProps, DecoratedComponentClass } from "redux-form";
import { Dispatch } from "react-redux";
import { IState } from 'src'
import { Auth } from 'src/actions'

export interface Form {
  username: string,
  password: string,
}

export interface Props extends InjectedFormProps<Form, any>, WithStyles<StyleRules> {
  actions: Auth,
  dispatch?: Dispatch<any>;
  signIn?: (values: Form, dispatch: Dispatch<any>, props: Props) => void | FormErrors<Form> | Promise<any>;
}

export type FormErrors = FormErrors<Form>