import React, { Component } from 'react';

class StateLifeInClass extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state={
            truonoff:true
        }

    }
    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        console.log("componentDidMount");
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");

        return (
            <>
            <p>lifeCycle : constructor,render,componentWillMount,componentDidMount,componentWillReceiveProps,shouldComponentUpdate,componentWillUpdate,componentDidUpdate,componentWillUnmount</p>
            <br />
            <div>
                <button onClick={()=>{this.setState ({truonoff:!this.state.truonoff})}}>{this.state.truonoff? "on":"off"}</button>
            </div>
            </>
        );
    }
}

export default StateLifeInClass;