import React, { useState } from 'react';
import "./stateCss.css";

function StateInHooks ()  {
    // const data="somthing"
    const [statedata, setdata] = useState("somthing")
    const [count, setCount] = useState(0)
    let data = "somthing"
    let btnClick = () => {
        console.log("colled");
        data = "cheking"
        console.log(data);
        setdata("data")
    }
    let increment = () => {
        setCount(count + 1)
    }
    const [color, setcolor] = useState("orange")
    let colors = (e) => {
        console.log(e.target.value);
        if (e.target.value === "orange") {
            setcolor("orange")
        }
        if (e.target.value === "BlueAndRed") {
            setcolor("BlueAndRed")
        }
        if (e.target.value === "green") {
            setcolor("green")
        }
        if (e.target.value === "darkmagenta") {
            setcolor("darkmagenta")
        }
    }
    return (
        <>
            <br />
            <br />
            <br />
            <div>
            <h6>(state ae variable jevu kam kre che value ne hold kre che and change kri shke che and component ne refresh kre che)</h6>
            </div>
            <br />
            <br />
            simple variable data:{data}
            <br />
            state data:{statedata}
            <br />
            <button onClick={btnClick}>click</button>
            <br />
            <br />
            <h2>increment</h2>
            <button onClick={increment}>increment</button>{count}
            <button onClick={() => { setCount(count - 1) }}>decrement</button>
            <br />
            <br />
            <select onChange={colors} aria-label="Default select example">
                <option  value="orange">orange</option>
                <option  value="BlueAndRed">BlueAndRed</option>
                <option  value="green">green</option>
                <option  value="darkmagenta">darkmagenta</option>
            </select>
            <div className={color}>
            </div>
        </>
    );
};

export default StateInHooks;