import { WithStyles, StyleRules } from "@material-ui/core/styles";
import { InjectedFormProps, FormErrors, ConfigProps, DecoratedComponentClass } from "redux-form";
import { Dispatch } from "react-redux";
import { IState } from '../../store'
import { Auth } from '../../actions'
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

export type ReduxForm = DecoratedComponentClass<Form, Partial<ConfigProps<Form, {}>>>
export type FormErrors = FormErrors<Form>