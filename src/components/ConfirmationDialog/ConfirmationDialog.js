import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Ref.: https://itnext.io/add-confirmation-dialog-to-react-events-f50a40d9a30d?gi=f48ddfb4b241
export default class ConfirmationDialog extends Component {
  state = {
    open: false,
    confirmMsg: null,
    callback: null
  }
  
  show = (confirmMsg, callback) => event => {
    event.preventDefault()

    event = {
      ...event,
      target: { ...event.target, value: event.target.value }
    }

    this.setState({
      open: true,
      confirmMsg: confirmMsg || "Are you sure?",
      callback: () => callback(event)
    })
  }

  hide = () => this.setState({ open: false, callback: null })

  confirm = () => {
    this.state.callback()
    this.hide()
  }

  render() {
    return (
      <Fragment>
        {this.props.children(this.show)}
  
        <Dialog
          open={this.state.open}
          onClose={this.hide}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{this.state.confirmMsg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hide} color="primary">No</Button>
            <Button onClick={this.confirm} color="primary">Yes</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}