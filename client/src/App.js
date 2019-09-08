import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import Router from './router'
class App extends Component {
  render() {
    return (
      <div>
        <Route component={Router}/>
      </div>
    );
  }
}

export default App;
