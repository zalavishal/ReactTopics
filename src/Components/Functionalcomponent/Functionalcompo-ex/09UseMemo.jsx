import React, { useMemo, useState } from 'react';

const UseMemoExample = () => {
    const [count, setcount] = useState(0);
    const [item, setitem] = useState(10);

    const multiCountmemo = useMemo(function multiCount() {
        console.log(multiCount);
        return count * 5
    },[count])

    return (
        <div>
            <h1>usememo returns memoized value</h1>
            <br />
            <h1>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies)</h1>
            <br />
            <br />
            <br />
            <h3>count:{count}</h3>
            <h3>count:{item}</h3>
            <h3>multiCount:{multiCountmemo}</h3>
            <button onClick={() => setcount(count + 1)}>
                update count
            </button>
            <button onClick={() => setitem(item * 10)}>
                update item
            </button>
        </div>
    );
};

export default UseMemoExample;