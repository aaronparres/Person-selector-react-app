import React, { Component } from 'react';
import './App.css';
import PersonSelector from './components/PersonSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonSelector />
      </div>
    );
  }
}

export default App;
