import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Headerfile from './commonComponent/02Headerfile';

const Examples = () => {
    return (
        <>
            <Headerfile />
            <div className="container">
                <div className="row my-3">
                    <div className="col-6">
                        <Link to="classcomponent"><h3>Class Component</h3></Link>
                    </div>
                    <div className="col-6">
                        <Link to="functionalcomponent"><h3>Functional Component</h3></Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Examples;