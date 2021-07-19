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
    return (
      <div>{time}</div>
    )
  }
}
function mapStateToProps(state){
  return{
    time : state.time
  }
}

export default connect(mapStateToProps)(App);
