import React, { useState } from "react";
import axios from "../services/axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    userPassword: "",
    distrectId: 1,
    role: "vendor",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await axios.post("/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        alert("خطا در ثبت نام");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
          <div style={styles.row}>
            <Input label="First name" name="firstName" onChange={handleChange} />
            <Input label="Last name" name="lastName" onChange={handleChange} />
          </div>
          <Input label="Phone" name="phone" onChange={handleChange} />
          <Input label="Email" type="email" name="email" onChange={handleChange} />
          <Input label="Password" type="password" name="userPassword" onChange={handleChange} />
          <Input label="District ID" type="number" name="distrectId" value={form.distrectId} onChange={handleChange} />

          <div>
            <label style={styles.label}>Role</label>
            <select name="role" value={form.role} onChange={handleChange} style={styles.select}>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {Object.keys(errors).length > 0 && (
            <div style={styles.errorBox}>
              {Object.entries(errors).map(([field, msgs]) => (
                <div key={field}>{msgs.join(" , ")}</div>
              ))}
            </div>
          )}

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

const Input = ({ label, ...rest }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label style={styles.label}>{label}</label>
    <input style={styles.input} {...rest} />
  </div>
);

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#1d1e3c,#101320)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    color: "white",
  },
  card: {
    width: "420px",
    padding: "32px",
    background: "#111827",
    borderRadius: "16px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  label: {
    marginBottom: "6px",
    fontSize: "13px",
    color: "#cbd5e1",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #1f2937",
    background: "#0f172a",
    color: "white",
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #1f2937",
    background: "#0f172a",
    color: "white",
    width: "100%",
  },
  button: {
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    border: "none",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    color: "white",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    marginTop: "16px",
    color: "#cbd5e1",
  },
  errorBox: {
    background: "rgba(239,68,68,0.15)",
    border: "1px solid rgba(239,68,68,0.4)",
    color: "#fecdd3",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "12px",
  },
};

export default Register;
