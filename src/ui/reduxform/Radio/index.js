import { withStyles } from '@material-ui/core/styles';
import RadioUI from '../../commons/Radio';
import RadioStyles from '../../styles/default/RadioStyles';
import RadioGroupUI from './RadioGroup';
import RadioGroupStyles from '../../styles/default/RadioGroupStyles';

export const Radio = withStyles(RadioStyles)(RadioUI);
export const RadioGroup = withStyles(RadioGroupStyles)(RadioGroupUI);
