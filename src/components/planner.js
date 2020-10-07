import React from "react";
import { Link } from "react-router-dom";
import "../styles/planner.css"

class Planner extends React.Component {
  render() {
    return (
        <div id="heading">
            <h1 style={{color:"#f6faa7"}}>Life Planner</h1>
            <h2 style={{color:"#badfe3",marginBottom:"30px"}}>Organize your life using our simple tool.</h2>
            <p style={{color:"white"}}>Life Planner makes it easier for users to <br/>organize their work, time table and keep track of expenses.</p>
        </div>
    );
  }
}

export default Planner;