import React from "react";
import "./App.css";
import iconUrl from "./icons";

class App extends React.Component {
  timer = 0;
  state = {
    buttonActive: true,
    counterActive: true,
    counter: 0
  };

  updateTime = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    } else {
      this.setState({ counterActive: true });
      clearInterval(this.timer);
    }
  };

  updateCounter = param => {
    // if (this.state.buttonActive) {
    // this.setState({ buttonActive: false });
    if (param === 0) {
      this.setState({ counter: (this.state.counter += 1) });
    }
    if (param === 1) this.setState({ counter: (this.state.counter -= 1) });
    if (param === 2) this.setState({ counter: 0 });
    // } else this.setState({ buttonActive: true });
  };

  startCounter = () => {
    this.timer = setInterval(this.updateTime, 1000);
    this.setState({ counterActive: false });
  };

  pauseCounter = () => {
    clearInterval(this.timer);
    this.setState({ counterActive: true });
  };

  stopCounter = () => {
    clearInterval(this.timer);
    this.setState({ counter: 0, counterActive: true });
  };

  render() {
    return (
      <div className="Main">
        <div className="Sub" draggable>
          <h1 className="Header">{this.state.counter}</h1>
          <div className="Container">
            <div
              className="Button"
              onClick={() => this.updateCounter(0)}
              style={{
                backgroundColor: this.state.buttonActive ? "white" : "blue",
                color: this.state.buttonActive ? "black" : "white",
                width: 60,
                height: 40
              }}
            >
              +
            </div>
            <div
              className="Button"
              onClick={() => this.updateCounter(1)}
              style={{
                backgroundColor: this.state.buttonActive ? "white" : "blue",
                color: this.state.buttonActive ? "black" : "white",
                width: 60,
                height: 40
              }}
            >
              -
            </div>
            <div style={{ width: 100 }}></div>
            <div
              className="Button"
              onClick={() => this.startCounter()}
              style={{
                backgroundColor: this.state.buttonActive ? "white" : "blue",
                color: this.state.buttonActive ? "black" : "white",
                width: 60,
                height: 40
              }}
            >
              <img
                src={this.state.counterActive ? iconUrl.iconStart : iconUrl.iconPause}
                width="30"
                height="30"
              />
            </div>
            <div
              className="Button"
              onClick={() => this.stopCounter()}
              style={{
                backgroundColor: this.state.buttonActive ? "white" : "blue",
                color: this.state.buttonActive ? "black" : "white",
                width: 60,
                height: 40
              }}
            >
              <img src={iconUrl.iconStop} width="30" height="30" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
