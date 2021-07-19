import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  formatTime({min, sec}) {
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    return `${min} : ${sec}`;
  }
  render() {
    var time = this.formatTime(this.props.time);
    var time2 = this.formatTime(this.props.time2);
    return (
      <React.Fragment>
        <div>{time}</div>
        <div>{time2}</div>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state){
  return {
    time : state.time,
    time2 : state.time2
  }
}

export default connect(mapStateToProps)(App);
