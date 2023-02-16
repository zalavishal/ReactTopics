import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Headerfile = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState (false);

console.log(content);
 
    return (
        <>
             <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
              <Link className='nav-link' to='/home'>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/features'>Features</Link>
                {/* <MDBNavbarLink href='/features'>Features</MDBNavbarLink> */}
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/pricing'>Pricing</Link>
                {/* <MDBNavbarLink href='/pricing'>Pricing</MDBNavbarLink> */}
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/about'>About</Link>
                {/* <MDBNavbarLink href='/about'>About</MDBNavbarLink> */}
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/Examples'>Examples</Link>
                {/* <MDBNavbarLink href='/about'>About</MDBNavbarLink> */}
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar> 
        </>
    );
};

export default Headerfile;