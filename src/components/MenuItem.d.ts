import { WithStyles, StyleRules } from "@material-ui/core/styles";


export type MenuItem = {
  primaryText: string,
  secondaryText: string,
}

export interface Props extends WithStyles<StyleRules> {
  item: MenuItem,
}

