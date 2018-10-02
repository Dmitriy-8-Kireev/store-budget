import React, { Component } from 'react';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Market />
        <Farm />
      </div>
    );
  }
}
export default App;
