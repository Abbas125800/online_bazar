import React, { useEffect, useState } from "react";
import axios from "../services/axios";

const translations = {
  fa: {
    dir: "rtl",
    langName: "دری",
    strings: {
      eyebrow: "پنل مدیریت آنلاین بازار",
      subtitle: "مرور سریع شاخص‌ها و وضعیت سیستم بر اساس دیتابیس.",
      hello: "سلام",
      settings: "تنظیمات",
      report: "حالت گزارش",
      logout: "خروج",
      loading: "در حال بارگذاری داده‌ها...",
      liveFromDb: "به‌روز از DB",
      kpiUsers: "کاربران",
      kpiVendors: "فروشندگان",
      kpiCustomers: "مشتریان",
      kpiPosts: "محصولات/پست‌ها",
      kpiOrders: "سفارش‌ها",
      kpiRevenue: "درآمد تجمعی",
      kpiSubs: "اشتراک‌های فعال",
      kpiConversion: "نرخ تبدیل",
      ordersTrendTitle: "روند سفارشات ۷ روز اخیر",
      ordersTrendHint: "بر اساس جدول Orders",
      ordersTrendLegendAvg: "میانگین روزانه",
      ordersTrendLegendRange: "۷ روز اخیر",
      orderStatusTitle: "وضعیت سفارش‌ها",
      orderStatusHint: "status در جدول Orders",
      recentOrdersTitle: "سفارش‌های اخیر",
      recentOrdersHint: "Orders + Customers",
      colCode: "کد",
      colCustomer: "مشتری",
      colAmount: "مبلغ",
      colPayment: "روش پرداخت",
      colStatus: "وضعیت",
      colDate: "تاریخ",
      latestUsersTitle: "کاربران تازه",
      latestUsersHint: "Users / Customers / Vendors",
      inventoryTitle: "سلامت موجودی",
      inventoryHint: "post_size / post_color",
      financialTitle: "شاخص‌های مالی",
      financialHint: "Payment / SellerSubscriptions",
      payCOD: "پرداخت در محل",
      payCard: "کارت/آنلاین",
      payMobile: "موبایل مانی",
      subsActive: "اشتراک فعال",
      supportTitle: "فعالیت پشتیبانی",
      supportHint: "UserCustomerMessages & Ratings",
      supportMessages: "پیام‌های ۷ روز اخیر",
      supportRatings: "میانگین امتیاز",
      supportResponse: "زمان پاسخگویی",
      supportResponseNote: "نیاز به ذخیره در DB",
      noData: "داده‌ای نیست",
      noOrders: "سفارشی ثبت نشده",
      noUsers: "کاربر جدیدی ثبت نشده",
      noInventory: "موردی با موجودی کم نیست",
      lastDays: "روز",
    },
  },
  en: {
    dir: "ltr",
    langName: "English",
    strings: {
      eyebrow: "Online Bazar Admin Panel",
      subtitle: "Quick view of KPIs and system status from the database.",
      hello: "Hello",
      settings: "Settings",
      report: "Report mode",
      logout: "Logout",
      loading: "Loading data...",
      liveFromDb: "Live from DB",
      kpiUsers: "Users",
      kpiVendors: "Vendors",
      kpiCustomers: "Customers",
      kpiPosts: "Products/Posts",
      kpiOrders: "Orders",
      kpiRevenue: "Total Revenue",
      kpiSubs: "Active Subscriptions",
      kpiConversion: "Conversion",
      ordersTrendTitle: "Orders trend (last 7 days)",
      ordersTrendHint: "Based on Orders table",
      ordersTrendLegendAvg: "Daily average",
      ordersTrendLegendRange: "Last 7 days",
      orderStatusTitle: "Order status",
      orderStatusHint: "Orders.status",
      recentOrdersTitle: "Recent orders",
      recentOrdersHint: "Orders + Customers",
      colCode: "Code",
      colCustomer: "Customer",
      colAmount: "Amount",
      colPayment: "Payment",
      colStatus: "Status",
      colDate: "Date",
      latestUsersTitle: "Latest users",
      latestUsersHint: "Users / Customers / Vendors",
      inventoryTitle: "Inventory health",
      inventoryHint: "post_size / post_color",
      financialTitle: "Financial metrics",
      financialHint: "Payments / SellerSubscriptions",
      payCOD: "Cash on delivery",
      payCard: "Card/Online",
      payMobile: "Mobile money",
      subsActive: "Active subscriptions",
      supportTitle: "Support activity",
      supportHint: "UserCustomerMessages & Ratings",
      supportMessages: "Messages (last 7d)",
      supportRatings: "Avg rating",
      supportResponse: "Response time",
      supportResponseNote: "Needs DB tracking",
      noData: "No data",
      noOrders: "No orders yet",
      noUsers: "No new users",
      noInventory: "No low-stock items",
      lastDays: "days",
    },
  },
  ps: {
    dir: "rtl",
    langName: "پښتو",
    strings: {
      eyebrow: "د آنلاین بازار د اډمین پینل",
      subtitle: "د ډیټابیس پر بنسټ د شاخصونو چټک لید.",
      hello: "سلام",
      settings: "ترتیبات",
      report: "راپور حالت",
      logout: "وتل",
      loading: "د معلوماتو په بارولو کې...",
      liveFromDb: "له DB څخه ژوندی",
      kpiUsers: "کاروونکي",
      kpiVendors: "پلورونکي",
      kpiCustomers: "پېرودونکي",
      kpiPosts: "محصولات/پوسټونه",
      kpiOrders: "سپارښتنې",
      kpiRevenue: "ټول عاید",
      kpiSubs: "فعاله ګډونونه",
      kpiConversion: "تبدیل",
      ordersTrendTitle: "د وروستیو ۷ ورځو سپارښتنې",
      ordersTrendHint: "د Orders جدول پر بنسټ",
      ordersTrendLegendAvg: "ورځنی اوسط",
      ordersTrendLegendRange: "وروستي ۷ ورځې",
      orderStatusTitle: "د سپارښتنې حالت",
      orderStatusHint: "Orders.status",
      recentOrdersTitle: "وروستۍ سپارښتنې",
      recentOrdersHint: "Orders + Customers",
      colCode: "کوډ",
      colCustomer: "پېرودونکی",
      colAmount: "مبلغ",
      colPayment: "تادیه",
      colStatus: "حالت",
      colDate: "نېټه",
      latestUsersTitle: "نوې کاروونکي",
      latestUsersHint: "Users / Customers / Vendors",
      inventoryTitle: "د موجودي وضعیت",
      inventoryHint: "post_size / post_color",
      financialTitle: "مالي شاخصونه",
      financialHint: "تادیات / ګډونونه",
      payCOD: "په کور نغدي",
      payCard: "کارت/آنلاین",
      payMobile: "موبایل ماني",
      subsActive: "فعاله ګډونونه",
      supportTitle: "د ملاتړ فعالیت",
      supportHint: "پیغامونه او امتیازات",
      supportMessages: "پیغامونه (۷ ورځې)",
      supportRatings: "اوسط امتیاز",
      supportResponse: "د ځواب وخت",
      supportResponseNote: "اړینه ده په DB کې ثبت شي",
      noData: "معلومات نشته",
      noOrders: "هیڅ سپارښتنه نشته",
      noUsers: "نوی کاروونکی نشته",
      noInventory: "کم موجودي نشته",
      lastDays: "ورځې",
    },
  },
};

