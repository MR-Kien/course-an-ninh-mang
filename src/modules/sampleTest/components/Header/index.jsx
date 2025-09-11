import { Bell, Settings, User, Search } from "lucide-react";
export default function Header() {
    return (
        <header className="border-b border-slate-600 bg-slate-800 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="ml-3 text-xl font-bold text-white">LozoAcademy</span>
              </div>
              
              <nav className="flex items-center space-x-6">
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Khóa học</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Phòng lab</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">CTF</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Giới thiệu</a>
              </nav>
            </div>

            {/* Search and User */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm khóa học..."
                  className="w-64 pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              
              <button size="icon" className="text-slate-400 hover:text-white">
                <Bell className="w-5 h-5" />
              </button>
              
              <button size="icon" className="text-slate-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-white">User</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}