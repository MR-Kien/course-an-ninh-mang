import { Award, Book, ChevronRight, Crown, Filter, Play, Search, Sparkles, Target } from "lucide-react";
export default function MainContent() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-900/30 to-rose-900/30 backdrop-blur-sm relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                <span>Chào mừng trở lại, </span>
                <span className="bg-gradient-to-r from-violet-75 to-rose-60 bg-clip-text text-transparent">Premium User</span>
              </h2>
              <p className="text-azure-84">Tiếp tục hành trình học tập an ninh mạng của bạn nhé ~</p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-56 to-rose-51 rounded-2xl flex items-center justify-center mb-2">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-sm text-azure-65">Khóa học đang học</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-spring-green-36 to-spring-green-30 rounded-2xl flex items-center justify-center mb-2">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-sm text-azure-65">Lab hoàn thành</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-40 to-orange-48 rounded-2xl flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">8,750</div>
                <div className="text-sm text-azure-65">Tổng điểm</div>
              </div>
            </div>
          </div>

          {/* Flashcard Banner */}
          <div className="absolute w-fit right-4 top-44 bg-gradient-to-r from-yellow-47 to-orange-53 text-white px-4 py-2 rounded-xl text-sm font-bold transform">
            Học với Flashcard
          </div>

          {/* Progress Section */}
            <div className="mt-2">
                <div className="flex items-center space-x-2 mb-6">
                    <div className="w-5 h-5 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-pink-400"/>
                    </div>
                    <h3 className="text-lg font-bold text-white">Tiến độ học tập</h3>
                </div>

                <div className="space-y-4">
                    {[
                    { name: "Penetration Testing Nâng cao", progress: 75 },
                    { name: "Phân tích Malware Chuyên nghiệp", progress: 45 },
                    { name: "Red Team Operations", progress: 30 },
                    ].map((course, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                        <span className="text-azure-84">{course.name}</span>
                        <span className="text-violet-75">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-azure-17 rounded-xl h-2">
                        <div 
                            className="bg-gradient-to-r from-violet-56 to-rose-51 h-2 rounded-xl transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                        ></div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 p-1 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800/50">
          <div className="flex">
            <button className="flex-1 bg-gradient-to-r from-violet-56 to-rose-51 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2">
              <Book className="w-5 h-5" />
              <span>Khóa học Premium</span>
            </button>
            <button className="flex-1 text-azure-65 py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 hover:text-white transition-colors">
              <Target className="w-5 h-5" />
              <span>Phòng Lab Nâng cao</span>
            </button>
            <button className="flex-1 text-azure-65 py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 hover:text-white transition-colors">
              <Award className="w-5 h-5" />
              <span>Thành tựu</span>
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
            <input 
              type="text" 
              placeholder="Tìm kiếm khóa học, lab..."
              className="w-full bg-gray-900/50 border border-gray-800/50 rounded-xl py-4 pl-12 pr-4 text-white placeholder-azure-65 backdrop-blur-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
          <button className="flex items-center space-x-2 bg-gray-900/50 border border-gray-800/50 rounded-xl py-4 px-6 text-white backdrop-blur-sm hover:border-violet-500 transition-colors">
            <Filter className="w-5 h-5 text-azure-65" />
            <span>Tất cả danh mục</span>
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Course Card 1 */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm overflow-hidden group hover:border-violet-500/50 transition-all duration-300">
            <div className="relative h-48">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6d2660ce80b5b3da1645d909f5117f6500cbe3ea?width=1180" 
                alt="Penetration Testing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-gradient-to-r from-rose-60 to-violet-65 text-white text-xs font-bold px-3 py-1 rounded-xl">MỚI</span>
                <span className="bg-gradient-to-r from-yellow-47 to-orange-53 text-white text-xs font-bold px-3 py-1 rounded-xl flex items-center space-x-1">
                  <Crown className="w-3 h-3" />
                  <span>PREMIUM</span>
                </span>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="bg-violet-500/20 border border-violet-500/30 text-violet-75 text-xs px-3 py-1 rounded-xl">Nâng cao</span>
              </div>

              {/* Progress in image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">Penetration Testing Nâng cao</span>
                  <span className="text-violet-85 text-sm">75%</span>
                </div>
                <div className="w-full bg-black/40 rounded-xl h-2 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-violet-65 to-rose-60 h-2 rounded-xl" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Penetration Testing Nâng cao</h3>
              <p className="text-azure-65 text-sm mb-4 leading-relaxed">
                Khóa học chuyên sâu về kỹ thuật penetration testing với các công cụ và phương pháp tiên tiến nhất.
              </p>
              <div className="mb-4">
                <span className="bg-violet-500/20 text-violet-85 text-xs px-2 py-1 rounded-xl">Ethical Hacking</span>
              </div>
              <button className="w-full bg-gradient-to-r from-violet-56 to-rose-51 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Tiếp tục học</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm overflow-hidden group hover:border-violet-500/50 transition-all duration-300">
            <div className="relative h-48">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e6c85cb7f3ac390a45e7d148e477d93602b7fbf9?width=1180" 
                alt="rounded-xl" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-yellow-47 to-orange-53 text-white text-xs font-bold px-3 py-1 rounded-xl flex items-center space-x-1">
                  <Crown className="w-3 h-3" />
                  <span>PREMIUM</span>
                </span>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="bg-red-500/20 border border-red-500/30 text-red-71 text-xs px-3 py-1 rounded-xl">Chuyên gia</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">Phân tích Malware Chuyên nghiệp</span>
                  <span className="text-violet-85 text-sm">45%</span>
                </div>
                <div className="w-full bg-black/40 rounded-xl h-2 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-violet-65 to-rose-60 h-2 rounded-xl" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Phân tích Malware Chuyên nghiệp</h3>
              <p className="text-azure-65 text-sm mb-4 leading-relaxed">
                Học cách phân tích và reverse engineering các loại malware phức tạp trong môi trường sandbox.
              </p>
              <div className="mb-4">
                <span className="bg-violet-500/20 text-violet-85 text-xs px-2 py-1 rounded-xl">Malware Analysis</span>
              </div>
              <button className="w-full bg-gradient-to-r from-violet-56 to-rose-51 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Tiếp tục học</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm overflow-hidden group hover:border-violet-500/50 transition-all duration-300">
            <div className="relative h-48">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/5aac0a56993cf785b5c4d4c796ebe416d1ac4483?width=1180" 
                alt="Red Team Operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-gradient-to-r from-rose-60 to-violet-65 text-white text-xs font-bold px-3 py-1 rounded-xl">MỚI</span>
                <span className="bg-gradient-to-r from-yellow-47 to-orange-53 text-white text-xs font-bold px-3 py-1 rounded-xl flex items-center space-x-1">
                  <Crown className="w-3 h-3" />
                  <span>PREMIUM</span>
                </span>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="bg-red-500/20 border border-red-500/30 text-red-71 text-xs px-3 py-1 rounded-xl">Chuyên gia</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">Red Team Operations</span>
                  <span className="text-violet-85 text-sm">30%</span>
                </div>
                <div className="w-full bg-black/40 rounded-xl h-2 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-violet-65 to-rose-60 h-2 rounded-xl" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Red Team Operations</h3>
              <p className="text-azure-65 text-sm mb-4 leading-relaxed">
                Khóa học toàn diện về các chiến thuật, kỹ thuật và quy trình của Red Team trong môi trường doanh nghiệp.
              </p>
              <div className="mb-4">
                <span className="bg-violet-500/20 text-violet-85 text-xs px-2 py-1 rounded-xl">Red Team</span>
              </div>
              <button className="w-full bg-gradient-to-r from-violet-56 to-rose-51 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Tiếp tục học</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm overflow-hidden group hover:border-violet-500/50 transition-all duration-300">
            <div className="relative h-48">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d171b0850b4bde1e4fd21c6f55904b1915376fc1?width=1180" 
                alt="Cloud Security" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-yellow-47 to-orange-53 text-white text-xs font-bold px-3 py-1 rounded-xl flex items-center space-x-1">
                  <Crown className="w-3 h-3" />
                  <span>PREMIUM</span>
                </span>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="bg-violet-500/20 border border-violet-500/30 text-violet-75 text-xs px-3 py-1 rounded-xl">Nâng cao</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">Bảo mật Cloud Computing</span>
                  <span className="text-violet-85 text-sm">60%</span>
                </div>
                <div className="w-full bg-black/40 rounded-xl h-2 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-violet-65 to-rose-60 h-2 rounded-xl" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Bảo mật Cloud Computing</h3>
              <p className="text-azure-65 text-sm mb-4 leading-relaxed">
                Nắm vững các kỹ thuật bảo mật cho AWS, Azure và Google Cloud Platform.
              </p>
              <div className="mb-4">
                <span className="bg-violet-500/20 text-violet-85 text-xs px-2 py-1 rounded-xl">Cloud Security</span>
              </div>
              <button className="w-full bg-gradient-to-r from-violet-56 to-rose-51 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Tiếp tục học</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
  );
}