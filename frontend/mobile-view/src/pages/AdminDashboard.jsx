import React, { useEffect, useState } from "react";
import axios from "../services/axios";
import "../App.css";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiUserCheck,
  FiShoppingBag,
  FiBox,
  FiBarChart2,
  FiTruck,
} from "react-icons/fi";

const translations = {
  fa: {
    dir: "rtl",
    appName: "بازار آنلاین",
    dashboard: "داشبورد",
    logout: "خروج",
    language: "زبان",
    theme: "تم",
    themeLight: "روشن",
    themeMid: "متوسط",
    themeDark: "تاریک",
    stats: {
      users: "کاربران",
      vendors: "فروشندگان",
      customers: "مشتریان",
      posts: "محصولات",
      orders: "سفارش‌ها",
      revenue: "درآمد",
    },
    recentOrders: "سفارش‌های اخیر",
    seeAll: "مشاهده همه",
    noOrders: "هنوز سفارشی ثبت نشده است",
    quickActions: "اقدامات سریع",
    addPost: "افزودن محصول",
    addVendor: "افزودن فروشنده",
    viewReports: "گزارش‌ها",
    bottom: { home: "خانه", orders: "سفارش‌ها", users: "کاربران", settings: "تنظیمات" },
    sidebar: {
      dashboard: "داشبورد",
      users: "کاربران",
      vendors: "فروشندگان",
      customers: "مشتریان",
      products: "محصولات",
      orders: "سفارش‌ها",
      deliveries: "تحویل‌ها",
    },
  },
  ps: {
    dir: "rtl",
    appName: "آنلاین بازار",
    dashboard: "ډشبورډ",
    logout: "وتل",
    language: "ژبه",
    theme: "تم",
    themeLight: "روښانه",
    themeMid: "منځنی",
    themeDark: "تیاره",
    stats: {
      users: "کاروونکي",
      vendors: "پلورونکي",
      customers: "پېرودونکي",
      posts: "محصولات",
      orders: "سپارښتنې",
      revenue: "عواید",
    },
    recentOrders: "وروستۍ سپارښتنې",
    seeAll: "ټولې وګورئ",
    noOrders: "تر اوسه سپارښتنه نشته",
    quickActions: "چټک کارونه",
    addPost: "محصول زیاتول",
    addVendor: "پلورونکی زیاتول",
    viewReports: "راپورونه",
    bottom: { home: "کور", orders: "سپارښتنې", users: "کاروونکي", settings: "ترتیبات" },
    sidebar: {
      dashboard: "ډشبورډ",
      users: "کاروونکي",
      vendors: "پلورونکي",
      customers: "پېرودونکي",
      products: "محصولات",
      orders: "سپارښتنې",
      deliveries: "لېږدونې",
    },
  },
  en: {
    dir: "ltr",
    appName: "Online Bazar",
    dashboard: "Dashboard",
    logout: "Logout",
    language: "Language",
    theme: "Theme",
    themeLight: "Light",
    themeMid: "Mid",
    themeDark: "Dark",
    stats: {
      users: "Users",
      vendors: "Vendors",
      customers: "Customers",
      posts: "Products",
      orders: "Orders",
      revenue: "Revenue",
    },
    recentOrders: "Recent Orders",
    seeAll: "See all",
    noOrders: "No orders yet",
    quickActions: "Quick Actions",
    addPost: "Add Product",
    addVendor: "Add Vendor",
    viewReports: "View Reports",
    bottom: { home: "Home", orders: "Orders", users: "Users", settings: "Settings" },
    sidebar: {
      dashboard: "Dashboard",
      users: "Users",
      vendors: "Vendors",
      customers: "Customers",
      products: "Products",
      orders: "Orders",
      deliveries: "Deliveries",
    },
  },
};

