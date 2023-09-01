import React, { useState } from 'react'; // Import useState from React
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import SignInPopup from './signin';

function CollapsibleExample() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);

  const handleSignInClick = () => {
    setShowSignInPopup(true);
  };
  const handleClosePopup = () => {
    setShowSignInPopup(false);
  };
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
       <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          <span id="brand">BETZHUB</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sports" id="custom-nav-link">Sports</Nav.Link>
            <Nav.Link href="#casino" id="custom-nav-link">Casino</Nav.Link>
            <Nav.Link href="#inplay" id="custom-nav-link">Inplay</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#signin" id="nav-link" onClick={handleSignInClick}>
          Sign In
        </Nav.Link>          
          <Nav.Link href="#register" id="nav-link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        {showSignInPopup && <SignInPopup onClose={handleClosePopup} />}

    </Navbar>
  );
}

export default CollapsibleExample;
