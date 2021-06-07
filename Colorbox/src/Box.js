import React from "react";

function Box({ id, backgroundColor="green", width=11, height=11, handleRemove }) {
    const remove = () => handleRemove(id);
    return (
        <div style={{
            backgroundColor,
            width: `${width}em`,
            height: `${height}em`
        }}>
         <button onClick={remove}>Remove box</button>
        </div>
    )
}

export default Box;