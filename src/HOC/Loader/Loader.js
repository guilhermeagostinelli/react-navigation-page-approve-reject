import React, { Component } from 'react';
import './Loader.scss';

const isEmpty = prop => (
  prop === null ||
  prop === undefined ||
  // (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const Loader = loadingProp => WrappedComponent => {
  return class Loader extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props} />;
    }
  }
}


export default Loader;