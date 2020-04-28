import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <div className="App">
          <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/signup" component={SignUp} exact/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App

