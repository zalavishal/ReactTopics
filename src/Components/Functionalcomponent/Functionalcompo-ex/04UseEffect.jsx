import React, { useState } from 'react';
import { useEffect } from 'react';


function StateInHooks () {
    // const data="somthing"
    const [statedata,setdata]=useState("somthing")
    const [count,setCount]=useState(0)
    let data="somthing"
    let btnClick = ()=>{
            console.log("colled");
            data = "cheking"
            console.log(data);
            setdata("data")
        }
        let increment = ()=>{
            setCount(count+1)
            console.log("btn called");
        }
        // useEffect(() => {
        //     console.log("useEffect called");
        //   });
        // useEffect(() => {
        //     console.log("useEffect called");
        //   },[],);
        useEffect(() => {
            console.log("useEffect called");
          },[btnClick],);
    return (
        <> 
        simple cariable data:{data}
        <br />
        state data:{statedata}
        <br />
         <button onClick={btnClick}>click</button>
         <br />
         <br />
         <h2>increment</h2>
         <button onClick={increment}>increment</button>{count}
         <button onClick={()=>{setCount(count-1)}}>decrement</button>
         <br />
         <br />
        </>
    );
};

export default StateInHooks;