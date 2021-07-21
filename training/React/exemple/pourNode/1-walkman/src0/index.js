import React from "react";
import ReactDOM from "react-dom";


class Walkman extends React.Component {
  static states = {
    STOP: 'Stopped',
    PLAY: 'Playing',
  }
  state = {
    current: Walkman.states.STOP,
  }
  transition = (event) => {
    this.setState({ current: Walkman.states[event] })
  }
  render() {
    const Button = ({ children, event, active }) => {
      return (
        <button onClick={() => this.transition(event)}>
          {children}
        </button>
      )
    }
    return (
      <div>
        <div>{this.state.current}</div>
        <div>
          <Button event='STOP' active='Stopped'>◼</Button>
          <Button event='PLAY' active='Playing'>►</Button>
        </div>
      </div>
    )
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<Walkman />, rootElement);
