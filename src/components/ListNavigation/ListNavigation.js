import React, { Component } from 'react';
import ListNavigationHeader from './ListNavigationHeader';

class ListNavigation extends Component {
  render() {
    return (
      <ListNavigationHeader
        dataArr={this.props.dataArr}
        selectedIdx={this.props.selectedIdx}
        onLeftClick={() => this.props.onChangeSelectedIdx(this.props.selectedIdx - 1)}
        onRightClick={() => this.props.onChangeSelectedIdx(this.props.selectedIdx + 1)}
      />
    );
  }
}

export default ListNavigation;