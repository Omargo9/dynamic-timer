import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Seconds from './Components/Time.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Seconds />
        
      
      </div>
    );
  }
}

export default App;
