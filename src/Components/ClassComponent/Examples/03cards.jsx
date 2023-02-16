import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import React, { Component } from 'react';

class cards extends Component {
    constructor(props) {
        super(props);
    
        this.styles = {
            color: "white",
            // textAlign: "center",
          };
          this.box = {
            backgroundImage: "linear-gradient(to right,rgb(42, 40, 40),rgb(42, 40, 40),rgb(0, 0, 0),rgb(0, 0, 0))",
            color:"white",
          };
          this.btn = {
            color: "black",
            textAlign: "center",
            backgroundColor:"skyBlue",
            curser:"pointer",
          };
        }
        
    
    render() {
        return (
            <>
                <MDBCard style={this.box}>
                    <MDBCardImage className='cardimg' src={this.props.imgSrc} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.prodTitle}</MDBCardTitle>
                        <MDBCardText style={this.styles}>
                           {this.props.txt} 
                        </MDBCardText>
                        <MDBBtn style={this.btn} href={this.props.Btn}>site</MDBBtn>
                    </MDBCardBody>  
                </MDBCard>
            </>
        );
    }
}

export default cards;