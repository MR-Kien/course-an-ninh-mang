import { Check, Lock, Circle } from "lucide-react";

export default function Sidebar({ totalModules, completedModules, progressPercentage = 0, modules = [] }) {
  return (
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
  );
}