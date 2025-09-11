import { Bell, Crown, Settings, Shield, User } from "lucide-react";
export default function Header() {
  return (
    <header className="relative z-10 border-b border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-1">
                <Shield className="w-8 h-8 text-pink-600 stroke-2" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">LozoAcademy</h1>
                <div className="flex items-center space-x-1">
                  <Crown className="w-3 h-3 text-yellow-53" />
                  <span className="text-yellow-53 text-xs font-medium">PREMIUM</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-azure-84 hover:text-white transition-colors">Khóa học</a>
              <a href="#" className="text-azure-84 hover:text-white transition-colors">Phòng lab</a>
              <a href="#" className="text-azure-84 hover:text-white transition-colors">CTF</a>
              <a href="#" className="text-azure-84 hover:text-white transition-colors">Giới thiệu</a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-800/50 rounded-xl transition-colors">
                <Bell className="w-5 h-5 text-azure-65" />
              </button>
              <button className="p-2 hover:bg-gray-800/50 rounded-xl transition-colors">
                <Settings className="w-5 h-5 text-azure-65" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-56 to-rose-51 rounded-xl flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-azure-84 text-sm">Xin chào, </span>
                  <span className="text-white text-sm font-medium">Premium User</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}