import React, { useState } from 'react';
import './signin.css';
import Register from './register';
import fiveImage from'../images/5.png'; 
import Icons from './icons';

const SignInPopup = ({ onClose }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    // Use a regular expression to validate the password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must contain at least 6 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.'
      );
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="signInPopup">
      <div className="signInContainer">
        <button className="closeButton" onClick={onClose}>
          <span>&times;</span> {/* This creates the cross mark */}
        </button>
        
        
        <div className="leftColumn">
          <img src={fiveImage} alt="Left Image" />
        </div>
        <div className="rightColumn">
          {showRegister ? (
            <Register onClose={onClose} />
          ) : (
            <form>
              <label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your Name"
                  className='responsive-input'

                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className='responsive-input'
                />
              </label>
              <div className="error-message">{errorMessage}</div>
              <label>
                <input type="checkbox" name="keepLoggedIn" />
                Keep me signed in
              </label>
              <button
                type="submit" className="responsive-input" // Add this class
                disabled={!!errorMessage} // Disable the button if there's an error message
              >
                Sign In
              </button>
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={toggleRegister}>
                  Register
                </a>
              </p>
              <Icons/>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
