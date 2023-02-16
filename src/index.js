import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {RouterProvider,createBrowserRouter} from "react-router-dom";

// import ComponentExample from './01ComponentExample';
// import HeaderCompo from './commonComponent/02Headerfile.jsx';

import MainRouts from './mainrouts';

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <div>Hello world!</div>,
//     },
//   ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <RouterProvider router={MainRouts} />
    {/* <RouterProvider router={router} /> */}

    {/* <MainRouts></MainRouts> */}
    
        {/* <HeaderCompo />
        <ComponentExample /> */}
     </>
);


