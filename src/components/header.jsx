import React from 'react';
import logo from '../assets/channellogo.png'; // Ensure the path is correct based on your project structure
import './header.css'; // Optional: If you separate styles into a CSS file

const Header = () => {
    return (
        <header className="header-container">
            

            <div className="spacer"></div>

            <nav className="top-bar" id="top-bar">
                <a href="#Home">Home</a>
                <a href="#AboutUs">About Us</a>
                <a href="#contactus">Contact </a>
                <a href="#Project-area">Our Work</a>
                <a href="#Our-Plans-title">Our Plans</a>
                <div className="top-logo" id="main-logo">
                <img src={logo} alt="Company Logo" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
