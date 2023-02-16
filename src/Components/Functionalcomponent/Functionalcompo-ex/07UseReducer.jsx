import React from 'react';
import { useReducer } from 'react';

function reducer(state, Action) {
    console.log("state", state);
    console.log("Action", Action);
    switch (Action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: Action.nextName,
                age: state.age
            };
        }
    }
    throw Error('unknown Action:' + Action.type);
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { name: 'taylor', age: 26 });
    function handleButtonClick() {

        dispatch({ type: 'incremented_age' });
    }
    function handleInputChange(e) { 

        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        });
    }
    return (
        <>
            <input
                value={state.name}
                onChange={handleInputChange} />
            <button onClick={handleButtonClick}>increment age</button>
            <p>Hello, {state.name}. You are {state.age}.</p>
        </>
    );
};

export default UseReducer;







// import React from 'react';
// import { useReducer } from 'react';


// function reducer (state,Action){
//     if (Action.type === 'incremented_age') {
//         return{
//             age: state.age + 1
//         };
//     }
// }

// function UseReducer() {
//     const [state,dispatch] = useReducer(reducer,{age:42});
//     return (
//         <>
//             <button onClick={() => {
//                 dispatch({ type: 'incremented_age' })
//             }}>increment age</button>
//             <p>Hello! You are {state.age}</p>
//         </>
//     );
// };

// export default UseReducer;

