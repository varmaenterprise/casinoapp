import React, { useState } from 'react';
import './signin.css';
import fiveImage from '../images/5.png';
import logo from '../images/5_1.png';

const Register = ({ onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        phone: '',
        keepLoggedIn: false,
    });
    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        const validationErrors = {};

        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required';
        }

        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        } else {
            // Password validation regex pattern
            const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            if (!passwordPattern.test(formData.password)) {
                validationErrors.password =
                    'Password must contain at least 6 characters, including at least one lowercase letter, one uppercase letter, one special character, and one number.';
            }
        }

        // You can add more validation rules for the phone number and other fields as needed

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit or perform other actions here
            setAlertMessage('');
            console.log('Form is valid. Submitting...');
        } else {
            // Form is invalid, display validation errors
            setErrors(validationErrors);
            setAlertMessage('Please fix the errors in the form.');
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
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your Name"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="responsive-input" // Add this class

                            />
                            {errors.username && <span className="error">{errors.username}</span>}
                        </label>
                        <label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="responsive-input" // Add this class

                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </label>
                        <label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your Whatsapp Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="responsive-input" // Add this class

                            />
                            {/* Add validation and error message for phone number if needed */}
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="keepLoggedIn"
                                checked={formData.keepLoggedIn}
                                onChange={handleInputChange}
                            />
                            Keep me signed in
                        </label>
                        <button type="submit">Register</button>
                        {alertMessage && <div className="alert">{alertMessage}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
