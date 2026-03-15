import React, { useEffect, useState } from "react";
import axios from "../services/axios";
import "../App.css";

function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, vendors: 0, customers: 0, posts: 0, orders: 0, revenue: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("/admin-stats");
        const s = res.data?.stats ?? {};
        setStats({
          users: s.users ?? 0,
          vendors: s.vendors ?? 0,
          customers: s.customers ?? 0,
          posts: s.posts ?? 0,
          orders: s.orders ?? 0,
          revenue: s.revenue ?? 0,
        });
        setRecentOrders(res.data?.recent_orders ?? []);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleLogout = () => {
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="m-loader">
        <div className="m-loader__spinner" />
        <p className="m-loader__text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="m-page">
      <header className="m-header">
        <div>
          <div className="m-eyebrow">Online Bazar</div>
          <div className="m-title">Dashboard</div>
        </div>
        <button className="m-btn m-btn--ghost" onClick={handleLogout}>Logout</button>
      </header>

      <section className="m-grid">
        <Stat title="Users" value={stats.users} color="#6366f1" />
        <Stat title="Vendors" value={stats.vendors} color="#14b8a6" />
        <Stat title="Customers" value={stats.customers} color="#f59e0b" />
        <Stat title="Posts" value={stats.posts} color="#0ea5e9" />
        <Stat title="Orders" value={stats.orders} color="#22c55e" />
        <Stat title="Revenue" value={`$${stats.revenue.toLocaleString()}`} color="#8b5cf6" />
      </section>

      <section className="m-card">
        <div className="m-card__head">
          <span>Recent Orders</span>
          <a className="m-link" href="#">See all</a>
        </div>
        <div className="m-list">
          {recentOrders.length === 0 && <div className="m-muted">No orders yet</div>}
          {recentOrders.map((o) => (
            <div key={o.id} className="m-list__item">
              <div>
                <div className="m-list__title">{o.customer}</div>
                <div className="m-list__subtitle">{o.id} • {o.date}</div>
              </div>
              <div className="m-badge">${o.total}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="m-card">
        <div className="m-card__head">
          <span>Quick Actions</span>
        </div>
        <div className="m-actions">
          <button className="m-chip">Add Post</button>
          <button className="m-chip">Add Vendor</button>
          <button className="m-chip">View Reports</button>
        </div>
      </section>

      <nav className="m-bottom-nav">
        <button className="m-nav-btn">Home</button>
        <button className="m-nav-btn">Orders</button>
        <button className="m-nav-btn">Users</button>
        <button className="m-nav-btn">Settings</button>
      </nav>
    </div>
  );
}

const Stat = ({ title, value, color }) => (
  <div className="m-stat" style={{ borderColor: color }}>
    <div className="m-stat__title">{title}</div>
    <div className="m-stat__value">{value}</div>
  </div>
);

export default AdminDashboard;
