import React, { Component } from 'react';

class StateInClass extends Component {
    dataMamber = "somthing data mamber..."
    constructor(props) {
        super(props);
        this.state={
            statedata:"init",
            valueForIncreDecre:0,
            truonoff:true
        }
        // this.ClickHandleSomthing = this.ClickHandleSomthing.bind(this)
    }
    
    // ClickHandleSomthing(){
    //     console.log("called")
    //     this.dataMamber="change..."
    //     this.setState({ statedata:"otherdata"})
    // }
    ClickHandleSomthing=()=>{
        console.log("called")
        this.dataMamber="change..."
        this.setState({ statedata:"otherdata"})
    }
    increment=()=>{
        this.setState({ valueForIncreDecre:this.state.valueForIncreDecre+1})

    }
    render() {
        let data="somthing"
        return (
            <>
                {data}<br/>
                {this.dataMamber}<br/>
                {this.state.statedata}
                <button onClick={this.ClickHandleSomthing}>click</button>
                <br/>
                <button onClick={this.increment}>increment</button>
                {this.state.valueForIncreDecre}
                <button onClick={()=>{this.setState ({valueForIncreDecre:this.state.valueForIncreDecre-1})}}>decrement</button>
                <br/>
                <br/>
                <br/>
                <button onClick={()=>{this.setState ({truonoff:!this.state.truonoff})}}>{this.state.truonoff? "on":"off"}</button>
                <br/>
                <br/>  
                <br/>
            </>
        );
    }
}

export default StateInClass;