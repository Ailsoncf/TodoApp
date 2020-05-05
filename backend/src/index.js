const express = require('express')
const restful = require('node-restful')

const mongoose = restful.mongoose

const app = express();
 
app.use(express.json());
 
mongoose.connect('mongodb+srv://ailson:ailson@cluster0-462ws.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const todoSchema = mongoose.Schema({
    description:{ type: String, required: true},
    done: { type: Boolean, required: true, default: false},
    createdAt: {type: Date , default: Date.now}
  })

const Todo = restful.model('resource', todoSchema)

const Resource = app.todo = Todo.methods(['get', 'post', 'put', 'delete']);
 
Resource.register(app, '/todo');
 
app.listen(3000);