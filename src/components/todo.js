import React from "react";
import { Link } from "react-router-dom";
import "../styles/todo.css"
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import {Provider} from './context'


class Todo extends React.Component {
  render() {
    return (
        <Provider>
        <div id="heading" className = "app-container">
          <h1 style={{color:"wheat",marginTop:"10px",fontSize:"50px"}}>To-Do List</h1>
          <Addtodo></Addtodo>
          <Todos></Todos>
        </div>
        </Provider>
    );
  }
}
export default Todo;
