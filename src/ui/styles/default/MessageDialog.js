import { MessageDialog } from '../index';

export default theme => ({
  ...MessageDialog,
  dialog_paperWidthSm: {
    minWidth: '500px',
  },
  dialogTitle_root: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 3}px`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  dialogContent_root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '120px',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px ${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  dialogActions_root: {
    backgroundColor: theme.palette.grey['300'],
    margin: '0px',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 0.5}px`,
  },
  dialogActions_action: {
    width: `${theme.spacing.nit * 12}px`,
  },
});
