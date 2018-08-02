import React, { Component } from 'react';

const d = new Date()
const Hour = '00' + d.getHours()
const Min = '00' + d.getMinutes()
const Sec = '00' + d.getSeconds()
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      HH: Hour.substr(Hour.length - 2, 2),
      MM: Min.substr(Min.length - 2, 2),
      SS: Sec.substr(Sec.length - 2, 2)
    }
    this._tikTok()
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  _tikTok(){
    this.interval = setInterval(() => {
      const d = new Date()
      const Hour = '00' + d.getHours()
      const Min = '00' + d.getMinutes()
      const Sec = '00' + d.getSeconds()
      this.setState({
        HH: Hour.substr(Hour.length - 2, 2),
        MM: Min.substr(Min.length - 2, 2),
        SS: Sec.substr(Sec.length - 2, 2)
      })
    }, 1000)
  }
  render(){
    return(
      <div className="main">
        <div className="ko-start">현재시간은</div>
        <div className="Home_time">{this.state.HH}:{this.state.MM}:{this.state.SS}</div>
        <div className="ko-end">입니다.</div>
      </div>
    )
  }
}