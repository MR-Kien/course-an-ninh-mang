import { useState } from "react";
import { Search, Settings, Bell, Check, Circle, Lock } from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const modules = [
    {
      id: 1,
      title: "Giới thiệu An ninh mạng",
      duration: "45 phút",
      description: "Tổng quan về an ninh mạng và các khái niệm cơ bản",
      completed: true,
      featured: true,
    },
    {
      id: 2,
      title: "Giao thức mạng & Dịch vụ",
      duration: "60 phút",
      description: "Tìm hiểu các giao thức TCP/IP, DNS, HTTP/HTTPS",
      completed: true,
    },
    {
      id: 3,
      title: "Quét mạng & Trinh sát",
      duration: "75 phút",
      description: "Kỹ thuật quét mạng và thu thập thông tin",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 4,
      title: "Tường lửa & Phòng thủ mạng",
      duration: "90 phút",
      description: "Cấu hình và quản lý tường lửa",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 5,
      title: "Hệ thống phát hiện xâm nhập",
      duration: "50 phút",
      description: "IDS/IPS và giám sát an ninh mạng",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 6,
      title: "Lý thuyết mã hóa mạng",
      duration: "70 phút",
      description: "Phân tích và khai thác lỗ hổng mạng",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 7,
      title: "Bảo mật mạng không dây",
      duration: "65 phút",
      description: "WiFi security, WPA/WPA2, và các cuộc tấn công",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 8,
      title: "Giám sát & Phân tích mạng",
      duration: "80 phút",
      description: "Wireshark, tcpdump và phân tích lưu lượng",
      completed: false,
      locked: true,
      // pro: true,
    },
  ];

  const completedModules = modules.filter(m => m.completed).length;
  const totalModules = modules.length;
  const progressPercentage = (completedModules / totalModules) * 100;

  const remainingModules = [
    { name: "Quét mạng & Trinh sát", duration: "75 phút" },
    { name: "Tường lửa & Phòng thủ mạng", duration: "90 phút" },
    { name: "Hệ thống phát hiện xâm nhập", duration: "50 phút" },
    { name: "Lý thuyết mã hóa mạng", duration: "70 phút" },
    { name: "Bảo mật mạng không dây", duration: "65 phút" },
    { name: "Giám sát & Phân tích mạng", duration: "80 phút" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-['Roboto',sans-serif]">
      {/* Header */}
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
              <a href="#" className="text-slate-300 hover:text-white">Khóa học</a>
              <a href="#" className="text-slate-300 hover:text-white">Phòng lab</a>
              <a href="#" className="text-slate-300 hover:text-white">CTF</a>
              <a href="#" className="text-slate-300 hover:text-white">Giới thiệu</a>
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
                <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
              </div>
              <span className="text-white">User</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-slate-800 min-h-[calc(100vh-73px)] border-r border-slate-700 overflow-y-auto">
          <div className="p-6">
            {/* Course Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">An ninh mạng cơ bản</h2>
              <p className="text-sm text-slate-400 mb-4">Khóa học toàn diện về an ninh mạng</p>
              
              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-400">Tiến độ</span>
                  <span className="text-xs text-slate-400">{completedModules}/{totalModules}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-xl h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-xl transition-all duration-300" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Module List */}
            <div className="space-y-3">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className={`
                    rounded-xl border p-4 transition-all duration-200
                    ${module.completed 
                      ? (module.featured 
                          ? 'border-purple-600 bg-gradient-to-r from-purple-900/30 to-pink-900/30' 
                          : 'border-green-500 bg-slate-700/50')
                      : 'border-slate-600 bg-slate-700/50'
                    }
                    ${module.locked ? 'opacity-60' : 'hover:bg-slate-700/70 cursor-pointer'}
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {module.completed ? (
                        <div className="w-5 h-5 rounded-xl bg-green-500 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : module.locked ? (
                        <Lock className="w-5 h-5 text-slate-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className={`text-sm font-medium leading-5 ${module.completed ? 'text-white' : 'text-slate-200'}`}>
                          {module.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded-xl">
                            {module.duration}
                          </span>
                          {module.pro && (
                            <span className="text-xs bg-yellow-500 text-black font-bold px-2 py-1 rounded">
                              PRO
                            </span>
                          )}
                        </div>
                      </div>
                      {module.description && (
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {module.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Final Test */}
              <div className="border-t border-slate-700 pt-6 mt-6">
                <div className="rounded-xl border border-slate-600 bg-slate-700/50 p-4 opacity-50">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-slate-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-medium text-slate-200">Bài kiểm tra cuối khóa</h3>
                        <span className="text-xs bg-red-500 text-white font-bold px-2 py-1 rounded flex-shrink-0">
                          KHÓA
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">20 câu hỏi - 45 phút</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-8 text-center">
              {/* Lock Icon */}
              <div className="w-16 h-16 mx-auto mb-8">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path
                    d="M50.6667 29.3333H13.3333C10.3878 29.3333 8 31.7211 8 34.6666V53.3333C8 56.2788 10.3878 58.6666 13.3333 58.6666H50.6667C53.6122 58.6666 56 56.2788 56 53.3333V34.6666C56 31.7211 53.6122 29.3333 50.6667 29.3333Z"
                    stroke="#9CA3AF"
                    strokeWidth="5.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M18.667 29.3333V18.6666C18.667 15.1304 20.0718 11.739 22.5722 9.23849C25.0727 6.73801 28.4641 5.33325 32.0003 5.33325C35.5365 5.33325 38.9279 6.73801 41.4284 9.23849C43.9289 11.739 45.3337 15.1304 45.3337 18.6666V29.3333"
                    stroke="#9CA3AF"
                    strokeWidth="5.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Title and Description */}
              <h1 className="text-3xl font-bold text-white mb-4">Bài kiểm tra chưa khả dụng</h1>
              <p className="text-lg text-slate-300 mb-8">
                Bạn cần hoàn thành tất cả 8 module để mở khóa bài kiểm tra cuối khóa
              </p>

              {/* Progress Card */}
              <div className="bg-slate-800 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.19-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-lg font-bold text-white">Tiến độ hiện tại</h3>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{completedModules}/{totalModules}</div>
                  <div className="text-slate-400 mb-4">Module đã hoàn thành</div>
                  
                  <div className="w-full bg-slate-700 rounded-xl h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-xl transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-slate-400">{Math.round(progressPercentage)}% hoàn thành</div>
                </div>
              </div>

              {/* Remaining Modules */}
              <div className="bg-slate-800/80 rounded-xl p-6 mb-8">
                <h4 className="text-base font-bold text-white mb-4">Module còn lại cần hoàn thành:</h4>
                <div className="space-y-2">
                  {remainingModules.map((module, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{module.name}</span>
                      <span className="text-slate-400">{module.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Learning Button */}
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
                Tiếp tục học
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
