import React, { Component } from 'react';
import './ListNavigationHeader.scss';
import Button from '@material-ui/core/Button';

class ListNavigationHeader extends Component {
  render() {
    const dataArr = this.props.dataArr;
    const selectedIdx = this.props.selectedIdx || (dataArr && dataArr.length > 0 ? 0 : null);

    return (
      <div className="container">
        <Button 
          variant="contained"
          color="primary"
          onClick={this.props.onLeftClick}
          disabled={!selectedIdx}
        >
          {'<'}
        </Button>
        &nbsp;
        {selectedIdx !== null ? (selectedIdx + 1) : 0}/{dataArr.length}
        &nbsp;
        <Button 
          variant="contained"
          color="primary"
          onClick={this.props.onRightClick}
          disabled={selectedIdx === null || selectedIdx === (dataArr.length - 1)}
        >
          {'>'}
        </Button>
      </div>
    );
  }
}

export default ListNavigationHeader;