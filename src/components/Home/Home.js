import React, { Component } from 'react';
import logo from '../../imgs/logo.svg';
import Grid from '@material-ui/core/Grid';
import LinkButton from '../LinkButton/LinkButton';

class Home extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <LinkButton to='/any-kind-of-approval'>Any Kind of Approval</LinkButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;