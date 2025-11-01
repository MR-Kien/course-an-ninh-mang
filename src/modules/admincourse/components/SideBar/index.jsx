// import { Lock, CheckCircle } from "lucide-react";

// function LessonItem({
//   title,
//   description,
//   duration,
//   isCompleted,
//   isLocked,
//   isActive,
//   onClick,
// }) {
//   const getStatusIcon = () => {
//     if (isLocked) {
//       return <Lock className="w-5 h-5 text-slate-400 opacity-60" />;
//     }
//     if (isCompleted) {
//       return <CheckCircle className="w-5 h-5 text-green-500" />;
//     }
//     return <CheckCircle className="w-5 h-5 text-slate-400 opacity-60" />;
//   };

//   return (
//     <div
//       onClick={!isLocked ? onClick : undefined}
//       className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
//         isActive
//           ? "border-purple-600 bg-gradient-to-r from-purple-700/30 to-purple-600/30"
//           : "border-slate-500 bg-slate-600/40"
//       } ${isLocked ? "opacity-60 cursor-not-allowed" : "hover:border-purple-400"}
//       `}
//     >
//       <div className="flex items-start space-x-3 mt-2">
//         <div className="mt-1">{getStatusIcon()}</div>
//         <div className="flex-1 min-w-0">
//           <div className="flex items-start justify-between mb-2">
//             <h4
//               className={`font-bold text-sm leading-5 ${
//                 isActive ? "text-white" : "text-slate-100"
//               }`}
//             >
//               {title}
//             </h4>
//             <span className="ml-2 px-2 py-1 bg-slate-500 rounded-xl text-xs text-slate-300 whitespace-nowrap">
//               {duration}
//             </span>
//           </div>
//           <p
//             className={`text-xs leading-relaxed ${
//               isActive ? "text-slate-300" : "text-slate-400"
//             }`}
//           >
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Sidebar({ courseData, onSelectLesson, activeLessonId }) {
//   const lessons = courseData?.lessons || [];

//   const completedLessons = courseData?.completed_count || 0;
//   const totalLessons = courseData?.total_count || 0;
//   const progressPercentage = parseFloat(courseData?.progress_percentage || 0);

//   return (
//     <aside className="w-80 bg-slate-700 border-r border-slate-600 shadow-sm">
//       <div className="p-6">
//         {/* Course Header */}
//         <div className="mb-6">
//           <h2 className="text-xl font-bold text-white mb-2">
//             {courseData?.course_title || "Khóa học"}
//           </h2>
//           <p className="text-sm text-slate-300 mb-4">
//             {courseData?.course_description || "Mô tả khóa học"}
//           </p>

//           {/* Progress */}
//           <div className="space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-slate-300">Tiến độ</span>
//               <span className="text-sm text-slate-300">
//                 {completedLessons}/{totalLessons}
//               </span>
//             </div>
//             <div className="w-full bg-slate-600 rounded-xl h-2">
//               <div
//                 className="bg-purple-600 h-2 rounded-xl transition-all duration-300"
//                 style={{ width: `${progressPercentage}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Lessons */}
//         <div className="space-y-2">
//           {lessons.map((lesson) => (
//             <LessonItem
//               key={lesson.id}
//               title={lesson.title}
//               description={lesson.description}
//               duration={lesson.duration}
//               isCompleted={lesson.isCompleted}
//               isLocked={lesson.isLocked}
//               isActive={lesson.id === activeLessonId}
//               onClick={() => onSelectLesson(lesson.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// }
import { CheckCircle } from "lucide-react";
import { ENDPOINTS } from "../../../../routes/endPoints";
import { useNavigate } from "react-router-dom";

function LessonItem({ title, description, isCompleted, isActive, onClick }) {
  const getStatusIcon = () => {
    if (isCompleted) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    return <CheckCircle className="w-5 h-5 text-slate-400 opacity-60" />;
  };

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
        isActive
          ? "border-purple-600 bg-gradient-to-r from-purple-700/30 to-purple-600/30"
          : "border-slate-500 bg-slate-600/40 hover:border-purple-400"
      }`}
    >
      <div className="flex items-start space-x-3 mt-2">
        <div className="mt-1">{getStatusIcon()}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h4
              className={`font-bold text-sm leading-5 ${
                isActive ? "text-white" : "text-slate-100"
              }`}
            >
              {title}
            </h4>
          </div>
          <p
            className={`text-xs leading-relaxed ${
              isActive ? "text-slate-300" : "text-slate-400"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ courseData, onSelectLesson, activeLessonId }) {
  const navigate = useNavigate();

  const lessons = courseData?.lessons || [];
  const completedLessons = courseData?.completed_count || 0;
  const totalLessons = courseData?.total_count || 0;
  const progressPercentage = parseFloat(courseData?.progress_percentage || 0);

  return (
    <aside className="w-80 bg-slate-700 border-r border-slate-600 shadow-sm">
      <div className="p-6">
        {/* Course Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">
            {courseData?.course_title || "Khóa học"}
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            {courseData?.course_description || "Mô tả khóa học"}
          </p>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-300">Tiến độ</span>
              <span className="text-sm text-slate-300">
                {completedLessons}/{totalLessons}
              </span>
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
          {lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              title={lesson.title}
              description={lesson.description}
              isCompleted={lesson.isCompleted}
              isActive={lesson.id === activeLessonId}
              onClick={() => onSelectLesson(lesson.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
