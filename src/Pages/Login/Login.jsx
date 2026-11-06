import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./Login.css";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  // handle form submission
  const handleLoginSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      // clear previous messages
      setMessage("");
      setError("");
      // front-end validation
      if (!email || !password) {
        setError("ALL FIELDS ARE REQUIRED.");
        setLoading(false);
        return;
      }
      // payload for login request
      const payload = {
        email: email,
        password: password,
      };
      // send login request to the backend API
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        payload,
      );
      setLoading(false);
      // handle successful login
      setMessage("LOGIN SUCCESSFUL!");
      navigate("/SelectAssay");
      console.log(response);
    } catch (error) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };
  return (
    <div>
      <Header />

      {/* <!-- Login Form Section --> */}
      <section className="form-section">
        <h2>Sign in</h2>

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

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" disabled={loading} class="submit-btn">
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span>
                Please wait...
              </span>
            ) : (
              "Sign in"
            )}
          </button>
          <p className="form-footer-text">
            Don't have an account? <a href="/Register">Register</a>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
