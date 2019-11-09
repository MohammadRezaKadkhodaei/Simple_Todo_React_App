import React from 'react';
const ShowTodos = ({todos, updateTodo, removeTodo}) =>{
    return(
        <div className="todos-list">
        <h1 className="orange-color">Todo App</h1>
            {todos.map(todo =>(
            <div className="todo" key={todo.id}>
                <div className={todo.done ? 'todo-status-text line-through' : 'todo-status-text'} onClick={() => updateTodo(todo.id)}>
                <div className={todo.done ? 'status done' : 'status'}></div>
                <p>{todo.desc}</p>  
                </div>
            <span onClick={() => removeTodo(todo.id)}>+</span>
            </div>
        ))}
        </div>
    )
} 
export default ShowTodos;