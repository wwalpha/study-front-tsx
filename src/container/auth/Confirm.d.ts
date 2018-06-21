import { WithStyles, StyleRules } from "@material-ui/core/styles";
import { InjectedFormProps, FormErrors, ConfigProps, DecoratedComponentClass } from "redux-form";
import { Dispatch } from "react-redux";
import { IState } from 'src'
import { Auth } from 'src/actions'
import { RouteComponentProps } from "react-router";

export interface Form {
  username: string,
  code: string,
}

export interface Props extends InjectedFormProps<Form, any>, WithStyles<StyleRules>, RouteComponentProps<{}> {
  actions: Auth,
  dispatch?: Dispatch<any>;
  signUp?: (values: Form, dispatch: Dispatch<any>, props: Props) => void | FormErrors<Form> | Promise<any>;
}

export type FormErrors = FormErrors<Form>