function Todo({ id, todo="Feed the cat", handleRemove }) {

    const remove = () => {
        handleRemove(id);
    }

    return (
        <div>
            <li>{todo}</li>
             <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;