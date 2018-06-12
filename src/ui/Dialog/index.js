import { withStyles } from '@material-ui/core/styles';
import MessageDialogUI from './MessageDialog';
import styles from '../styles/default/MessageDialog';
import types from './DialogType';

export const MessageDialog = withStyles(styles)(MessageDialogUI);
export const DialogType = types;
