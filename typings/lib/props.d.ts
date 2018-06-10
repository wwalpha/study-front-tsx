import * as React from "react";
import { FormErrors, InjectedFormProps, FormProps } from "redux-form";
import { Dispatch } from "redux";

export interface AppProps extends React.Props<{}> { }

export interface SignInProps extends React.Props<{}> {
  username: string,
  password: string,
}

export interface SignInFormProps extends InjectedFormProps<SignInProps, {}> {
  dispatch?: Dispatch<{}>;
  onSubmit: (values: SignInProps, dispatch: Dispatch<{}>, props: SignInFormProps) => void | FormErrors<FormData> | Promise<any>;
}

export interface SignUpProps extends React.Props<{}> { }
export interface ConfirmProps extends React.Props<{}> { }
export interface ConfirmProps extends React.Props<{}> { }
export interface ForgotProps extends React.Props<{}> { }
export interface ForgotRenewProps extends React.Props<{}> { }
