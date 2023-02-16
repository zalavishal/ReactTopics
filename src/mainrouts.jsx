import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage.jsx";
import PricingPage from "./PricingPage.jsx";
import Features from "./Features.jsx";
import Examples from "./Examples.jsx";
// import Examples from "./Examples.jsx";
// import Example1 from './Components/ClassComponent/Examples/Example1';
// import ClassComponent from "./Components/ClassComponent/ClassRout.jsx";

const ClassComponent = React.lazy(() => import('./Components/ClassComponent/ClassRout'))
const Functionalcomponent = React.lazy(() => import('./Components/Functionalcomponent/FunctionalRout'))
// const Example1 = React.lazy(() => import('./Components/ClassComponent/Examples/Example1'))

const MainRouts = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",  
    element: <HomePage />,
  },{
    path: "/about",
    element: <  AboutUsPage />,
  }, {
    path: "/pricing",
    element: <PricingPage />,
  }, {
    path: "/features",
    element: <Features />,
  }, {
    path: "/Examples",
    element: <Examples />,
    children: [
      {
        path: "classcomponent/*",
        element: <Suspense fallback={<h2>Loading...</h2>}><ClassComponent /></Suspense>,
      }, {
        path: "Functionalcomponent/*",
        element: <Suspense fallback={<h2>Loading...</h2>}><Functionalcomponent /></Suspense>,
      },
    ],
  },
]);

export default MainRouts;