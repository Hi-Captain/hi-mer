import React, { Component } from 'react';

export default class UpFormat extends Component {
  _getTemplate = () => {
    const seconds = this.props.time / 1000;
    return {
      hour: Math.floor(seconds / 3600).toString(),
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(2).substr(2)
    }
  }

  _addZero = (t) => {
    const value = '00' + t
    return value.substr(value.length - 2, 2)
  }

  render(){
    const template = this._getTemplate();
    return (
      <div>
        <span>{this._addZero(template.hour)}:</span>
        <span>{this._addZero(template.min)}:</span>
        <span>{this._addZero(template.sec)}.</span>
        <span>{template.msec}</span>
      </div>
    )
  }
}