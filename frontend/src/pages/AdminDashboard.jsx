import React, { useEffect, useState } from "react";
import axios from "../services/axios";

function AdminDashboard() {
  const [user, setUser] = useState({ firstName: "Admin" }); // نمونه کاربر

  // بدون چک توکن و بدون axios
  useEffect(() => {
    console.log("Dashboard loaded");
  }, []);
const handleLogout = async () => {
  await axios.post("/logout");

  localStorage.removeItem("token");

  window.location.href = "/login";
};
  
return (
  <React.Fragment>
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
      <h2>Welcome Admin</h2>
    </div>
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {user.firstName}</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Card title="Users" value={100} />
        <Card title="Posts" value={50} />
      </div>
    </div>
  </React.Fragment>
);
}

const Card = ({ title, value }) => (
  <div
    style={{
      flex: 1,
      padding: "1rem",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      background: "#f9f9f9",
    }}
  >
    <h2>{title}</h2>
    <p>{value}</p>
  </div>
);

export default AdminDashboard;