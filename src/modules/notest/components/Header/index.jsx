import { Search, Settings, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";
export default function Header({ searchQuery, setSearchQuery }) {
  {
    /* Header */
  }
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <path
                  d="M26.6663 17.3333C26.6663 23.9999 21.9997 27.3333 16.453 29.2666C16.1626 29.365 15.8471 29.3603 15.5597 29.2533C9.99967 27.3333 5.33301 23.9999 5.33301 17.3333V7.99995C5.33301 7.64633 5.47348 7.30719 5.72353 7.05714C5.97358 6.80709 6.31272 6.66662 6.66634 6.66662C9.33301 6.66662 12.6663 5.06662 14.9863 3.03995C15.2688 2.79861 15.6281 2.66602 15.9997 2.66602C16.3712 2.66602 16.7305 2.79861 17.013 3.03995C19.3463 5.07995 22.6663 6.66662 25.333 6.66662C25.6866 6.66662 26.0258 6.80709 26.2758 7.05714C26.5259 7.30719 26.6663 7.64633 26.6663 7.99995V17.3333Z"
                  stroke="#A10EA4"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold">LozoAcademy</h1>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              to={ENDPOINTS.USER.COURSES}
              className="text-slate-300 hover:text-white"
            >
              Khóa học
            </Link>
            <Link
              to={ENDPOINTS.USER.LABS}
              className="text-slate-300 hover:text-white"
            >
              Phòng lab
            </Link>
            <Link
              to={ENDPOINTS.USER.CFT}
              className="text-slate-300 hover:text-white"
            >
              CTF
            </Link>
            <Link
              to={ENDPOINTS.USER.ABOUT}
              className="text-slate-300 hover:text-white"
            >
              Giới thiệu
            </Link>
          </nav>
        </div>

        {/* Search and User Section */}
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button className="p-2 text-slate-400 hover:text-white">
            <Bell className="w-5 h-5" />
          </button>

          <button className="p-2 text-slate-400 hover:text-white">
            <Settings className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </div>
            <span className="text-white">User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
