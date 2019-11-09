import React from 'react';
const ShowTodos = ({todos, updateTodo, removeTodo}) =>{
    return(
        <div>
        <h1>eeeee</h1>
            {todos.map(todo =>(
            <div key={todo.id}>
                <div onClick={() => updateTodo(todo.id)}>
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