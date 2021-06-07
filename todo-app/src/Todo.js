import React from "react";

function Todo({ id, todo="Feed the cat", handleRemove }) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <li>{todo}</li>
             <button onClick={remove}>Remove todo</button>
        </div>
    )
}

export default Todo;