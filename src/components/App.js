import React, { Component } from 'react';
import CatItemsContainer from '../containers/CatItemsContainer';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cats</h2>
          <h3>Their pictures...and their facts...</h3>
        </div>
        <main className="App-main">
          <p className="App-intro">
            Cat pictures and facts go here.
          </p>
          <CatItemsContainer />
        </main>
      </div>
    );
  }
}

export default App;
