import React, { Component } from 'react';
import TimeFormat from './TimeFormat';

const oneHour = 3600000;
const oneMin = 60000;
const oneSec = 1000;
const maxHour = 9;
export default class CountUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      running: false
    }
  }

  componentDidUpdate(){
    if(this.state.time > oneHour * maxHour){
      alert("타이머 최대시간은" + maxHour + "시간 입니다.")
      this.setState({time: oneHour * maxHour})
    }

    if(this.state.time < 0){
      alert("음수 값은 지정 할 수 없습니다.")
      this.setState({time: 0})
    }

    if(this.state.running && this.state.time === 0){
      alert("타이머가 종료 되었습니다.")
      this._reset()
    } 
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    return (
      <div className="main Down-main">
        <div className="Down-title">
          <span>Hour</span><span>Min</span><span>Sec</span>
        </div>
        <div className="app-wrap">
          <span className="btn-row"><button onClick={this.state.running ? null : this._UpH}>▲</button><button onClick={this.state.running ? null : this._UpM}>▲</button><button onClick={this.state.running ? null : this._UpS}>▲</button></span>
          <TimeFormat className="Down-time" time={this.state.time} msec={false}/>
          <span className="btn-row"><button onClick={this.state.running ? null : this._DownH}>▼</button><button onClick={this.state.running ? null : this._DownM}>▼</button><button onClick={this.state.running ? null : this._DownS}>▼</button></span>
        </div>
        <div>
          <button className={this.state.running ? "Down-btn Down-btn__pause" : "Down-btn Down-btn__start" } onClick={this.state.time === 0 ? this._alert : this._run}>{this.state.running ? 'Pause' : 'Start'}</button>
          <button className={this.state.running ? "Down-btn Down-btn__cancel" : "Down-btn Down-btn__reset" } onClick={this._reset}>{this.state.running ? 'Cancel' : 'Reset'}</button>
        </div>
      </div>
    )
  }

  _UpH = () => {this.setState({time : this.state.time + oneHour})}
  _DownH = () => {this.setState({time : this.state.time - oneHour})}
  _UpM = () => {this.setState({time : this.state.time + oneMin})}
  _DownM = () => {this.setState({time : this.state.time - oneMin})}
  _UpS = () => {this.setState({time : this.state.time + oneSec})}
  _DownS = () => {this.setState({time : this.state.time - oneSec})}

  _run = () => {
    if(this.state.running){
      clearInterval(this.interval)
      this.setState({running: false})
    } else {
      this.setState({running: true})
      this.interval = setInterval(() => {this._DownS()}, 1000)
    }
  }

  _reset = () => {
    clearInterval(this.interval)
    this.setState({
      time: 0,
      running: false
    })
  }

  _alert = () => {
    alert('시간 값을 지정하세요')
  }
}