import React,{useState} from 'react';
import ShowTodos from './components/ShowTodos';
import CreateTodo from './components/CreateTodo'
import './App.css';

const App = () =>{
  const initialTodos = [
    {id:1, desc: "ssss", done: true},
  ]
  const [todos,setTodos] = useState(initialTodos)
  const addTodo = (text) => {
    let lastId = todos[todos.length-1].id
    let newTodo = {
      id: lastId +1,
      desc: text,
      done: false
    }
    let newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  const updateTodo = (id) => {
    let newTodos = [...todos]
    for(let i in newTodos){
      if(newTodos[i].id === id){
        newTodos[i].done = !newTodos[i].done
      }
    }
    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <ShowTodos todos={todos} updateTodo={updateTodo} removeTodo={removeTodo}/>
      <CreateTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
