import React from 'react';
import './signin.css';
const SignInPopup = ({ onClose }) => {
    return (
    <div className="signInPopup">
      <div className="signInContainer">
        <button className="closeButton" onClick={onClose}>
          <span>&times;</span> {/* This creates the cross mark */}
        </button>
        <div className="leftColumn">
          <img src="card.png" alt="Left Image" />
        </div>
        <div className="rightColumn">
          <form>
            <h2>Sign In</h2>
            <label>
              <input type="text" name="username" placeholder="Enter your Name"  />
            </label>
            <label>
              <input type="password" name="password" placeholder="Enter your Password"  />
            </label>
            <label>
              <input type="checkbox" name="keepLoggedIn" />
              Keep me signed in
            </label>
            <button type="submit">Sign In</button>
            <p>Don't have an account? <a href="#">Register</a></p>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default SignInPopup;