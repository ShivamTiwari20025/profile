import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "yes"
    });

    const [errors, setErrors] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        agency: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
            valid = false;
        }

        // Phone Number validation
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone Number is required";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone Number must be 10 digits";
            valid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            valid = false;
        }

        // Password validation
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            valid = false;
        }

        // Agency validation
        if (!formData.agency) {
            newErrors.agency = "Please select an option";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                password: "",
                companyName: "",
                agency: "yes"
            });
            navigate("/home");
        }
    };

    return (
        <div className="container">
            <h1 className="title">Create your<br />PopX account</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name*</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        className="form-input" 
                        placeholder="Merry Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="phoneNumber">Phone number*</label>
                    <input 
                        type="tel" 
                        id="phoneNumber" 
                        name="phoneNumber"
                        className="form-input" 
                        placeholder="Merry Doe"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address*</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        className="form-input" 
                        placeholder="Merry Doe"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password*</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        className="form-input" 
                        placeholder="Merry Doe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="companyName">Company name</label>
                    <input 
                        type="text" 
                        id="companyName" 
                        name="companyName"
                        className="form-input" 
                        placeholder="Merry Doe"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>

                <div className="radio-group">
                    <div className="radio-question">Are you an Agency?*</div>
                    <div className="radio-options">
                        <div className="radio-option">
                            <div className="radio-input">
                                <input 
                                    type="radio" 
                                    id="yes" 
                                    name="agency" 
                                    value="yes" 
                                    checked={formData.agency === "yes"}
                                    onChange={handleChange}
                                />
                                <div className="radio-dot"></div>
                            </div>
                            <label className="radio-label" htmlFor="yes">Yes</label>
                        </div>
                        <div className="radio-option">
                            <div className="radio-input">
                                <input 
                                    type="radio" 
                                    id="no" 
                                    name="agency" 
                                    value="no" 
                                    checked={formData.agency === "no"}
                                    onChange={handleChange}
                                />
                                <div className="radio-dot"></div>
                            </div>
                            <label className="radio-label" htmlFor="no">No</label>
                        </div>
                    </div>
                    {errors.agency && <div className="error-message">{errors.agency}</div>}
                </div>
                <button type="submit" className="create-button">
                    Create Account
                </button>
            </form>
        </div>
    );
}