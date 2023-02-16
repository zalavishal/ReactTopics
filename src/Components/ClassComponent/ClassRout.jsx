import { Link, Outlet, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import ClassCompoIntro from './Examples/01classCompoIntro'
import Jsx from './Examples/02Jsx.jsx'
import PropsInCard from './Examples/propsincard.jsx'
import StateInClass from './Examples/04stateinclass.jsx'
import StateLifeInClass from './Examples/05StateLifeInClass.jsx'
import ConditionalRendering from './Examples/06ConditionalRenderingInClass.jsx'
import ListAndKeys from './Examples/07ListAndKeys.jsx'
import ControlledCompo from './Examples/08controlledcompo.jsx'
import UnControlledCompo from './Examples/09Uncontrolledcompo.jsx'
import SpreadVsRest from './Examples/10SpreadVsRest.jsx'
import CompositionVsInheritance from './Examples/11CompositionVsInheritance.jsx'
import ArrayMap from './Examples/12ArrayMap.jsx'
import ApiExample from './Examples/13ApiExample.jsx'
import CssExample from './Examples/14CssExample.jsx'
import StyledCompoEx from './Examples/15StyledCompoEx.jsx'
import StateLifting from './Examples/16StateLifting/MainFile.jsx'
// import HocCompo from './Examples/Hoc/Hoc.jsx'
import AppHocCompo from './Examples/Hoc/AppHoc.jsx'


class ClassRout extends Component {

  render() {
    return (
      <>
        <div className='row,link'>
          <div className='col-12'>
            <ul>
              <li><Link to="/Examples/classcomponent/ClassCompoIntro"><p>ClassCompoIntro</p></Link></li>
               <li><Link to="/Examples/classcomponent/Jsx"><p>Jsx</p></Link></li>
                <li><Link to="/Examples/classcomponent/propsincard"><p>props</p></Link></li>
                <li><Link to="/Examples/classcomponent/stateinclass"><p>state</p></Link></li>
                <li><Link to="/Examples/classcomponent/statelifeinclass"><p>lifecycle</p></Link></li>
                <li><Link to="/Examples/classcomponent/ConditionalRendering"><p>ConditionalRendering</p></Link></li>
                <li><Link to="/Examples/classcomponent/ListAndKeys"><p>List And Keys</p></Link></li>
                <li><Link to="/Examples/classcomponent/ControlledCompo"><p>controlled component</p></Link></li>
                <li><Link to="/Examples/classcomponent/UnControlledCompo"><p>Uncontrolled component</p></Link></li>
                <li><Link to="/Examples/classcomponent/SpreadVsRest"><p>spread vs rest</p></Link></li>
                <li><Link to="/Examples/classcomponent/CompositionVsInheritance"><p>Composition vs inheritance</p></Link></li>
                <li><Link to="/Examples/classcomponent/ArrayMap"><p>array map</p></Link></li>
                <li><Link to="/Examples/classcomponent/ApiExample"><p>Api Example</p></Link></li>
                <li><Link to="/Examples/classcomponent/CssExample"><p>Css Example</p></Link></li>
                <li><Link to="/Examples/classcomponent/StyledCompoEx"><p>StyledCompo</p></Link></li>
                <li><Link to="/Examples/classcomponent/StateLifting"><p>state lifting compo</p></Link></li>
                {/* <li><Link to="/Examples/classcomponent/HocCompo"><p>Hoc compo</p></Link></li> */}
                <li><Link to="/Examples/classcomponent/AppHocCompo"><p>Hoc compo</p></Link></li>
            </ul>
          </div>
          <div className='col-12'>
            <Routes>
              <Route path="/ClassCompoIntro" element={<ClassCompoIntro />} />
              <Route path="/Jsx" element={<Jsx />} />
              <Route path="/propsincard" element={<PropsInCard />} />
              <Route path="/StateInClass" element={<StateInClass />} />
              <Route path="/statelifeinclass" element={<StateLifeInClass />} />
              <Route path="/ConditionalRendering" element={<ConditionalRendering />} />
              <Route path="/ListAndKeys" element={<ListAndKeys />} />
              <Route path="/ControlledCompo" element={<ControlledCompo/>} />
              <Route path="/UnControlledCompo" element={<UnControlledCompo/>} />
              <Route path="/SpreadVsRest" element={<SpreadVsRest/>} />
              <Route path="/CompositionVsInheritance" element={<CompositionVsInheritance/>} />
              <Route path="/ArrayMap" element={<ArrayMap/>} />
              <Route path="/ApiExample" element={<ApiExample/>} />
              <Route path="/CssExample" element={<CssExample/>} />
              <Route path="/StyledCompoEx" element={<StyledCompoEx/>} />
              <Route path="/StateLifting" element={<StateLifting/>} />
              {/* <Route path="/HocCompo" element={<HocCompo/>} /> */}
              <Route path="/AppHocCompo" element={<AppHocCompo/>} />
            </Routes>
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  }
}

export default ClassRout;