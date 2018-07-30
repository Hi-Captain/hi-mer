import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this._tikTok()
    this.state = {
      now : (new Date()).toLocaleString()
    }
  }
  _tikTok(){
    setInterval(() => {
      this.setState({
        now : (new Date()).toLocaleString()
      })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        {this.state.now}
      </div>
    );
  }
}

export default App;