function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, vendors: 0, customers: 0, posts: 0, orders: 0, revenue: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [locale, setLocale] = useState("fa");
  const [theme, setTheme] = useState("dark");

  const t = translations[locale];

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

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.body.classList.remove("theme-light", "theme-mid", "theme-dark", "rtl", "ltr");
    document.body.classList.add(`theme-${theme}`);
    document.body.classList.add(t.dir === "rtl" ? "rtl" : "ltr");
  }, [locale, theme, t.dir]);

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
        <div className="m-header-left">
          <button className="m-icon-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <FiMenu size={20} />
          </button>
          <div>
            <div className="m-eyebrow">{t.appName}</div>
            <div className="m-title">{t.dashboard}</div>
          </div>
        </div>
        <button className="m-btn m-btn--ghost" onClick={handleLogout}>{t.logout}</button>
      </header>

      <div className="m-controls">
        <div className="m-control">
          <label>{t.language}</label>
          <select value={locale} onChange={(e) => setLocale(e.target.value)}>
            <option value="fa">دری</option>
            <option value="ps">پشتو</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="m-control">
          <label>{t.theme}</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">{t.themeLight}</option>
            <option value="mid">{t.themeMid}</option>
            <option value="dark">{t.themeDark}</option>
          </select>
        </div>
      </div>

      <SidebarDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        stats={stats}
        t={t}
      />

      <section className="m-grid">
        <Stat title={t.stats.users} value={stats.users} color="#6366f1" />
        <Stat title={t.stats.vendors} value={stats.vendors} color="#14b8a6" />
        <Stat title={t.stats.customers} value={stats.customers} color="#f59e0b" />
        <Stat title={t.stats.posts} value={stats.posts} color="#0ea5e9" />
        <Stat title={t.stats.orders} value={stats.orders} color="#22c55e" />
        <Stat title={t.stats.revenue} value={`$${stats.revenue.toLocaleString()}`} color="#8b5cf6" />
      </section>

      <section className="m-card">
        <div className="m-card__head">
          <span>{t.recentOrders}</span>
          <a className="m-link" href="#">{t.seeAll}</a>
        </div>
        <div className="m-list">
          {recentOrders.length === 0 && <div className="m-muted">{t.noOrders}</div>}
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
          <span>{t.quickActions}</span>
        </div>
        <div className="m-actions">
          <button className="m-chip">{t.addPost}</button>
          <button className="m-chip">{t.addVendor}</button>
          <button className="m-chip">{t.viewReports}</button>
        </div>
      </section>

      <nav className="m-bottom-nav">
        <button className="m-nav-btn">{t.bottom.home}</button>
        <button className="m-nav-btn">{t.bottom.orders}</button>
        <button className="m-nav-btn">{t.bottom.users}</button>
        <button className="m-nav-btn">{t.bottom.settings}</button>
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

const SidebarDrawer = ({ open, onClose, stats, t }) => {
  const items = [
    { icon: <FiHome />, label: t.sidebar.dashboard },
    { icon: <FiUsers />, label: t.sidebar.users, badge: stats.users },
    { icon: <FiUserCheck />, label: t.sidebar.vendors, badge: stats.vendors },
    { icon: <FiShoppingBag />, label: t.sidebar.customers, badge: stats.customers },
    { icon: <FiBox />, label: t.sidebar.products, badge: stats.posts },
    { icon: <FiBarChart2 />, label: t.sidebar.orders, badge: stats.orders },
    { icon: <FiTruck />, label: t.sidebar.deliveries },
  ];

  return (
    <>
      <div className={`m-drawer__overlay ${open ? "is-open" : ""}`} onClick={onClose} />
      <aside className={`m-drawer ${open ? "is-open" : ""} ${t.dir === "rtl" ? "rtl" : "ltr"}`}>
        <div className="m-drawer__head">
          <span>{t.appName}</span>
          <button className="m-icon-btn" onClick={onClose} aria-label="Close menu">
            <FiX size={18} />
          </button>
        </div>
        <div className="m-drawer__list">
          {items.map((item) => (
            <div key={item.label} className="m-drawer__item">
              <div className="m-drawer__label">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && <span className="m-drawer__badge">{item.badge}</span>}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default AdminDashboard;
