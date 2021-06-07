import React, { useState } from "react";
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos(todos => [...todos, todo])
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const renderTodos = todos.map(todo => {
        return (
            <Todo 
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                handleRemove={remove}
            />
        )
    })

    return (
        <div>
            <NewTodoForm createTodo={addTodo}/>
            <ul>{renderTodos}</ul>
        </div>
    )
}


export default TodoList;