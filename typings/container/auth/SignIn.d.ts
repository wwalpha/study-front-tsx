import { WithStyles, StyleRules } from "@material-ui/core/styles";
import { InjectedFormProps, FormErrors, ConfigProps, DecoratedComponentClass } from "redux-form";
import { Dispatch } from "react-redux";
import { IState } from '../../store'
import { Auth } from '../../actions'
import { Record } from "immutable";
import { RouteProps, RouteComponentProps } from "react-router";

export type Form = Record<{
  username: string,
  password: string,
}>

export interface Props extends InjectedFormProps<Form, any>, WithStyles<StyleRules>, RouteComponentProps<{}> {
  actions: Auth,
  dispatch?: Dispatch<any>;
  signIn?: (values: Form, dispatch: Dispatch<any>, props: Props) => void | FormErrors<Form> | Promise<any>;
}

export type ReduxForm = DecoratedComponentClass<Form, Partial<ConfigProps<Form, {}>>>
