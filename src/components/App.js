import React, { Component } from 'react';
import CatItemsContainer from '../containers/CatItemsContainer';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React <img src={logo} className="App-logo" alt="logo" /> Cats</h2>
          <h3>Their pictures, their facts…</h3>
          <p className="App-intro">
          Look at cats, and learn a bit about them while wasting your time.
          </p>
        </div>
        <CatItemsContainer />
      </div>
    );
  }
}

export default App;
