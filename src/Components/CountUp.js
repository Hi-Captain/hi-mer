import React, { Component } from 'react';
import TimeFormat from './TimeFormat';

const max = 359999990

export default class CountUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      running: false,
      lap: []
    }
  }

  componentDidUpdate(){
    if(this.state.time > max){
      alert("측정할 수 있는 시간을 초과하였습니다.")
      clearInterval(this.interval)
      this.setState({
        time: max,
        running: false
      })
    }
  }

  render(){
    return (
      <div className="main">
        <TimeFormat className="view-time" time={this.state.time} msec={true}/>
        <button onClick={this._run}>{this.state.running ? 'Stop' : 'Start'}</button>
        <button onClick={this.state.running ? this._lap : this._reset}>{this.state.running ? 'Lap' : 'Reset'}</button>
        <table className="time-table">
          <tbody>
          <tr className={this.state.lap.length > 0 ? 'thead' : 'empty'}>
            <td>No.</td>
            <td>TIme</td>
          </tr>
          {this.state.lap.map((value, i) => {
            return(
              <tr key={i}>
                <td>{++i}</td>
                <td><TimeFormat className="lap-time" time={value} msec={true}/></td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }

  _run = () => {
    if(this.state.running){
      clearInterval(this.interval)
      this.setState({
        running: false
      })
    } else {
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
    clearInterval(this.interval)
    this.setState({
      time: 0,
      running: false,
      lap: []
    })
  }

  _lap = () => {
    this.state.lap.push(this.state.time)
  }
}