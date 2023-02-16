import React, { Component } from 'react';

class Jsx extends Component {
    render() {
        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
        };
        // const headeing = "<h1>Something</h1>"
        // const headeing = <h1>Something</h1>
        let something = "My site Title";
        // const headeing = "<h1>"+something+"</h1>"
        // const headeing = `<h1>${something}</h1>`
        const headeing = <h1>{something}</h1>
        return (
            <>
            <br />
            <h6>(jsx is combination of js and HTML)</h6>
            <br />
            <br />
                {headeing}
                2+2 = {2 + 2}
                <p>FullName : {user.firstName} {user.lastName}</p>
            </>
        );
    }   
}

export default Jsx;