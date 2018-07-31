import React, { Component } from 'react';
import UpFormat from './UpFormat';

export default class CountUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      running: false
    }
  }

  render(){
    return (
      <div>
        {this.state.time}
        <UpFormat time={this.state.time}></UpFormat>
        <button onClick={this._run}>Start</button>
        {this.state.running ? '' : <button onClick={this._reset}>Reset</button>}
      </div>
    )
  }

  _run = (e) => {
    if(this.state.running){
      e.target.innerHTML = 'Start'
      clearInterval(this.interval)
      this.setState({
        running: false
      })
    } else {
      e.target.innerHTML = 'Stop'
      var startTime = new Date().getTime() - this.state.time
      this.interval = setInterval(() => {
        var getNow = new Date().getTime()
        var countUp = getNow - startTime
        this.setState({
          time: countUp,
          running: true
        })
      }, 10)
    }
  }

  _reset = () => {
    this.setState({
      time: 0,
      running: false
    })
  }
}