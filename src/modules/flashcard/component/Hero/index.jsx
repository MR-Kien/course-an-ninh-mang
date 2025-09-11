import { CheckCircle, Target, Brain, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-white">Học lý thuyết với </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Flashcard
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Nắm vững kiến thức an ninh mạng qua các thẻ học tương tác với hiệu ứng đẹp mắt
        </p>

        {/* Feature highlight card */}
        <div className="max-w-3xl mx-auto border-purple-500/30 bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-pink-900/30 backdrop-blur-sm rounded-xl border p-1 shadow-lg">
          <div className="p-8 space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Zap className="w-5 h-5 text-yellow-400"/>
              <h3 className="text-xl font-bold text-white">Phương pháp học hiệu quả</h3>
              <Zap className="w-5 h-5 text-yellow-400"/>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Flashcard giúp bạn ghi nhớ kiến thức lâu dài thông qua việc lặp lại có khoảng cách. 
              Mỗi thẻ được thiết kế để tối ưu hóa quá trình học tập và củng cố kiến thức an ninh mạng.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-purple-300">
                <CheckCircle className="w-4 h-4" />
                Học theo tiến độ cá nhân
              </div>
              <div className="flex items-center gap-2 text-pink-300">
                <Brain className="w-4 h-4"/>
                Tăng cường trí nhớ
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <Target className="w-4 h-4" />
                Kiến thức thực tế
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