const statusTranslations = {
  pending: { fa: "در انتظار", en: "Pending", ps: "په تمه" },
  confirmed: { fa: "تأیید شده", en: "Confirmed", ps: "تایید شو" },
  shopped: { fa: "در حال ارسال", en: "Shipped", ps: "لېږل شوی" },
  delivered: { fa: "تحویل شده", en: "Delivered", ps: "سپارل شوی" },
  cancelled: { fa: "لغو شده", en: "Cancelled", ps: "فسخ شو" },
};

const inventoryTranslations = {
  low: { fa: "کمبود", en: "Low", ps: "کمه موجودي" },
  warn: { fa: "رو به اتمام", en: "Running low", ps: "نږدې ختمه" },
  ok: { fa: "ایمن", en: "Healthy", ps: "خوندي" },
};

function AdminDashboard() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "fa");
  const t = (key) => translations[locale]?.strings[key] ?? translations.en.strings[key] ?? key;
  const [stats, setStats] = useState({
    users: 0,
    vendors: 0,
    customers: 0,
    posts: 0,
    orders: 0,
    revenue: 0,
    activePlans: 0,
    conversion: 0,
  });
  const [user, setUser] = useState({ firstName: "Admin" });
  const [trend, setTrend] = useState([]);
  const [ordersByStatus, setOrdersByStatus] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [latestUsers, setLatestUsers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [payments, setPayments] = useState({
    cash_on_delivery: 0,
    credit_card: 0,
    mobile_money: 0,
    online: 0,
  });
  const [support, setSupport] = useState({ messages_last7: 0, avg_rating: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.dir = translations[locale].dir;
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("/admin-stats");
        const apiStats = res.data?.stats ?? {};

        setStats((prev) => ({
          ...prev,
          users: apiStats.users ?? prev.users,
          posts: apiStats.posts ?? prev.posts,
          vendors: apiStats.vendors ?? prev.vendors,
          customers: apiStats.customers ?? prev.customers,
          orders: apiStats.orders ?? prev.orders,
          revenue: apiStats.revenue ?? prev.revenue,
          activePlans: apiStats.subscriptions ?? prev.activePlans,
          conversion: prev.conversion,
        }));

        setOrdersByStatus(
          (res.data?.orders_by_status ?? []).map((o) => ({
            label: statusLabel(o.status, locale),
            value: o.total,
            code: o.status,
            color: statusColor(o.status),
          }))
        );
        setRecentOrders(res.data?.recent_orders ?? []);
        setLatestUsers(res.data?.latest_users ?? []);
        setInventory(
          (res.data?.low_inventory ?? []).map((item) => ({
            ...item,
            label: inventoryLabel(item.status, locale),
            color: inventoryColor(item.status),
          }))
        );

        const trendData = res.data?.orders_trend ?? [];
        setTrend(trendData.map((t) => ({ day: t.day, total: t.total })));

        const paymentsByMethod = res.data?.payments_by_method ?? [];
        const mapped = { cash_on_delivery: 0, credit_card: 0, mobile_money: 0, online: 0 };
        paymentsByMethod.forEach((p) => {
          mapped[p.method] = p.total;
        });
        setPayments(mapped);

        if (res.data?.support) setSupport(res.data.support);
        if (res.data?.user) setUser(res.data.user);
        setError(null);
      } catch (err) {
        setError(t("noData"));
      } finally {
        setLoading(false);
      }
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
    } catch (e) {
      console.warn("logout failed, clearing token anyway");
    }
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const dirClass = translations[locale].dir === "rtl" ? "rtl" : "ltr";

  if (loading) {
    return (
      <div className={`dashboard ${dirClass}`} style={{ padding: "2rem" }}>
        <h2>{t("loading")}</h2>
      </div>
    );
  }

  return (
    <div className={`dashboard ${dirClass}`}>
      <header className="dashboard__header">
        <div>
          <p className="dashboard__eyebrow">{t("eyebrow")}</p>
          <h1 className="dashboard__title">
            {t("hello")} {user.firstName ?? "Admin"} 👋
          </h1>
          <p className="dashboard__subtitle">{t("subtitle")}</p>
          {error && <p className="muted" style={{ color: "#f97316" }}>{error}</p>}
        </div>
        <div className="dashboard__header-actions">
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="outline-btn"
            style={{ minWidth: "140px" }}
          >
            {Object.entries(translations).map(([code, conf]) => (
              <option key={code} value={code}>
                {conf.langName}
              </option>
            ))}
          </select>
          <button className="ghost-btn">{t("settings")}</button>
          <button className="outline-btn">{t("report")}</button>
          <button className="danger-btn" onClick={handleLogout}>{t("logout")}</button>
        </div>
      </header>

      <section className="kpi-grid">
        <KpiCard title={t("kpiUsers")} value={stats.users} change={t("liveFromDb")} accent="#6366f1" />
        <KpiCard title={t("kpiVendors")} value={stats.vendors} change="role=vendor" accent="#14b8a6" />
        <KpiCard title={t("kpiCustomers")} value={stats.customers} change="customers" accent="#f59e0b" />
        <KpiCard title={t("kpiPosts")} value={stats.posts} change="posts" accent="#0ea5e9" />
        <KpiCard title={t("kpiOrders")} value={stats.orders} change="orders" accent="#22c55e" />
        <KpiCard title={t("kpiRevenue")} value={`$${stats.revenue.toLocaleString()}`} change="payments=paid" accent="#8b5cf6" />
        <KpiCard title={t("kpiSubs")} value={stats.activePlans} change="seller_subscriptions" accent="#ec4899" />
        <KpiCard title={t("kpiConversion")} value={`${stats.conversion ?? 0}%`} change="(not calculated)" accent="#10b981" />
      </section>

      <section className="panels two-columns">
        <Card title={t("ordersTrendTitle")} hint={t("ordersTrendHint")}>
          {trend.length ? (
            <>
              <div className="sparkline">
                {trend.map((point, idx) => {
                  const max = Math.max(...trend.map((t) => t.total), 1);
                  const height = (point.total / max) * 160 + 20;
                  return <div key={idx} className="sparkline__bar" title={`${point.day}: ${point.total}`} style={{ height: `${height}px` }} />;
                })}
              </div>
              <div className="sparkline__legend">
                <span>{t("ordersTrendLegendAvg")}: {avg(trend.map((t) => t.total)).toFixed(1)}</span>
                <span className="muted">{t("ordersTrendLegendRange")}</span>
              </div>
            </>
          ) : (
            <p className="muted">{t("noData")}</p>
          )}
        </Card>

        <Card title={t("orderStatusTitle")} hint={t("orderStatusHint")}>
          <div className="status-bars">
            {ordersByStatus.length ? ordersByStatus.map((item) => (
              <div key={item.label} className="status-bars__row">
                <div className="status-bars__label">
                  <span className="dot" style={{ background: item.color }} />
                  {item.label}
                </div>
                <div className="status-bars__track">
                  <div
                    className="status-bars__fill"
                    style={{
                      width: `${stats.orders ? (item.value / stats.orders) * 100 : 0}%`,
                      background: item.color,
                    }}
                  />
                </div>
                <span className="status-bars__value">{item.value}</span>
              </div>
            )) : <p className="muted">{t("noData")}</p>}
          </div>
        </Card>
      </section>

      <section className="panels three-columns">
        <Card title={t("recentOrdersTitle")} hint={t("recentOrdersHint")}>
          <table className="data-table">
            <thead>
              <tr>
                <th>{t("colCode")}</th>
                <th>{t("colCustomer")}</th>
                <th>{t("colAmount")}</th>
                <th>{t("colPayment")}</th>
                <th>{t("colStatus")}</th>
                <th>{t("colDate")}</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.length ? recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.total.toLocaleString()}</td>
                  <td>{paymentLabel(order.method, locale)}</td>
                  <td><StatusPill value={statusLabel(order.status, locale)} /></td>
                  <td>{order.date}</td>
                </tr>
              )) : (
                <tr><td colSpan="6" className="muted" style={{ textAlign: "center" }}>{t("noOrders")}</td></tr>
              )}
            </tbody>
          </table>
        </Card>

        <Card title={t("latestUsersTitle")} hint={t("latestUsersHint")}>
          <div className="list">
            {latestUsers.length ? latestUsers.map((u) => (
              <div key={u.email} className="list__row">
                <div>
                  <div className="list__title">{u.name}</div>
                  <div className="list__subtitle">{u.email}</div>
                </div>
                <StatusPill value={u.role === "vendor" ? t("kpiVendors") : t("kpiCustomers")} tone={u.role === "vendor" ? "blue" : "green"} />
              </div>
            )) : <p className="muted">{t("noUsers")}</p>}
          </div>
        </Card>

        <Card title={t("inventoryTitle")} hint={t("inventoryHint")}>
          <div className="list">
            {inventory.length ? inventory.map((p) => (
              <div key={p.title} className="list__row">
                <div>
                  <div className="list__title">{p.title}</div>
                  <div className="list__subtitle">{`${p.label} • ${p.stock}`}</div>
                </div>
                <StatusPill value={p.label} tone={p.color} />
              </div>
            )) : <p className="muted">{t("noInventory")}</p>}
          </div>
        </Card>
      </section>

      <section className="panels two-columns">
        <Card title={t("financialTitle")} hint={t("financialHint")}>
          <div className="metrics-grid">
            <MiniMetric label={t("payCOD")} value={`$${(payments.cash_on_delivery ?? 0).toLocaleString()}`} desc="cash_on_delivery" accent="#f59e0b" />
            <MiniMetric label={t("payCard")} value={`$${(payments.credit_card ?? payments.online ?? 0).toLocaleString()}`} desc="credit_card / online" accent="#0ea5e9" />
            <MiniMetric label={t("payMobile")} value={`$${(payments.mobile_money ?? 0).toLocaleString()}`} desc="mobile_money" accent="#22c55e" />
            <MiniMetric label={t("subsActive")} value={`${stats.activePlans}`} desc="seller_subscriptions" accent="#8b5cf6" />
          </div>
        </Card>

        <Card title={t("supportTitle")} hint={t("supportHint")}>
          <div className="support">
            <div>
              <h4>{t("supportMessages")}</h4>
              <p className="support__value">{support.messages_last7}</p>
              <p className="muted">user_customer_messages</p>
            </div>
            <div>
              <h4>{t("supportRatings")}</h4>
              <p className="support__value">{support.avg_rating ?? 0} / 5</p>
              <p className="muted">ratings</p>
            </div>
            <div>
              <h4>{t("supportResponse")}</h4>
              <p className="support__value">—</p>
              <p className="muted">{t("supportResponseNote")}</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

