import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Button} from 'mdbreact';
import axios from 'axios';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

  officeOn() {
    axios.get('https://maker.ifttt.com/trigger/Office_On/with/key/dWo86bkjmWq7VdRJ1T8p5a')
    .then(response => {
      console.log(response)
    })
  }

  officeOff() {
    axios.get('https://maker.ifttt.com/trigger/Office_Off/with/key/dWo86bkjmWq7VdRJ1T8p5a')
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Button onClick={this.officeOn} color="primary">Office On</Button>
          <Button onClick={this.officeOff} color="primary">Office Off</Button>

          </header>
      </div>
    );
  }
}

export default App;
