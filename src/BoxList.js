import React, { useState } from "react";
import Box from './Box'
import NewBoxForm from './NewBoxForm'


function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        setBoxes(boxes => [...boxes, box])
    };

    const renderBoxes = boxes.map(box => {
        return (
            <Box 
                key={box.id}
                id={box.id}
                backgroundColor={box.backgroundColor}
                width={box.width}
                height={box.height}
            />
        )
    })

    return (
        <div>
            <div><NewBoxForm createBox={addBox}/>
            {renderBoxes}</div>
        </div>
    )
}

export default BoxList;