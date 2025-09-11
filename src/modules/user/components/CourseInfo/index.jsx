import { Star, CheckCircle, ExternalLink, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../../../../routes/endPoints';
function CourseDetails() {
  return (
    <div className="bg-[#1e293b] rounded-2xl border border-slate-600 p-6 shadow-sm mb-4">
      <h3 className="text-lg font-bold text-white mb-4">Thông tin khóa học</h3>
      
      <div className="space-y-4">
        {/* Level */}
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Cấp độ</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-xl text-sm font-medium">
            Cơ bản
          </span>
        </div>

        {/* Duration */}
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Thời lượng</span>
          <span className="text-white">45 phút</span>
        </div>

        {/* Format */}
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Định dạng</span>
          <span className="text-white">Tài liệu</span>
        </div>

        {/* Rating */}
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Đánh giá</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white ml-1">4.8</span>
          </div>
        </div>

        {/* Completion */}
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Hoàn thành</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-xl text-sm font-medium">
            Đã hoàn thành
          </span>
        </div>
      </div>
    </div>
  );
}

function AdditionalResources() {
  const resources = [
    'NIST Cybersecurity Framework',
    'OWASP Top 10',
    'ISO 27001 Guidelines',
    'Glossary thuật ngữ'
  ];

  return (
    <div className="bg-[#1e293b] rounded-2xl border border-slate-600 p-6 shadow-sm mb-4">
      <h3 className="text-lg font-bold text-white mb-4">Tài liệu bổ sung</h3>
      
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-600/50 transition-colors cursor-pointer">
            <div className="flex items-center">
              {index === 3 ? (
                <FileText className="w-4 h-4 text-slate-400 mr-3" />
              ) : (
                <ExternalLink className="w-4 h-4 text-slate-400 mr-3" />
              )}
              <span className="text-slate-300">{resource}</span>
            </div>
            {index === 3 && <Download className="w-4 h-4 text-slate-400" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function LearningProgress() {
  const progressItems = [
    { task: 'Đọc tài liệu', completed: true },
    { task: 'Làm bài tập', completed: false },
    { task: 'Kiểm tra', completed: false }
  ];

  return (
    <div className="bg-[#1e293b] rounded-2xl border border-slate-600 p-6 shadow-sm mb-4">
      <h3 className="text-lg font-bold text-white mb-4">Tiến độ học tập</h3>
      
      <div className="space-y-4">
        {progressItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-slate-300">{item.task}</span>
            {item.completed ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <div className="w-5 h-5 border-2 border-slate-400 rounded-xl"></div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-4 px-6 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
        <Link to={ENDPOINTS.USER.NOTEST} className='flex items-center'>
          <FileText className="w-5 h-5 mr-2" />
          Làm bài kiểm tra
        </Link>
      </button>
    </div>
  );
}

export function CourseInfo() {
  return (
    <div className="space-y-4">
      <CourseDetails />
      <AdditionalResources />
      <LearningProgress />
    </div>
  );
}
