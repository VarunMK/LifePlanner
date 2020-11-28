import React from "react";
import { Link } from "react-router-dom";
import "../styles/planner.css"
import Particles from 'react-particles-js';
class Nav extends React.Component {
  render() {
    return (
            <header class="header">
                <ul>
                    <div class="left">
                        <li class="logo">
                                <a className="titles" style={{textDecoration:"none",color:"#f3ff82"}} href="#">Life Planner</a>
                        </li>
                    </div>
                    <div class="right">
                        <li>
                            <Link to="/todo">Todo List</Link>
                            <Link to="/expense">Expense Tracker</Link>
                            <Link to="/pomodoro">Pomodoro</Link>
                        </li>
                    </div>
                </ul>
            </header>
    );
  }
}

export default Nav;