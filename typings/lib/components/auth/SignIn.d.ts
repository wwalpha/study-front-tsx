import { InjectedFormProps, FormErrors } from "redux-form";
import { Dispatch, MapStateToPropsParam, MapDispatchToProps, InferableComponentEnhancerWithProps } from "react-redux";
import { IState } from '../../store'
import { WithStyles, StyleRules } from "@material-ui/core/styles";
import { ComponentType } from "react";

export interface Props extends React.Props<{}> {
  username?: string,
  password?: string,
}

export interface FormProps extends InjectedFormProps<Props, {}>, WithStyles<StyleRules> {
  dispatch?: Dispatch<any>;
  onSubmit: (values: Props, dispatch: Dispatch<any>, props: FormProps) => void | FormErrors<FormData> | Promise<any>;
}

export interface StateProps {
  username?: string,
}

export interface OwnProps {
}

export interface DispatchProps {
}

export type StateToProps = MapStateToPropsParam<StateProps, OwnProps, IState>;

export type DispatchToProps = MapDispatchToProps<DispatchProps, OwnProps>;