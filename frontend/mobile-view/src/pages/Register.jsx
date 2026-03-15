import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    userPassword: "",
    provinceId: "",
    distrectId: "",
    role: "vendor",
  });
  const [errors, setErrors] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadProvinces = async () => {
      try {
        const res = await axios.get("/provinces");
        setProvinces(res.data);
        if (res.data.length) {
          setForm((prev) => ({ ...prev, provinceId: res.data[0].id }));
        }
        setLoadError("");
      } catch (e) {
        setLoadError("Provinces could not be loaded. Check API URL or CORS.");
      }
    };
    loadProvinces();
  }, []);

  useEffect(() => {
    const loadDistricts = async () => {
      if (!form.provinceId) return;
      try {
        const res = await axios.get("/districts", { params: { province_id: form.provinceId } });
        setDistricts(res.data);
        if (res.data.length) {
          setForm((prev) => ({ ...prev, distrectId: res.data[0].id }));
        }
        setLoadError("");
      } catch (e) {
        setLoadError("Districts could not be loaded. Check API URL or CORS.");
      }
    };
    loadDistricts();
  }, [form.provinceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axios.post("/register", form);
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
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-pill">Online Bazar</div>
        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">Sell and manage your shop on mobile</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-two">
            <Field label="First name" name="firstName" onChange={handleChange} />
            <Field label="Last name" name="lastName" onChange={handleChange} />
          </div>

          <Field label="Phone" name="phone" onChange={handleChange} />
          <Field label="Email" type="email" name="email" onChange={handleChange} />
          <Field label="Password" type="password" name="userPassword" onChange={handleChange} />

          <div className="auth-two">
            <div className="auth-field">
              <label className="auth-label">Province</label>
              <select className="auth-select" name="provinceId" value={form.provinceId} onChange={handleChange}>
                {provinces.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="auth-field">
              <label className="auth-label">District</label>
              <select className="auth-select" name="distrectId" value={form.distrectId} onChange={handleChange}>
                {districts.map((d) => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label">Role</label>
            <select className="auth-select" name="role" value={form.role} onChange={handleChange}>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="auth-errors">
              {Object.entries(errors).map(([field, msgs]) => (
                <div key={field} className="auth-error">{msgs.join(" , ")}</div>
              ))}
            </div>
          )}
          {loadError && <div className="auth-errors">{loadError}</div>}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link className="auth-link" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

const Field = ({ label, ...rest }) => (
  <div className="auth-field">
    <label className="auth-label">{label}</label>
    <input className="auth-input" {...rest} />
  </div>
);

export default Register;
