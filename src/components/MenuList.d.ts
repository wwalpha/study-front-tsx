import { WithStyles, StyleRules } from "@material-ui/core/styles";
import * as Item from './MenuItem.d';

export interface Props extends WithStyles<StyleRules> {
  menuList?: Array<Item.MenuItem>
}

