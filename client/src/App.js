import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: [],
      appMounted: false
    }
  }

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
