import React,{useRef} from 'react';

const UseRef = () => {
    const inputRef=useRef(null)

    function handleInput() {
        console.warn("func call");
        inputRef.current.value="1000"
        inputRef.current.focus();
        inputRef.current.style.color="red"
        inputRef.current.style.display="none"
    }
    return (
        <div>
            <h2>useRef handle DOM</h2>
            <br />
            <h3>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called</h3>
            <br />
            <br />
            <br />
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>handle input</button>
        </div>
    );
};

export default UseRef;