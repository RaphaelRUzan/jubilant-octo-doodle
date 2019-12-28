import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Nav from './Nav';
import Home from './Home';

class App extends Component {
  
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {};
  }
  render () {
    return (
      <Router>
        <Nav/>
        <div className="App">
          <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="*" component={Home}/>
          </Switch>
        </div>
      </Router>
    );}

}


export default App;
