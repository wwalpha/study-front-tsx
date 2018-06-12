import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

export default class componentName extends Component {
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    classes: PropTypes.objectOf(PropTypes.string),
  }

  render() {
    const { label, classes, children, ...props } = this.props;

    return (
      <FormGroup
        row
        classes={{
          root: classes.formGroup_root,
          row: classes.formGroup_row,
        }}
      >
        <FormLabel
          {...props}
          classes={{
            root: classes.formLabel_root,
            focused: classes.formLabel_focused,
            error: classes.formLabel_error,
            disabled: classes.formLabel_disabled,
          }}
        >
          {label}
        </FormLabel>
        {children}
      </FormGroup>
    );
  }
}
