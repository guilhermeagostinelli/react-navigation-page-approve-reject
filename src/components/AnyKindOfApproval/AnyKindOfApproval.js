import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ApprovalWithNavigation from '../ApprovalWithNavigation/ApprovalWithNavigation';
import api from '../../api/any-kind-of-approval';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '5vmin',
    marginLeft: '5vmin',
    marginRight: '5vmin'
  },
  commonField: {
    width: 200
  },
  textField: {
    margin: theme.spacing()
  },
});

class AnyKindOfApproval extends Component {
  constructor(props) {
    super(props);
    this.handleApprove = this.handleApprove.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  async handleApprove(selectedRecord) {
    return await api.defineApproval(selectedRecord.id, true);
  }

  async handleReject(selectedRecord) {
    return await api.defineApproval(selectedRecord.id, false);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <h1>Any Kind of Approval</h1>
        <ApprovalWithNavigation 
          loadData={api.fetchRecords}
          approveConfirmMsg={"Are you sure you want to approve the selected record?"}
          onApprove={this.handleApprove}
          rejectConfirmMsg={"Are you sure you want to reject the selected record?"}
          onReject={this.handleReject}
        >
          {selectedRecord => (
            <form className={classes.container} noValidate autoComplete="off">
              <TextField 
                label="Name"
                className={`${classes.commonField} ${classes.textField}`}
                value={selectedRecord.name}
              />
            </form>
          )}
        </ApprovalWithNavigation>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AnyKindOfApproval);