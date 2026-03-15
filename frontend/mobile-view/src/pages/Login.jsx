import React, { useState } from "react";
import axios from "../services/axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/login", {
        email,
        userPassword: password,
      });

      navigate("/dashboard");
    } catch (err) {
      alert("ایمیل یا رمز اشتباه است");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-pill">Online Bazar</div>
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to manage your store</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label">Email</label>
            <input
              className="auth-input"
              type="email"
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input
              className="auth-input"
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-footer">
          No account yet? <Link className="auth-link" to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
