import React from 'react';

function TodoApp(props) {

    const add = ()=>{

    }
    return (
        <div>
            <div><input style={{padding:"10px",width:"200px"}} /> <button style={{ padding: "10px", border: "1px solid green" }} onClick={add}>Add</button></div>

        </div>
    );
}

export default TodoApp;