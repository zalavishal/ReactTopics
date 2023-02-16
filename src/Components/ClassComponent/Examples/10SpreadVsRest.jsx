import React, { Component } from 'react';

class SpreadVsRest extends Component {
    getData=(a,...data)=>{
        console.log("getData",data);
    }
    getDataSpread=(a,b,c)=>{
        console.log(a,b,c);
    }
    render() {
       let arry = [12,10];
        return (
            <div>
                {this.getData(10,50,50,80,90,80,50)}
                {this.getDataSpread(10,50,90,50)}
            </div>
        );
    }
}

export default SpreadVsRest;