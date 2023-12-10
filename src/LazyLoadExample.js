import React, { memo } from 'react';

function LazyLoadExample(props) {

    const load = () => {
        console.log("LazyLoadExample Component Called");
        let i = 0;
        while (i < 200000000) i++;
        return "Hello From Lazy Loading"
    }

    return (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h1>{load()}</h1>
        </div>
    );
}

export default memo(LazyLoadExample);