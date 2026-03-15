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
      const res = await axios.post("/login", {
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
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.footer}>
          Online Bazar System • <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif"
  },
  card: {
    width: "350px",
    padding: "40px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  title: {
    textAlign: "center",
    marginBottom: "30px"
  },
  inputGroup: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginTop: "5px"
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    background: "#667eea",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    color: "#999"
  }
};

export default Login;
