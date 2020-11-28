import React from "react";
import { Button, Layout, Menu } from "antd";
import { Divider } from "antd";
import { connect } from "react-redux";
import "../styles/planner.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const Pomodoro =()=>{
    return (
      <div className="App">
        <div id="color2"></div>
        <h1 className="sec-head" style={{ textAlign: "center" }}>
          Timer
        </h1>
        <Divider />
        <div style={{ textAlign: "center" }} className="to">
          <h1 style={{ fontSize: "45px" }}>Start Workout</h1>
          <h1 style={{ fontSize: "90px" }}>
              0:00
          </h1>
          <div>
            <Button
              type="primary"
              style={{
                backgroundColor:"red",
                borderColor: "red",
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
            >
                Start
            </Button>
            <Button
              type="primary"
              style={{
                background: "#595959",
                borderColor: "#595959",
                margin: "0 10px",
                width: "200px",
                height: "40px",
                fontSize: "18px",
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <br />
        <Divider />
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px" }}>Options</h1>
          <Button
            type="primary"
            style={{
              background: "#21ba45",
              borderColor: "#21ba45",
              margin: "0 10px",
              width: "200px",
              height: "40px",
              fontSize: "18px",
            }}
          >
            Easy
          </Button>
          <Button
            type="primary"
            style={{
              background: "#2185d0",
              borderColor: "#2185d0",
              margin: "0 10px",
              width: "200px",
              height: "40px",
              fontSize: "18px",
            }}
          >
            Medium
          </Button>
          <Button
            type="primary"
            style={{
              background: "#db2828",
              borderColor: "#db2828",
              margin: "0 10px",
              width: "200px",
              height: "40px",
              fontSize: "18px",
            }}
          >
            Hard
          </Button>
        </div>
      </div>
    );
  }

export default Pomodoro;