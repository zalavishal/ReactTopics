import React, { Component } from 'react';

class CompositionVsInheritance extends Component {
    render() {
        return (
            <div>
                <DialogAnything title="<h1>testing</h1>">
                    Lorem ipsum dolor <b>sit amet, consectetur</b>  adipisicing elit. Debitis commodi unde sed nobis nulla ea velit soluta ipsa eligendi exercitationem assumenda illum, sint repudiandae earum nam vitae voluptates quis. Soluta odit tempora tenetur!
                </DialogAnything>
            </div>
        );
    }
}
function DialogAnything(props) {
    console.log(props);
    return <div style={{ border: "1px solid" }}>
       <h2> {props.title} </h2>
        <p>{props.children}</p>
    </div>
}

export default CompositionVsInheritance;