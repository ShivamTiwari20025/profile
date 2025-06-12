import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };
    if (!form.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }
    if (!form.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setForm({ email: "", password: "" });
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="title">Signin to your<br />PopX account</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              className={`input-field${errors.email ? " error" : ""}`}
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label className="input-label" htmlFor="email">Email Address</label>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              className={`input-field${errors.password ? " error" : ""}`}
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <label className="input-label" htmlFor="password">Password</label>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <button type="submit" className="login-button" id="loginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}