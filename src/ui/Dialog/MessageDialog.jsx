import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogType from './DialogType';

const DialogButton = (label, onClick, props, key) => (
  <Button variant="raised" color="primary" onClick={onClick} {...props} key={key}>
    {label}
  </Button>
);

class MessageDialog extends React.Component {
  render() {
    const { classes, open, title, children, type, labels,
      onClickYes, onClose,
      DialogProps, DialogTitleProps, DialogContentProps, DialogActionsProps, YESButtonProps, NOButtonProps } = this.props;

    return (
      <Dialog
        {...DialogProps}
        classes={{
          root: classes.dialog_root,
          paper: classes.dialog_paper,
          paperWidthXs: classes.dialog_paperWidthXs,
          paperWidthSm: classes.dialog_paperWidthSm,
          paperWidthMd: classes.dialog_paperWidthMd,
          paperFullWidth: classes.dialog_paperFullWidth,
          paperFullScreen: classes.dialog_paperFullScreen,
        }}
        open={open}
      >
        <DialogTitle
          disableTypography
          {...DialogTitleProps}
          classes={{
            root: classes.dialogTitle_root,
          }}
        >
          {title
            || (type === DialogType.Alert && labels.alert)
            || (type === DialogType.Confirm && labels.confirm)
            || (type === DialogType.Error && labels.error)
            || (type === DialogType.Information && labels.info)
            || (type === DialogType.Warning && labels.warning)
          }
        </DialogTitle>
        <DialogContent
          {...DialogContentProps}
          classes={{
            root: classes.dialogContent_root,
          }}
        >
          {children}
        </DialogContent>
        <DialogActions
          {...DialogActionsProps}
          classes={{
            root: classes.dialogActions_root,
            action: classes.dialogActions_action,
          }}
        >
          {(() => {
            if (type === DialogType.Error || type === DialogType.Alert
              || type === DialogType.Information || type === DialogType.Warning) {
              return DialogButton(labels.yes, onClose, YESButtonProps);
            }

            if (type === DialogType.Confirm) {
              return [
                DialogButton(labels.no, onClose, NOButtonProps, 1),
                DialogButton(labels.yes, onClickYes, YESButtonProps, 2),
              ];
            }

            return undefined;
          })()}
        </DialogActions>
      </Dialog>
    );
  }
}

MessageDialog.defaultProps = {
  labels: {
    yes: 'OK',
    no: 'Cancel',
    alert: 'Alert',
    confirm: 'Confirm',
    error: 'Error',
    info: 'Information',
    warning: 'Warning',
  },
  type: 'info',
};

MessageDialog.propTypes = {
  // Styles
  classes: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.node,
  children: PropTypes.node,
  open: PropTypes.bool,
  // 確認のYESボタンイベント
  onClickYes: PropTypes.func,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['Confirm', 'Alert', 'Error', 'Information', 'Warning']),
  labels: PropTypes.shape({
    yes: PropTypes.string,
    no: PropTypes.string,
    alert: PropTypes.string,
    confirm: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string,
    warning: PropTypes.string,
  }),
  DialogProps: PropTypes.objectOf(PropTypes.any),
  DialogTitleProps: PropTypes.objectOf(PropTypes.any),
  DialogContentProps: PropTypes.objectOf(PropTypes.any),
  DialogActionsProps: PropTypes.objectOf(PropTypes.any),
  YESButtonProps: PropTypes.objectOf(PropTypes.any),
  NOButtonProps: PropTypes.objectOf(PropTypes.any),
};

export default MessageDialog;
