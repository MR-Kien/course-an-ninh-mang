export default function MainContent({ totalModules, completedModules, progressPercentage = 0, remainingModules = [] }) {
  return (
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
  );
}