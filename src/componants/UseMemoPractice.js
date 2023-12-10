import React, { useCallback, useMemo, useState } from 'react';
import UseMemoChild from '../UseMemoChild';

function UseMemoPractice(props) {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const [forChild, setForChild] = useState([]);


    const IncrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const IncrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        console.log("called isEven");
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne])

    // ================
    
    // useCallBack Hook start
    const fun = useCallback(()=>{
        console.log("Hello Anas");
    },forChild) 
    // useCallBack Hook end

    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: 20 }}>

            <UseMemoChild forChild={forChild} fun={fun} />
            <br />
            <button onClick={IncrementOne}> counterOne - {counterOne} </button>
            <span> {isEven ? "Even" : "Odd"} </span>
            <button onClick={IncrementTwo}> counterTwo - {counterTwo} </button>
        </div >
    );
}

export default UseMemoPractice;