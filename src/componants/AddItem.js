import React, { useState } from 'react';

function AddItem(props) {

    const { onAdd } = props;

    let itemName = "";
    const [itemNames, setItemNames] = useState([]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAdd(itemName)
        // setItemNames((prev) => [...prev, itemName])
    }
    // console.log(itemNames);
    const onInputHandler = (event) => {
        itemName = event.target.value;
    }
    


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label for="input-id">Item Name </label>
                    <input id='input-id' onChange={onInputHandler} />
                </div>
                <br />
                <div><button type='submit'>Add</button></div>
            </form>
            <div>
                {/* <ul>
                    {itemNames ?
                        itemNames.map((x, i) => {
                            return <li>{x}</li>

                        }) : ""}
                </ul> */}
            </div>
        </div>
    );
}

export default AddItem;