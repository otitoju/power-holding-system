import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import Router from './router'
import './components/css/MDB-Free/css/mdb.min.css'
import './components/css/MDB-Free/css/bootstrap.min.css'
import './components/css/main.css'
import Header from './components/layout/header'
//import './components/css/font-awesome-4.7.0/css/font-awesome.min.css'

class App extends Component {
  render() {
    return (
      <div >
        <Route component={Header}/>
        <Route component={Router}/>
      </div>
    );
  }
}

export default App;
