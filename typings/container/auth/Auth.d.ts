import { WithStyles, StyleRulesCallback } from "@material-ui/core/styles";
import { RouteComponentProps } from "react-router-dom";

export interface Props extends WithStyles<StyleRulesCallback>, RouteComponentProps<{}> {
}
