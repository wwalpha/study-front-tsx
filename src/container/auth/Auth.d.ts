import { WithStyles, StyleRulesCallback } from "@material-ui/core/styles";
import { RouteComponentProps } from "react-router-dom";

export interface StateFromProps {
  isLoggedIn: boolean,
}

export interface Props extends WithStyles<StyleRulesCallback>, RouteComponentProps<{}> {
  isLoggedIn: boolean,
}
