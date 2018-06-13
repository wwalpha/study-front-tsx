import { WithStyles, StyleRules } from "@material-ui/core/styles";
import { InjectedFormProps, FormErrors, ConfigProps, DecoratedComponentClass } from "redux-form";
import { Dispatch } from "react-redux";
import { IState } from '../../store'
import { Auth } from '../../actions'

export interface Form {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface Props extends InjectedFormProps<Form, any>, WithStyles<StyleRules> {
  actions: Auth,
  dispatch?: Dispatch<any>;
  signUp?: (values: Form, dispatch: Dispatch<any>, props: Props) => void | FormErrors<Form> | Promise<any>;
}

type ReduxForm = DecoratedComponentClass<Form, Partial<ConfigProps<Form, {}>>>

type FormErrors = FormErrors<Form>