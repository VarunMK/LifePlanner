import React, { Component } from "react";
import {
  Route,
  HashRouter,
} from "react-router-dom";
import timer from "./components/pomodoro";
import planner from "./components/planner";
import expense from "./components/expense";
import settings from "./components/settings";
import todo from "./components/todo";
import history from "./history";
import Nav from "./components/Nav";
import Particles from "react-particles-js";
import {Layout} from "antd";
import "./styles/planner.css";
import "bootstrap/dist/css/bootstrap.min.css";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <HashRouter history={history}>
        <Content id="content">
        <Particles
          id="particles-js"
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 1200,
                },
              },
              color: {
                value: ["#587798"],
              },
            },
          }}
        />
        <Nav />
        <Route path="/" exact component={planner} />
        <Route path="/todo" exact component={todo} />
        <Route path="/pomodoro" exact component={timer} />
        <Route path="/expense" exact component={expense} />
        {/* <Route path="/settings" exact component={settings} /> */}
        </Content>
      </HashRouter>
    </Layout>
  );
}

export default App;
