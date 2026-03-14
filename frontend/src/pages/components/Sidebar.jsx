import { FaHome, FaUsers, FaBox, FaShoppingCart, FaChartBar } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <ul className="space-y-4">
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaHome /> Dashboard
        </li>
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaUsers /> Users
        </li>
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaBox /> Posts
        </li>
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaShoppingCart /> Orders
        </li>
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaChartBar /> Reports
        </li>
      </ul>
    </div>
  );
}