const KpiCard = ({ title, value, change, accent }) => (
  <div className="kpi-card">
    <div className="kpi-card__bar" style={{ background: accent }} />
    <div className="kpi-card__title">{title}</div>
    <div className="kpi-card__value">{value}</div>
    <div className="kpi-card__change">{change}</div>
  </div>
);

const Card = ({ title, hint, children }) => (
  <div className="card">
    <div className="card__head">
      <div>
        <div className="card__title">{title}</div>
        <div className="card__hint">{hint}</div>
      </div>
    </div>
    {children}
  </div>
);

const StatusPill = ({ value, tone }) => {
  const palette =
    tone === "blue"
      ? { bg: "rgba(59,130,246,0.12)", color: "#2563eb" }
      : tone === "green"
        ? { bg: "rgba(34,197,94,0.12)", color: "#16a34a" }
        : { bg: `${tone ?? "rgba(99,102,241,0.12)"}`, color: tone ?? "#6366f1" };

  return (
    <span className="pill" style={{ background: palette.bg, color: palette.color }}>
      {value}
    </span>
  );
};

const MiniMetric = ({ label, value, desc, accent }) => (
  <div className="mini-metric">
    <div className="mini-metric__dot" style={{ background: accent }} />
    <div>
      <div className="mini-metric__label">{label}</div>
      <div className="mini-metric__value">{value}</div>
      <div className="mini-metric__desc">{desc}</div>
    </div>
  </div>
);

