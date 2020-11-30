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
                            <Link to="/todo" style={{textDecoration:"none"}}>Todo List</Link>
                            <Link to="/expense" style={{textDecoration:"none"}}>Expense Tracker</Link>
                            <Link to="/pomodoro" style={{textDecoration:"none"}}>Pomodoro</Link>
                            <Link to="/settings" style={{textDecoration:"none"}}>Settings</Link>
                    </div>
                </ul>
            </header>
    );
  }
}

export default Nav;