import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Clock from './Functionalcompo-ex/01Clock';
import FunctionalCompoExample from './Functionalcompo-ex/02FunctionalCompo.jsx';
import StateInHooks from './Functionalcompo-ex/03StateInHooks'; 
import UseEffect from './Functionalcompo-ex/04UseEffect.jsx'; 
import UseLayoutEffect from './Functionalcompo-ex/05UseLayoutEffect.jsx'; 
import UseContext from './Functionalcompo-ex/06UseContext.jsx'; 
import UseReducer from './Functionalcompo-ex/07UseReducer.jsx'; 
import UseCallBack from './Functionalcompo-ex/08UseCallBack.jsx'; 
import UseMemo from './Functionalcompo-ex/09UseMemo.jsx'; 
import UseRef from './Functionalcompo-ex/10UseRef.jsx'; 


class FunctionalRout extends Component {

  render() {
    return (
      <>
        <div className='row'>
          <div className='col-6 offset-6'>
            <ul>
              <li><Link to="/Examples/Functionalcomponent/Clock"><p>clock</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/FunctionalCompoExample"><p>intro</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/StateInHooks"><p>state</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/UseEffect"><p>UseEffect</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/UseLayoutEffect"><p>UseLayoutEffect</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/UseContext"><p>UseContext</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/UseReducer"><p>UseReducer</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/UseCallBack"><p>UseCallBack</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/UseMemo"><p>UseMemo</p></Link></li>
              <li><Link to="/Examples/Functionalcomponent/UseRef"><p>UseRef</p></Link></li>
            </ul>
          </div>
          <div className='col-6 offset-6'>
            <Routes>
              <Route path="/Clock" element={<Clock />} />
              <Route path="/FunctionalCompoExample" element={<FunctionalCompoExample/>} />
              <Route path="/StateInHooks" element={<StateInHooks/>} />
              <Route path="/UseEffect" element={<UseEffect/>} />
              <Route path="/UseLayoutEffect" element={<UseLayoutEffect/>} />
              <Route path="/UseContext" element={<UseContext/>} />
              <Route path="/UseReducer" element={<UseReducer/>} />
              <Route path="/UseCallBack" element={<UseCallBack/>} />
              <Route path="/UseMemo" element={<UseMemo/>} />
              <Route path="/UseRef" element={<UseRef/>} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
};

export default FunctionalRout;

// const FunctionalRout = () => {
//     return (
//         <>
//         <div className='row'>
//           <div className='col-12'>
//             <Link to="/Functionalcomponent/Clock"><h1>clock</h1></Link>
//             {/* <Link to="/Examples/classcomponent/example2"><h1>Example2</h1></Link> */}
//           </div>
//           <div className='col-12'>
//             <Routes>
//               <Route path="/clock" element={<Clock />} />
//               {/* <Route path="/example2" element={<Example2 />} /> */}
//             </Routes>
//           </div>
//         </div>
//       </>
//     );
// };

// export default FunctionalRout;