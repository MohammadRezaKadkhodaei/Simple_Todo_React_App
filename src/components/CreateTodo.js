import React, {useState} from 'react';
const CreateTodo = ({addTodo}) =>{
    const [todoText, setTodoText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todoText)
        setTodoText('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="add a todo" value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
        </form>
    )
}
export default CreateTodo;