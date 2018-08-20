import TimeFormat from './TimeFormat';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LapRow extends Component {
  static propTypes = {
    index : PropTypes.number,
    value : PropTypes.number
  }
  shouldComponentUpdate(nextProps, nextState){
    return this.props.value !== nextProps.value
  }

  render() {
    const {index, value} = this.props
    return(
      <tr className="lap" id={'lap'+ (index + 1)}>
        <td>{index}</td>
        <td><TimeFormat className="lap-time" time={value} msec={true}/></td>
      </tr>
    )
  }
}

export default LapRow;