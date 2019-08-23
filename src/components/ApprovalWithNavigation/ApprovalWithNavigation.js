import React, { Component } from 'react';
import ListNavigation from '../ListNavigation/ListNavigation';
import ApprovalButtons from '../ApprovalButtons/ApprovalButtons';
import Loader from '../../HOC/Loader/Loader';
import removeItemAndUpdateIdx from '../../util/removeItemAndUpdateIdx';

const Div = (props) => <div>{props.children}</div>;
const DivWithLoader = Loader('data')(Div);

class ApprovalWithNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: null,
      selectedIdx: null
    };
    this.updateSelectedIdx = this.updateSelectedIdx.bind(this);
    this.handleApprove = this.handleApprove.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  async componentDidMount() {
    const res = await this.props.loadData();
    this.setState({
      dataArr: res.dataArr,
      selectedIdx: res.selectedIdx
    });
  }

  updateSelectedIdx(newIdx) {
    this.setState({ selectedIdx: newIdx });
  }

  async handleApprove() {
    const selectedItem = this.state.dataArr[this.state.selectedIdx];
    await this.props.onApprove(selectedItem);
    this.setState((prevState, props) => removeItemAndUpdateIdx(prevState, "dataArr", "selectedIdx"));
  }

  async handleReject() {
    const selectedItem = this.state.dataArr[this.state.selectedIdx];
    await this.props.onReject(selectedItem)
    this.setState((prevState, props) => removeItemAndUpdateIdx(prevState, "dataArr", "selectedIdx"));
  }

  render() {
    let contentBelowNavigation = null;
    if(this.state.dataArr && this.state.dataArr.length > 0 && this.state.selectedIdx !== null) {
      const selectedItem = this.state.dataArr[this.state.selectedIdx];
      contentBelowNavigation = (
        <div>
          {this.props.children(selectedItem)}
          <ApprovalButtons 
            approveConfirmMsg={this.props.approveConfirmMsg}
            btnApproveName={this.props.btnApproveName}
            rejectConfirmMsg={this.props.rejectConfirmMsg}
            btnRejectName={this.props.btnRejectName}
            onApprove={this.handleApprove}
            onReject={this.handleReject}
          />
        </div>
      );
    }

    return (
      <DivWithLoader data={this.state.dataArr}>
        <ListNavigation
          dataArr={this.state.dataArr}
          selectedIdx={this.state.selectedIdx}
          onChangeSelectedIdx={this.updateSelectedIdx}
        />
        {contentBelowNavigation}
      </DivWithLoader>
    );
  }
}

export default ApprovalWithNavigation;