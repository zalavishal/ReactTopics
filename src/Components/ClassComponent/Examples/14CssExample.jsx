import React, { Component } from 'react';

class CssExample extends Component {
    render() {
        const txtc={
            color:"black",
            background:"white"
        };
        const txts={
            fontSize:"80px"
        }
        return (
            <>
             <p style={{color:"black",background:"orange"}}>test</p> 
             <h1 style={{...txtc,...txts}}>hello</h1>
            </>
        );
    }
}

export default CssExample;