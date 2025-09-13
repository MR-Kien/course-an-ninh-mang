import { Search, Bell, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";
export function Header() {
  return (
    <header className="bg-slate-700 border-b border-slate-600 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link to={ENDPOINTS.INDEX} className="flex items-center">
                <div className="w-8 h-8 mr-3">
                  <Shield className="w-8 h-8 text-[#a10ea4] stroke-2" />
                </div>
                <h1 className="text-xl font-bold text-white">LozoAcademy</h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6 ml-6">
              <Link
                to={ENDPOINTS.USER.COURSES}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Khóa học
              </Link>
              <Link
                to={ENDPOINTS.USER.LABS}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Phòng lab
              </Link>
              <Link
                to={ENDPOINTS.USER.CFT}
                className="text-slate-300 hover:text-white transition-colors"
              >
                CTF
              </Link>
              <Link
                to={ENDPOINTS.USER.ABOUT}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Giới thiệu
              </Link>
            </nav>
          </div>

          {/* Search and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                className="w-64 pl-10 pr-4 py-2 bg-slate-600 border border-slate-500 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            {/* Notification Icon */}
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* Settings Icon */}
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white text-sm">User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