const statusLabel = (status, locale) => statusTranslations[status]?.[locale] ?? statusTranslations[status]?.en ?? status ?? "";

const statusColor = (status) => {
  switch (status) {
    case "pending":
      return "#f59e0b";
    case "confirmed":
      return "#10b981";
    case "shopped":
      return "#3b82f6";
    case "delivered":
      return "#22c55e";
    case "cancelled":
      return "#ef4444";
    default:
      return "#6366f1";
  }
};

const inventoryLabel = (state, locale) => {
  if (state === "کمبود" || state === "low") return inventoryTranslations.low[locale] ?? inventoryTranslations.low.en;
  if (state === "رو به اتمام" || state === "warn") return inventoryTranslations.warn[locale] ?? inventoryTranslations.warn.en;
  return inventoryTranslations.ok[locale] ?? inventoryTranslations.ok.en;
};

const inventoryColor = (state) => {
  if (state === "کمبود" || state === "low") return "#ef4444";
  if (state === "رو به اتمام" || state === "warn") return "#f59e0b";
  return "#10b981";
};

const paymentLabel = (method, locale) => {
  const map = {
    cash_on_delivery: { fa: "پرداخت در محل", en: "Cash on delivery", ps: "په کور نغدي" },
    credit_card: { fa: "کارت/آنلاین", en: "Card/Online", ps: "کارت/آنلاین" },
    online: { fa: "آنلاین", en: "Online", ps: "آنلاین" },
    mobile_money: { fa: "موبایل مانی", en: "Mobile money", ps: "موبایل ماني" },
  };
  return map[method]?.[locale] ?? map[method]?.en ?? method ?? "";
};

const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);

export default AdminDashboard;
