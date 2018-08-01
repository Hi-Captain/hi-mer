import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import CountUp from './Components/CountUp';
import CountDown from './Components/CountDown';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink className="btn btn-ctU" activeClassName="active" to="/countUp">Count-Up</NavLink>
            <NavLink className="btn btn-ctD" activeClassName="active" to="/countDown">Count-Down</NavLink>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/countUp' component={CountUp} />
            <Route path='/countDown' component={CountDown} />
          </Switch>
          <NavLink className="btn-home" to="/"><i className="menu__link-icon material-icons">home</i></NavLink>
        </div>
      </Router>
    );
  }
}

export default App;
