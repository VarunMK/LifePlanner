import React from "react";
import { connect } from "react-redux";
import "../styles/planner.css";
import { changeCount } from "./actions";
import { Card } from "antd";
import { Divider } from "antd";

const getColor = (isOn) => {
  return isOn ? "#db2828" : "#21ba45";
};

const getText = (isOn) => {
  return isOn ? "Stop" : "Start";
};

class Timer extends React.Component {
  state = {
    isOn: false,
    time: {
      minutes: this.props.beginningTime.pomodoro.minutes,
      seconds: this.props.beginningTime.pomodoro.seconds,
    },
    timer: setInterval(this.tick, 1000),
    type: "Pomodoro",
  };

  getBeginTime = (type) => {
    if (type === "Pomodoro") {
      return {
        minutes: this.props.beginningTime.pomodoro.minutes,
        seconds: this.props.beginningTime.pomodoro.seconds,
      };
    } else if (type === "Short Break") {
      return {
        minutes: this.props.beginningTime.shortbreak.minutes,
        seconds: this.props.beginningTime.shortbreak.seconds,
      };
    } else {
      return {
        minutes: this.props.beginningTime.longbreak.minutes,
        seconds: this.props.beginningTime.longbreak.seconds,
      };
    }
  };

  tick = () => {
    const time = this.state.time;
    const minutes = time.minutes;
    const seconds = time.seconds;
    if (this.state.isOn) {
      if (minutes == 0 && seconds == 0) {
        alert(`${this.state.type} Done!`);
        this.resetButton(this.state.type);
        if (this.state.type === "Pomodoro") {
          this.props.changeCount(this.props.beginningTime.count);
        }
      } else if (seconds == 0) {
        this.setState({
          time: {
            minutes: minutes - 1,
            seconds: 59,
          },
        });
      } else {
        this.setState({
          time: {
            minutes: minutes,
            seconds: seconds - 1,
          },
        });
      }
    } else {
      clearInterval(this);
    }
  };

  startButton = () => {
    if (this.state.isOn) {
      this.setState({ isOn: false });
      clearInterval(this.state.timer);
    } else {
      this.setState({
        isOn: true,
      });
      this.setState({ timer: setInterval(this.tick, 1000) });
    }
  };

  resetButton = () => {
    this.setState({
      time: this.getBeginTime(this.state.type),
      isOn: false,
    });
    clearInterval(this.state.timer);
  };

  getHeading = () => {
    if (this.state.isOn) {
      return <div>{this.state.type} in progress...</div>;
    } else if (
      this.state.time.minutes === this.props.beginningTime.pomodoro.minutes
    )
      return <div>Start {this.state.type}</div>;
    else if (
      this.state.time.minutes === this.props.beginningTime.shortbreak.minutes
    )
      return <div>Start {this.state.type}</div>;
    else if (
      this.state.time.minutes === this.props.beginningTime.longbreak.minutes
    )
      return <div>Start {this.state.type}</div>;
    else return <div>Continue {this.state.type}</div>;
  };

  changeTimer = (timer) => {
    if (timer === 1) {
      this.resetButton();
      this.setState({
        time: this.getBeginTime("Pomodoro"),
        type: "Pomodoro",
      });
    } else if (timer === 2) {
      this.resetButton();
      this.setState({
        time: this.getBeginTime("Short Break"),
        type: "Short Break",
      });
    } else {
      this.resetButton();
      this.setState({
        time: this.getBeginTime("Long Break"),
        type: "Long Break",
      });
    }
  };

  render() {
    return (
      <Card style={{ width: "90%", margin: "0 auto", padding: "20px 0" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "45px", color: "#f6faa7" }}>
            {this.getHeading()}
          </h1>
          <Divider />
          <h1 style={{ fontSize: "90px", color: "whitesmoke" }}>
            {this.state.time.minutes + ":" + this.state.time.seconds}
          </h1>
          <br />
          <div>
            <button
              type="button" 
              class="btn btn-primary"
              style={{
                backgroundColor: `${getColor(this.state.isOn)}`,
                borderColor: `${getColor(this.state.isOn)}`,
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
              onClick={this.startButton}
            >
              {getText(this.state.isOn)}
            </button>
            <button
            type="button" 
            class="btn btn-primary"
              style={{
                borderColor:"gray",
                backgroundColor:"gray",
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
              onClick={this.resetButton}
            >
              Reset
            </button>
          </div>
          <br />
          <Divider />
          <h1 style={{ fontSize: "40px", color: "#badfe3" }}>Options</h1>
          <br />
          <div>
            <button
            type="button" 
            class="btn btn-primary"
              style={{
                background: "#db2828",
                borderColor: "#db2828",
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
              onClick={() => this.changeTimer(1)}
            >
              Pomodoro
            </button>
            <button
            type="button" 
            class="btn btn-primary"
              style={{
                background: "#21ba45",
                borderColor: "#21ba45",
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
              onClick={() => this.changeTimer(2)}
            >
              Short Break
            </button>
            <button
            type="button" 
            class="btn btn-primary"
              style={{
                background: "#2185d0",
                borderColor: "#2185d0",
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
              onClick={() => this.changeTimer(3)}
            >
              Long Break
            </button>
          </div>
          <br />
          <Divider />
          <h1 style={{ fontSize: "40px", color: "#badfe3" }}>Count</h1>
          <br />
          <h1 style={{ fontSize: "25px", color: "whitesmoke" }}>
            Number of Pomodoro Sessions done today:{" "}
            {this.props.beginningTime.count}
          </h1>
        </div>
        <Divider />
        <div>
          <p style={{ fontSize: "20px", color: "wheat" }}>
            The Pomodoro Technique is a time management method developed by
            Francesco Cirillo in the late 1980s. The technique uses a timer to
            break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for 'tomato', after the tomato-shaped kitchen
            timer that Cirillo used as a university student -{" "}
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
              Wikipedia
            </a>
          </p>
          <Divider />
          <br />
          <h1
            style={{
              fontSize: "40px",
              textAlign: "center",
              color: "#badfe3",
            }}
          >
            How to use the Pomodoro Technique?
          </h1>
          <br />
          <ul style={{ fontSize: "20px", color: "wheat" }}>
            <li>Decide on the task to be done.</li>
            <li>Set the pomodoro timer to Pomodoro mode (25 Minutes)</li>
            <li>Work on the task.</li>
            <li>
              Once the timer is up take a short break (5 Minutes). Once done,
              start a new task.
            </li>
            <li>After four pomodoros, take a long break (15 Minutes).</li>
            <li>Repeat</li>
          </ul>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beginningTime: state.beginningTime,
  };
};

export default connect(mapStateToProps, { changeCount })(Timer);
