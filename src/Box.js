import React from "react";

function Box({ id, backgroundColor="green", width=11, height=11 }) {
    return (
        <div style={{
            backgroundColor,
            width: `${width}em`,
            height: `${height}em`
        }}>
        </div>
    )
}

export default Box;