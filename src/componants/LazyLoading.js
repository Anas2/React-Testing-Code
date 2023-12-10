import React, { Suspense, lazy, useState } from 'react';
// import LazyLoadExample from '../LazyLoadExample';

const LazyLoadExample = lazy(() => import('../LazyLoadExample'));

function LazyLoading(props) {


    const [btn, setBtn] = useState(0)

    const callBtn = () => {
        setBtn(btn + 1);
    }

    return (
        <div>
            <Suspense fallback={<div style={{ textAlign: "center" }}><h1>Loading...</h1></div>}>

                <LazyLoadExample />
            </Suspense>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                <h1>Hello</h1>
                <h1>Good</h1>
                <h1>Morning</h1>
            </div>
            
            <div style={{ textAlign: "center" }}>
                <h1>{btn}</h1>
                <button onClick={callBtn}>Click Me</button>
            </div>
        </div>
    );
}

export default LazyLoading;