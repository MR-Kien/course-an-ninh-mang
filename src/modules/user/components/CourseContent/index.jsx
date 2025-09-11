import { BookOpen, Download, FileText, CheckSquare } from 'lucide-react';

function MainDocument() {
  return (
    <div className="bg-[#1e293b] rounded-2xl border border-slate-600 p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
        <h3 className="text-xl font-bold text-white">Tài liệu học tập chính</h3>
      </div>

      {/* Featured Document */}
      <div className="border border-purple-600/40 bg-gradient-to-r from-[#29264a] to-[#32263d] rounded-xl p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mr-3">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Giáo trình An ninh mạng cơ bản</h4>
              <p className="text-sm text-slate-300">PDF • 45 trang • Cập nhật 2024</p>
            </div>
          </div>
          <button className="p-2 bg-slate-600 border border-slate-500 rounded-lg hover:bg-slate-500 transition-colors">
            <Download className="w-5 h-5 text-slate-300" />
          </button>
        </div>
        
        <div className="bg-slate-600/50 border border-slate-500 rounded-xl p-4 mb-4">
          <p className="text-sm text-slate-200 leading-relaxed">
            Tài liệu này cung cấp kiến thức nền tảng về an ninh mạng, bao gồm các khái niệm cơ bản, mối đe
            dọa phổ biến, và các biện pháp bảo vệ. Phù hợp cho người mới bắt đầu học về bảo mật.
          </p>
        </div>

        <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
          <BookOpen className="w-4 h-4 mr-2" />
          Đọc tài liệu
        </button>
      </div>

      {/* Additional Materials */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-600/50 border border-slate-500 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mr-3">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white">Slide thuyết trình</h5>
              <p className="text-xs text-slate-400">PowerPoint • 25 slides</p>
            </div>
          </div>
          <Download className="w-4 h-4 text-slate-400" />
        </div>

        <div className="bg-slate-600/50 border border-slate-500 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mr-3">
              <CheckSquare className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white">Bài tập thực hành</h5>
              <p className="text-xs text-slate-400">PDF • 10 bài tập có lời giải</p>
            </div>
          </div>
          <Download className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </div>
  );
}

function LearningObjectives() {
  const objectives = [
    {
      number: 1,
      title: 'Hiểu khái niệm An ninh mạng',
      description: 'Nắm vững định nghĩa, tầm quan trọng và phạm vi của an ninh mạng'
    },
    {
      number: 2,
      title: 'Nhận biết các mối đe dọa',
      description: 'Phân loại và đánh giá các loại tấn công mạng phổ biến'
    },
    {
      number: 3,
      title: 'Áp dụng nguyên tắc CIA',
      description: 'Hiểu và vận dụng ba trụ cột: Bảo mật, Toàn vẹn, Khả dụng'
    },
    {
      number: 4,
      title: 'Thực hành bảo mật cơ bản',
      description: 'Triển khai các biện pháp bảo vệ cơ bản cho hệ thống'
    }
  ];

  return (
    <div className="bg-[#1e293b] rounded-2xl border border-slate-600 p-6 shadow-sm">
      <h3 className="text-xl font-bold text-white mb-6">Mục tiêu học tập</h3>
      
      <div className="space-y-4">
        {objectives.map((objective) => (
          <div key={objective.number} className="flex items-start">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mr-4 mt-0.5">
              <span className="text-sm font-bold text-white">{objective.number}</span>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">{objective.title}</h4>
              <p className="text-sm text-slate-300">{objective.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CourseContent() {
  return (
    <div className="space-y-8">
      <MainDocument />
      <LearningObjectives />
    </div>
  );
}
