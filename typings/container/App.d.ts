import { WithStyles, StyleRules } from "@material-ui/core/styles";
import { InjectedFormProps, FormErrors, ConfigProps, DecoratedComponentClass } from "redux-form";
import { Dispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

export interface StateFromProps {
  isLoggedIn: boolean,
}

export interface Props extends RouteComponentProps<{}>, WithStyles<StyleRules> {
  isLoggedIn: boolean,
}

