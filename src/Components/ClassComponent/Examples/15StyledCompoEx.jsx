import React, { Component } from 'react';
import styled from 'styled-components';

class StyledCompoEx extends Component {
    render() {
        const StyledBtn = styled.button`
        color: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        `;
        return ( 
            <div>
                <StyledBtn>click me</StyledBtn>
            </div>
        );
    }
}

export default StyledCompoEx;