import { ArrowRight, Award, BookOpen, Clock, Play, Shield, CircleCheckBig, Users } from "lucide-react";
export default function MainContent() {
    return (
        <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-8 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-violet-500/20">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent">
            <span className="text-white">Bài kiểm tra </span><span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">An ninh mạng cơ bản</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Đánh giá kiến thức an ninh mạng cơ bản của bạn với 25 câu hỏi. Kiểm tra hiểu biết về 
            các khái niệm, nguyên tắc và thực hành bảo mật cơ bản.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>45 phút</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>25 câu hỏi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>100 điểm</span>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Test Details */}
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-violet-500/20 rounded-[10px] flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-violet-300" />
              </div>
              <h2 className="text-2xl font-bold text-white">Chi tiết bài kiểm tra</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { number: "1", title: "25 câu hỏi trắc nghiệm", desc: "Các câu hỏi về kiến thức an ninh mạng cơ bản" },
                { number: "2", title: "Thời gian: 45 phút", desc: "Đủ thời gian để suy nghĩ kỹ từng câu hỏi" },
                { number: "3", title: "Thang điểm: 100%", desc: "Đánh giá mức độ hiểu biết của bạn" },
                { number: "4", title: "Có thể quay lại", desc: "Kiểm tra lại đáp án trước khi hoàn thành" }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-violet-500/20 rounded-xl flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold text-violet-300">{item.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Content */}
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-pink-500/20 rounded-[10px] flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-pink-300" />
              </div>
              <h2 className="text-2xl font-bold text-white">Nội dung kiểm tra</h2>
            </div>
            
            <div className="space-y-4">
              {[
                "Khái niệm an ninh mạng cơ bản",
                "Các mối đe dọa phổ biến", 
                "Phương pháp bảo vệ cơ bản",
                "Mật khẩu và xác thực",
                "Thực hành an toàn"
              ].map((item, index) => (
                <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-xl">
                  <CircleCheckBig className="w-5 h-5 text-green-300 mr-3 flex items-center justify-center" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-yellow-500/20 rounded-[10px] flex items-center justify-center mr-3">
              <Users className="w-5 h-5 text-yellow-300" />
            </div>
            <h2 className="text-2xl font-bold text-white">Lưu ý quan trọng</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "📝", title: "Đọc kỹ đề bài", desc: "Hiểu rõ câu hỏi trước khi chọn đáp án phù hợp nhất", color: "pink" },
              { icon: "🔄", title: "Dựa vào kiến thức cơ bản", desc: "Áp dụng những gì bạn đã học về an ninh mạng", color: "violet" },
              { icon: "⏰", title: "Sử dụng thời gian hợp lý", desc: "45 phút cho 25 câu, bạn có đủ thời gian suy nghĩ", color: "green" },
              { icon: "⚠️", title: "Hoàn thành đầy đủ", desc: "Trả lời tất cả câu hỏi để có kết quả chính xác nhất", color: "red" }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className={`w-8 h-8 bg-${item.color}-500/20 rounded-[10px] flex items-center justify-center mr-3 mt-1`}>
                  <span className="text-sm">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Button and Stats */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <button className="flex bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-xl font-bold mb-6 transition-all duration-300 shadow-lg shadow-violet-500/25">
                <Play className="w-6 h-6 mr-3" />
                Bắt đầu làm bài
                <ArrowRight className="w-6 h-6 ml-3" />
            </button>
          </div>
          
          
          <p className="text-slate-400 mb-8">
            Bài kiểm tra sẽ đánh giá kiến thức an ninh mạng cơ bản của bạn.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-4 gap-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-300 mb-2">25</div>
              <div className="text-sm text-slate-400">Câu hỏi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">45</div>
              <div className="text-sm text-slate-400">Phút làm bài</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100</div>
              <div className="text-sm text-slate-400">Điểm tối đa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-sm text-slate-400">Lĩnh vực</div>
            </div>
          </div>
        </div>
      </main>
    );
}