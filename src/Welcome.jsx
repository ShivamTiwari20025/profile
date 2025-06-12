import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
// WelcomeCard.jsx
export default function WelcomeCard() {
    return (
        <div className="container">
        <div className="image-container">
            <div className="welcome-icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2ZM12 4.3L20 8.2V10C20 15.2 16.9 19.3 12 20C7.1 19.3 4 15.2 4 10V8.2L12 4.3ZM15.5 9L10 14.5L8.5 13L7 14.5L10 17.5L17 10.5L15.5 9Z"/>
                </svg>
            </div>
        </div>
        
        <div className="content">
            <h1 className="title">Welcome to PopX</h1>
            
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
           
            <div className="button-container">
            <Link to="/register">
                <button className="button button-primary">
                    Create Account
                </button>
                </Link>
                <Link to="/login">
                <button className="button button-secondary">
                    Already Registered? Login
                </button>
                </Link>
            </div>
        </div>
    </div>
    );
  }