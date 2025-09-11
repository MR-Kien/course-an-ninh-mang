import { Search, Bell, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-[#1e293b] border-b border-lozo-border shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        {/* Left section: Logo and Navigation */}
        <div className="flex items-center gap-6 lg:gap-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 mr-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.6663 17.3333C26.6663 23.9999 21.9997 27.3333 16.453 29.2666C16.1626 29.365 15.8471 29.3603 15.5597 29.2533C9.99967 27.3333 5.33301 23.9999 5.33301 17.3333V7.99995C5.33301 7.64633 5.47348 7.30719 5.72353 7.05714C5.97358 6.80709 6.31272 6.66662 6.66634 6.66662C9.33301 6.66662 12.6663 5.06662 14.9863 3.03995C15.2688 2.79861 15.6281 2.66602 15.9997 2.66602C16.3712 2.66602 16.7305 2.79861 17.013 3.03995C19.3463 5.07995 22.6663 6.66662 25.333 6.66662C25.6866 6.66662 26.0258 6.80709 26.2758 7.05714C26.5259 7.30719 26.6663 7.64633 26.6663 7.99995V17.3333Z"
                  stroke="#A10EA4"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-white text-lg lg:text-xl font-bold font-roboto">LozoAcademy</h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-[#abb5c1] text-base font-roboto hover:text-white transition-colors">
              Khóa học
            </a>
            <a href="#" className="text-[#abb5c1] text-base font-roboto hover:text-white transition-colors">
              Phòng lab
            </a>
            <a href="#" className="text-[#abb5c1] text-base font-roboto hover:text-white transition-colors">
              CTF
            </a>
            <a href="#" className="text-[#abb5c1] text-base font-roboto hover:text-white transition-colors">
              Giới thiệu
            </a>
          </nav>
        </div>

        {/* Right section: Search, Icons, and User */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Search Bar - Hidden on mobile, responsive width */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-lozo-text-muted" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              className="w-48 lg:w-64 pl-10 pr-4 py-2 bg-lozo-tertiary border border-lozo-border rounded-xl text-sm text-lozo-text-muted placeholder-lozo-text-muted focus:outline-none focus:ring-2 focus:ring-lozo-purple focus:border-transparent"
            />
          </div>

          {/* Search Icon for mobile */}
          <button className="p-2 text-[#abb5c1] hover:text-white transition-colors md:hidden">
            <Search className="h-5 w-5" />
          </button>

          {/* Notification Icon */}
          <button className="p-2 text-[#abb5c1] hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>

          {/* Settings Icon */}
          <button className="p-2 text-[#abb5c1] hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#DB2777] flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="hidden sm:block text-white text-base font-roboto">User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
