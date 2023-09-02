import React, { useState } from 'react'; // Import useState from React
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import SignInPopup from './signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register'
import logo from '../images/5_1.png'


function CollapsibleExample() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // Add state for the Register popup

  const handleSignInClick = () => {
    setShowSignInPopup(true);
    setShowRegister(false); // Close the Register popup when Sign In is clicked
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowSignInPopup(false); // Close the Sign In popup when Register is clicked
  };

  const handleClosePopup = () => {
    setShowSignInPopup(false);
    setShowRegister(false); // Close both popups
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
       <Container>
       <Navbar.Brand href="#home" className="custom-navbar-brand">
  <img
    alt=""
    src={logo}
    width="50" // Adjust the width as needed to make the image larger
    height="30" // Adjust the height as needed
    className="d-inline-block align-top"
  />
  {' '}
  <span id="brand">BETZHUB</span>
</Navbar.Brand>
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
        <Nav.Link href="#register" id="nav-link" onClick={handleRegisterClick}>
            Register
          </Nav.Link>          </Nav>
        </Navbar.Collapse>
        </Container>
        {showSignInPopup && <SignInPopup onClose={handleClosePopup} />}
        {showRegister && <Register onClose={handleClosePopup} />} {/* Render the RegisterPopup component */}

    </Navbar>
  );
}

export default CollapsibleExample;
