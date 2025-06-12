import React from "react";
import "./home.css";
export default function Home() {
    return (
        <div className="settings-container">
        <div className="settings-header">
            <h2 className="settings-title">Account Settings</h2>
        </div>
        
        <div className="profile-section">
            <div className="profile-info">
                <div className="profile-image-container">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                         alt="Profile" className="profile-image" />
                    <div className="status-indicator"></div>
                </div>
                <div className="profile-details">
                    <h3>Marry Doe</h3>
                    <p>Marry@gmail.com</p>
                </div>
            </div>
            
            <p className="profile-description">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
        
        <div className="content-area"></div>
    </div>
    )
}