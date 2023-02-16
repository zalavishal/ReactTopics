
import React, { useState, useCallback, useMemo } from 'react'


var funccount = new Set();
const App = () => {


const [count, setCount] = useState(0)
const [number, setNumber] = useState(0)

const incrementCounter = useCallback(() => {
setCount(count + 1)
}, [count])
const decrementCounter = useCallback(() => {
setCount(count - 1)
}, [count])
const incrementNumber = useCallback(() => {
setNumber(number + 1)
}, [number])

funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
console.log(funccount.size);
console.log(count);
console.log(count);

return (
	<div>
        <h2>usememo returns memoized callback</h2>
        <br />
        <h2>The React useCallback Hook returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render.</h2>
        <br />
        <br />
        <br />
	Count: {count}
	Count: {number}
	<button onClick={incrementCounter}>
		Increase counter
	</button>
	<button onClick={decrementCounter}>
		Decrease Counter
	</button>
	<button onClick={incrementNumber}>
		increase number
	</button>
	</div>
)
}


export default App;







// import React, { useState, useCallback } from 'react'
// const funccount = new Set();
// const App = () => {


// const [count, setCount] = useState(0)
// const [number, setNumber] = useState(0)

// const incrementCounter = () => {
// 	setCount(count + 1)
// }
// const decrementCounter = () => {
// 	setCount(count - 1)
// }

// const incrementNumber = () => {
// 	setNumber(number + 1)
// }

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// console.log(funccount.size);
// console.log(count);
// console.log(count);
// return (
// 	<div>
// 	Count: {count}
// 	<button onClick={incrementCounter}>
// 		Increase counter
// 	</button>
// 	<button onClick={decrementCounter}>
// 		Decrease Counter
// 	</button>
// 	<button onClick={incrementNumber}>
// 		increase number
// 	</button>
// 	</div>
// )
// }


// export default App;
