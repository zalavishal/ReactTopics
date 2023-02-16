import React, { Component } from 'react';

class InputField extends Component {
    handleChange = (e) =>{
        console.log("inputField handleChange child",e.target.value);
        this.props.parentMethod(e.target.value);
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
            </div>
        );
    }
}
    
export default InputField;