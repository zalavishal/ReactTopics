import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }

    loginChange = () => {
        this.setState({ status: !this.state.status })
    }
    render() {
        // let status = false
        let loginbtn = ""
        // if (this.state.status) {
        //     loginbtn = <button onClick={this.loginChange}>login</button>

        // } else {
        //     loginbtn = <button onClick={this.loginChange}>logout</button>

        // }

        const count = null;

        return (

            <>
                <br />  
                <p>ConditionalRendering : if Else and ternoryoperator thi render karavvu</p>
                <br />
                <br />
                {count && <h1>Messages: {count}</h1>}

                {loginbtn}
                <br />
                <button className='btn btn-dark' onClick={this.loginChange}>{(this.state.status) ? "logout" : "login"}</button>
                <br />
                <br />
                condition ? true : false.
                <br />
                <br />
                <button className='btn btn-dark' onClick={() => { this.setState({ status: !this.state.status }) }}>{(this.state.status) ? "logout" : "login"}</button>

            </>
        );

        // if (this.state.status) {

        //     return (
        //         <>
        //         <button onClick={this.loginChange}>login</button>
        //             true
        //         </>
        //     );
        // } else {
        //     return (
        //         <>
        //         <button onClick={this.loginChange}>login</button>
        //             false
        //         </>
        //     );

        // }
    }
}

export default ConditionalRendering;
// class ConditionalRendering extends Component {
//     render() {
//         let status = false
//         if (status) {

//             return (
//                 <>
//                     true
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                     false
//                 </>
//             );

//         }
//     }
// }

// export default ConditionalRendering;