import React, { Component } from 'react';
import './App.css';
import CountUp from './Components/CountUp';
import CountDown from './Components/CountDown';

class App extends Component {
  constructor(props){
    super(props)
    this._tikTok()
    this.state = {
      now : (new Date()).toLocaleTimeString()
    }
  }

  render() {
    return (
      <div className="App">
        현재시간은 {this.state.now} 입니다.
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
        now : (new Date()).toLocaleTimeString()
      })
    }, 1000)
  }
}

export default App;
