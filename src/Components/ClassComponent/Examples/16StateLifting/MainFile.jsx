import React, { Component } from 'react';
import TemperatureInput from './2InputField.jsx';

class MainFile extends Component {
    handleCelsiusChange = (data)=>{
        console.log("MainFile handleCelsiusChange parent",data);
    }
    render() {
        return (
            <div>
                parent data
                <TemperatureInput parentMethod={this.handleCelsiusChange}/>
            </div>
        );
    }
}

export default MainFile;