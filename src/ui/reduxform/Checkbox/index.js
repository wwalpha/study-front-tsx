import { withStyles } from '@material-ui/core/styles';
import Checkbox from './Checkbox';
import CheckboxStyles from '../../styles/default/CheckboxStyles';
import CheckboxGroupUI from '../../commons/CheckboxGroup';
import CheckboxGroupStyles from '../../styles/default/CheckboxGroupStyles';

export default withStyles(CheckboxStyles)(Checkbox);
export const CheckboxGroup = withStyles(CheckboxGroupStyles)(CheckboxGroupUI);
