// import React from 'react';

// const Clock = () => {

//     function tick() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {new Date().toLocaleTimeString()}.</h2>
//             </div>
//         );
//         // root.render(element);
//     }
//     return (
//         <>
//             {tick()}
//         </>
//     );
// };

// export default Clock;






import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString('LED'));

  useEffect(() => {
    document.title = date;
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date().toLocaleTimeString('LED'));
  };

  return <div>{date}</div>;
};

export default Clock;