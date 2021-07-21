import React from 'react';
import  { connect } from 'react-redux';


class App extends React.Component {
  constructor(props){
    super(props);
  }
  formatTime({min, sec}){
          if (min<10) min = "0" + min;
          if (sec<10) sec = "0" + sec;
          return `${min} : ${sec}`;
        }
  render() {
    var time = this.formatTime(this.props.time);
    var time2 = this.formatTime(this.props.time2);
    return (
      <div>{time}/{time2}</div>
    )
  }
}
function mapStateToProps(state){
  return{
    time : state.time,
    time2 : state.time2
  }
}

export default connect(mapStateToProps)(App);
