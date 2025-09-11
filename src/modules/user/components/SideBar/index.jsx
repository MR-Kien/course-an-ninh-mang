import { Lock, CheckCircle} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../../../../routes/endPoints';
// interface LessonProps {
//   title: string;
//   description: string;
//   duration: string;
//   isCompleted: boolean;
//   isLocked: boolean;
//   isActive?: boolean;
// }

function LessonItem({ title, description, duration, isCompleted, isLocked, isActive }) {
  const getStatusIcon = () => {
    if (isLocked) {
      return <Lock className="w-5 h-5 text-slate-400 opacity-60" />;
    }
    if (isCompleted) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    return <CheckCircle className="w-5 h-5 text-green-500" />;
  };

  const content = (
    <div className={`p-4 rounded-xl border transition-all cursor-pointer ${
      isActive 
        ? 'border-purple-600 bg-gradient-primary-subtle' 
        : 'border-slate-500 bg-slate-600/50'
    } ${isLocked ? 'opacity-60' : ''}`}>
      <div className="flex items-start space-x-3 mt-2">
        <div className="mt-1">{getStatusIcon()}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h4 className={`font-bold text-sm leading-5 ${
              isActive ? 'text-white' : 'text-slate-100'
            }`}>
              {title}
            </h4>
            <span className="ml-2 px-2 py-1 bg-slate-500 rounded-xl text-xs text-slate-300 whitespace-nowrap">
              {duration}
            </span>
          </div>
          <p className={`text-xs leading-relaxed ${
            isActive ? 'text-slate-300' : 'text-slate-400'
          }`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
  return isLocked ? <Link to={ENDPOINTS.USER.OOPS} className='block'>{content}</Link> : content ;
}

export function Sidebar() {
  const lessons = [
    {
      title: 'Giới thiệu An ninh mạng',
      description: 'Tổng quan về an ninh mạng và các khái niệm cơ bản',
      duration: '45 phút',
      isCompleted: true,
      isLocked: false,
      isActive: true,
    },
    {
      title: 'Giao thức mạng & Dịch vụ',
      description: 'Tìm hiểu các giao thức TCP/IP, DNS, HTTP/HTTPS',
      duration: '60 phút',
      isCompleted: true,
      isLocked: false,
    },
    {
      title: 'Quét mạng & Trinh sát',
      description: 'Kỹ thuật quét mạng và thu thập thông tin',
      duration: '75 phút',
      isCompleted: false,
      isLocked: true,
    },
    {
      title: 'Tường lửa & Phòng thủ mạng',
      description: 'Cấu hình và quản lý tường lửa',
      duration: '55 phút',
      isCompleted: false,
      isLocked: true,
    },
    {
      title: 'Hệ thống phát hiện xâm nhập',
      description: 'IDS/IPS và giám sát an ninh mạng',
      duration: '50 phút',
      isCompleted: false,
      isLocked: true,
    },
    {
      title: 'Lỗ hổng bảo mật mạng',
      description: 'Phân tích và khai thác lỗ hổng mạng',
      duration: '70 phút',
      isCompleted: false,
      isLocked: true,
    },
    {
      title: 'Bảo mật mạng không dây',
      description: 'WiFi security, WPA/WPA2, và các cuộc tấn công',
      duration: '65 phút',
      isCompleted: false,
      isLocked: true,
    },
    {
      title: 'Giám sát & Phân tích mạng',
      description: 'Wireshark, tcpdump và phân tích lưu lượng',
      duration: '80 phút',
      isCompleted: false,
      isLocked: true,
    },
    {
      title: 'Ứng phó sự cố & Điều tra số',
      description: 'Quy trình ứng phó và phân tích forensics',
      duration: '85 phút',
      isCompleted: false,
      isLocked: true,
    },
    {
      title: 'Thực hành tốt nhất',
      description: 'Chiến lược bảo mật tổng thể và compliance',
      duration: '40 phút',
      isCompleted: false,
      isLocked: true,
    },
  ];

  const completedLessons = lessons.filter(m => m.isCompleted).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <aside className="w-80 bg-slate-700 border-r border-slate-600 shadow-sm">
      <div className="p-6 ">
        {/* Course Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">An ninh mạng cơ bản</h2>
          <p className="text-sm text-slate-300 mb-4">Khóa học toàn diện về an ninh mạng</p>
          
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-300">Tiến độ</span>
              <span className="text-sm text-slate-300">{completedLessons}/{totalLessons }</span>
            </div>
            <div className="w-full bg-slate-600 rounded-xl h-2">
              <div 
                    className="bg-purple-600 h-2 rounded-xl transition-all duration-300" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-2">
          {lessons.map((lesson, index) => (
            <LessonItem key={index} {...lesson} />
          ))}
        </div>

        {/* Test Button */}
        {/* <div className="mt-6 pt-6 border-t border-slate-600">
          <button className="w-full py-3 px-4 bg-gradient-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            Bài kiểm tra
          </button>
        </div> */}
      </div>
    </aside>
  );
}
