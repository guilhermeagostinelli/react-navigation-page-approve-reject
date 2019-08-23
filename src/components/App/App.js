import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Home from '../Home/Home';
import AnyKindOfApproval from '../AnyKindOfApproval/AnyKindOfApproval';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/any-kind-of-approval" component={AnyKindOfApproval} />
          </Fragment>
        </Router>
      </header>
    </div>
  );
}

export default App;
