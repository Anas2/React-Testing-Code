import React, { useState } from 'react';

function Item(props) {

    const [title, setTitle] = useState(props.title);

    const changeIt = () => {
        setTitle("Updated" + title)
    }


    return (
        <div style={{ textAlign: "center" }}>
            <div>{title}</div>
            <button onClick={changeIt}>Change</button>
        </div>
    );
}

export default Item;