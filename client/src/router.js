import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './components/posts/Admin/Login/login'
import Register from './components/posts/Admin/Register/register'
import PostWork from './components/posts/works/works'
import Home from './home'
import EditWork from './components/posts/works/EditWork'
export default class router extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/" strict exact={true} component={Home}/>
            <Route path="/work/:id" strict exact={true} component={EditWork}/>
            <Route path="/login" strict exact={true} component={Login}/>
            <Route path="/register" strict exact={true} component={Register}/>
            <Route path="/post-project" strict exact={true} component={PostWork}/>
          </Switch>
      </div>
    )
  }
}
