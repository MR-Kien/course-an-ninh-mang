import { Bell, Shield, Users, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";
export function Header() {
  const username = JSON.parse(localStorage.getItem("user"))?.name || "Admin";
  return (
    <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b border-orange-700/50 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl">LozoAcademy</span>
          <div className="bg-red-600 px-2 py-1 rounded text-white text-sm font-medium">
            ADMIN
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={ENDPOINTS.USER.MANAMENT}
            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>Quản lý khóa học</span>
          </Link>
          <Link
            to={ENDPOINTS.USER.ADMINDASHBOARD}
            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
            <span>Xin chào, {username}</span>
          </button>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng xuất</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
