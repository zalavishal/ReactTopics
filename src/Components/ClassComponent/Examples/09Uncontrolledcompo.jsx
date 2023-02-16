import React, { Component } from 'react';

class Uncontrolledcompo extends Component {
    constructor(props) {
        super(props);
        this.input =React.createRef();
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.input);
        console.log(this.input.current);
        console.log(this.input.current.value);
    }
    render() {
        return (
            <>
                <form method="post" onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.input} name="uname" id="uname" />
                    <input type="submit" name="btn" id="btn" />
                </form>
            </>
        );
    }
}

export default Uncontrolledcompo;