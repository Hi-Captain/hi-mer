import React, { Component } from 'react';
import './App.css';
import CountUp from './Components/CountUp';
import CountDown from './Components/CountDown';

class App extends Component {
  constructor(props){
    super(props)
    this._tikTok()
    this.state = {
      now : (new Date()).toLocaleString()
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.now}
        <div className="wrap">
          <CountUp />
          <CountDown />
        </div>
      </div>
    );
  }

  _tikTok(){
    setInterval(() => {
      this.setState({
        now : (new Date()).toLocaleString()
      })
    }, 1000)
  }
}

export default App;
