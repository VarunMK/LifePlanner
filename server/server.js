const express = require("express")  //server side nodejs framework
const mongoose = require("mongoose") //database

const app = express()
app.use(express.json())  //instead of body parser

const db = "mongodb://localhost:27017/mytodo"  //local mongodb database collection name mytodo

mongoose.connect(db, ({useNewURLParser:true}))
.then(console.log("Connected to MongoDB"))  //promise based
.catch(err=>console.log(err))  //to catch error

const todoSchema = new mongoose.Schema({  //schema for the model
  title: String,
  complete : {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('todo', todoSchema)  //model

app.get("/todos", (req,res)=>{                  //GET request
  Todo.find().then(todo => res.json(todo))
})

app.post("/todos", (req,res)=>{                //POST request
  const newTodo = new Todo({   //instance of Todo model
    title: req.body.title
  })
  newTodo.save().then(todo => res.json(todo))
})

app.delete("/todos/:id", (req,res)=>{          //DELETE request
  Todo.findByIdAndDelete(req.params.id)
  .then(()=>res.json({remove:true}))
})

app.listen(5000, ()=>{  //client side is running at 3000
  console.log("server is running at port 5000")
})
