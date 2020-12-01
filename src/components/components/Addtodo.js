import React,{Component} from 'react'
import {Consumer} from '../context'
import axios from "axios"   //to connect to the database

export default class Addtodo extends Component {
  state={
    id:4,
    title: "",
    complete: false
  }
  update = (e)=>{
    this.setState({
      title: e.target.value
    })
  }
  add=(dispatch, e)=>{
    e.preventDefault()
    const newTodo = this.state
    axios.post("/todos", newTodo)
    .then(res=>dispatch({type:"ADD", payload: res.data}))
    this.setState({title: ""})
  }
  render() {
    return (
      <Consumer>{value =>{
        const {dispatch}  = value
        return <form onSubmit={this.add.bind(this, dispatch)}>
          <input type="text" className="form-control form-control-lg rounded-0" placeholder="Enter task here" onChange={this.update}
          value = {this.state.title}/>
          <button className="form-control form-control-lg rounded-0 btn-info btn-outline-black" type="submit">Add</button>
        </form>
      }}</Consumer>

    )
  }
}
