import { Clock, BookOpen, Users, Award } from 'lucide-react';

export function CourseIntro() {
  return (
    <div className="bg-[#253144] rounded-2xl border border-slate-500 p-8">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white leading-tight">
            Giới thiệu An ninh mạng
          </h1>
          <p className="text-lg text-slate-300">
            Tổng quan về an ninh mạng và các khái niệm cơ bản
          </p>
        </div>
        
        <div className="flex items-center text-slate-300">
          <Clock className="w-5 h-5 mr-2" />
          <span>45 phút</span>
        </div>
      </div>

      {/* Course Features */}
      <div className="flex items-center space-x-6 text-sm">
        <div className="flex items-center text-white">
          <BookOpen className="w-4 h-4 mr-2" />
          <span>Tài liệu học tập</span>
        </div>
        
        <div className="flex items-center text-white">
          <Users className="w-4 h-4 mr-2" />
          <span>1,234 học viên</span>
        </div>
        
        <div className="flex items-center text-white">
          <Award className="w-4 h-4 mr-2" />
          <span>Chứng chỉ hoàn thành</span>
        </div>
      </div>
    </div>
  );
}
