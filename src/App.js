import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import pomodoro from "./components/pomodoro";
import planner from "./components/planner";
import expense from "./components/expense";
import todo from "./components/todo";
import history from "./history";
import Nav from "./components/Nav";
import Particles from 'react-particles-js';
import "./styles/planner.css"
function App() {
  return (
    <HashRouter history={history}>
      <Particles id="particles-js" params={{ 
          particles: { 
            number: { 
              value: 150, 
              density: { 
                enable: true, 
                value_area: 1200,
              }
            }, 
        color: {
                  value: ['#587798']
                }
          }, 
        }} 
      />
      <Nav/>
      <Route path="/" exact component={planner} />
      <Route path="/todo" exact component={todo} />
      <Route path="/pomodoro" exact component={pomodoro} />
      <Route path="/expense" exact component={expense} />
    </HashRouter>
  );
}

export default App;
