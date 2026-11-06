import React, { useState } from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import "./Register.css";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // Create individual state variables for each input field (PAYLOAD)
  // individual state for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
  // message state for success or error messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // loading state for form submission
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    // validation: no loading state here
    if (!firstName.trim()) return setError("First name is required.");
    if (!lastName.trim()) return setError("Last name is required.");
    if (!email.trim()) return setError("Email is required.");
    if (!password.trim()) return setError("Password is required.");
    if (!phoneNumber.trim()) return setError("Phone number is required.");
    if (!address.trim()) return setError("Address is required.");

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
      phoneNumber: phoneNumber.trim(),
      address: address.trim(),
    };

    try {
      setLoading(true); // only starts once validation has passed
      await axios.post(`${API_URL}/api/auth`, payload);
      setMessage("Registration successful! Redirecting...");
      setTimeout(() => navigate("/SelectAssay"), 1500);
    } catch (err) {
      console.log("Status:", err.response?.status);
      console.log("Server said:", err.response?.data);
      const data = err.response?.data;
      setError(
        data?.message ||
          data?.error ||
          (typeof data === "string" ? data : null) ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false); // always runs, success or failure
    }
  };

  return (
    <div>
      <Header />
      {/* <!-- Registration Form Section --> */}
      <section className="form-section">
        <h2>Create an Account</h2>
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          {message && (
            <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
              {message}
            </Typography>
          )}
          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <div className="form-group">
            <label for="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your first name"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              required
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="phonenumber">Phone number</label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter your phone number"
              required
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="addres">Address</label>
            <input
              type="address"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span>
                Creating account...
              </span>
            ) : (
              "Register"
            )}
          </button>

          <p className="form-footer-text">
            Already have an account? <a href="/Login">Login here</a>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
