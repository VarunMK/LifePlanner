import React from "react";
import { Link } from "react-router-dom";
import "../styles/planner.css"

class Expense extends React.Component {
  render() {
    return (
        <div id="heading">
          <h1 style={{color:"wheat",marginTop:"10px",fontSize:"38px"}}>To-Do List</h1>
        </div>
    );
  }
}
export default Expense;