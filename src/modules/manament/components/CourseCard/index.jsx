// import {
//   Star,
//   Users,
//   TrendingUp,
//   MessageCircle,
//   Clock,
//   Edit,
//   Eye,
//   BarChart3,
//   Share2,
//   MoreHorizontal,
//   CheckCircle,
//   Calendar
// } from "lucide-react";

// // interface CourseCardProps {
// //   id: string;
// //   title: string;
// //   description: string;
// //   instructor: string;
// //   timeAgo: string;
// //   rating: number;
// //   level: "basic" | "intermediate" | "advanced";
// //   status: "published" | "draft" | "scheduled";
// //   image: string;
// //   students: number;
// //   completion: number;
// //   reviews: number;
// //   avgViewTime: string;
// //   tags: string[];
// // }

// export default function CourseCard({
//   title,
//   description,
//   instructor,
//   timeAgo,
//   rating,
//   level,
//   status,
//   image,
//   students,
//   completion,
//   reviews,
//   avgViewTime,
//   tags
// }) {
//   const getLevelConfig = (level) => {
//     switch (level) {
//       case "basic":
//         return {
//           label: "Cơ bản",
//           className: "border-green-400/30 bg-green-400/20 text-spring-green-58"
//         };
//       case "intermediate":
//         return {
//           label: "Trung cấp",
//           className: "border-yellow-400/30 bg-yellow-400/20 text-yellow-53"
//         };
//       case "advanced":
//         return {
//           label: "Nâng cao",
//           className: "border-red-400/30 bg-red-400/20 text-red-71"
//         };
//       default:
//         return {
//           label: "Cơ bản",
//           className: "border-green-400/30 bg-green-400/20 text-spring-green-58"
//         };
//     }
//   };

//   const getStatusConfig = (status) => {
//     switch (status) {
//       case "published":
//         return {
//           icon: <CheckCircle className="w-3 h-3" />,
//           label: "Đã xuất bản",
//           className: "border-green-400/30 bg-green-400/20 text-spring-green-58"
//         };
//       case "draft":
//         return {
//           icon: <Edit className="w-3 h-3" />,
//           label: "Bản nháp",
//           className: "border-yellow-400/30 bg-yellow-400/20 text-yellow-53"
//         };
//       case "scheduled":
//         return {
//           icon: <Calendar className="w-3 h-3" />,
//           label: "Đã lên lịch",
//           className: "border-blue-400/30 bg-blue-400/20 text-azure-68"
//         };
//       default:
//         return {
//           icon: <CheckCircle className="w-3 h-3" />,
//           label: "Đã xuất bản",
//           className: "border-green-400/30 bg-green-400/20 text-spring-green-58"
//         };
//     }
//   };

//   const levelConfig = getLevelConfig(level);
//   const statusConfig = getStatusConfig(status);

//   return (
//     <div className="bg-[#182234] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/60 transition-colors group">
//       {/* Course Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover"
//         />

//         {/* Level Badge */}
//         <div className={`absolute top-3 left-3 px-2 py-1 rounded-xl text-xs border ${levelConfig.className}`}>
//           {levelConfig.label}
//         </div>

//         {/* Status Badge */}
//         <div className={`absolute top-3 right-3 px-2 py-1 rounded-xl text-xs border flex items-center gap-1 ${statusConfig.className}`}>
//           {statusConfig.icon}
//           {statusConfig.label}
//         </div>

//         {/* More Options */}
//         <div className="absolute bottom-3 right-3">
//           <button className="p-2 rounded-xl bg-black/50 text-white hover:bg-black/70 transition-colors">
//             <MoreHorizontal className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {/* Course Content */}
//       <div className="p-6 space-y-4">
//         {/* Header Info */}
//         <div className="flex items-center justify-between text-sm text-azure-65">
//           <div className="flex items-center gap-2">
//             <span>{instructor}</span>
//             <span>•</span>
//             <span>{timeAgo}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Star className="w-4 h-4 fill-yellow-53 text-yellow-53" />
//             <span className="text-yellow-53">{rating}</span>
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-lg font-bold text-white leading-tight">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-azure-65 leading-relaxed">
//           {description}
//         </p>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 gap-3">
//           <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
//             <div className="flex items-center gap-2">
//               <Users className="w-4 h-4 text-azure-65" />
//               <span className="text-sm text-azure-65">Học viên</span>
//             </div>
//             <span className="text-sm font-bold text-white">{students.toLocaleString()}</span>
//           </div>

//           <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
//             <div className="flex items-center gap-2">
//               <TrendingUp className="w-4 h-4 text-azure-65" />
//               <span className="text-sm text-azure-65">Hoàn thành</span>
//             </div>
//             <span className="text-sm font-bold text-spring-green-58">{completion}%</span>
//           </div>

//           <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
//             <div className="flex items-center gap-2">
//               <MessageCircle className="w-4 h-4 text-azure-65" />
//               <span className="text-sm text-azure-65">Đánh giá</span>
//             </div>
//             <span className="text-sm font-bold text-violet-75">{reviews}</span>
//           </div>

//           <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
//             <div className="flex items-center gap-2">
//               <Clock className="w-4 h-4 text-azure-65" />
//               <span className="text-sm text-azure-65">Xem TB</span>
//             </div>
//             <span className="text-sm font-bold text-azure-68">{avgViewTime}</span>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-2 py-1 text-xs bg-[#202b3e] rounded-xl text-violet-85"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-2 pt-2">
//           <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
//             <Edit className="w-4 h-4 text-white" />
//           </button>
//           <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
//             <Eye className="w-4 h-4 text-white" />
//           </button>
//           <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
//             <BarChart3 className="w-4 h-4 text-white" />
//           </button>
//           <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
//             <Share2 className="w-4 h-4 text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import {
  Star,
  Users,
  TrendingUp,
  MessageCircle,
  Clock,
  Edit,
  Eye,
  BarChart3,
  Share2,
  MoreHorizontal,
  CheckCircle,
  Calendar,
} from "lucide-react";

export default function CourseCard({
  id,
  title,
  description,
  instructor,
  timeAgo,
  rating,
  level,
  status,
  image,
  students,
  completion,
  reviews,
  avgViewTime,
  tags,
  onClick,
}) {
  const getLevelConfig = (level) => {
    switch (level) {
      case "basic":
        return {
          label: "Cơ bản",
          className: "border-green-400/30 bg-green-400/20 text-spring-green-58",
        };
      case "intermediate":
        return {
          label: "Trung cấp",
          className: "border-yellow-400/30 bg-yellow-400/20 text-yellow-53",
        };
      case "advanced":
        return {
          label: "Nâng cao",
          className: "border-red-400/30 bg-red-400/20 text-red-71",
        };
      default:
        return {
          label: "Cơ bản",
          className: "border-green-400/30 bg-green-400/20 text-spring-green-58",
        };
    }
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case "published":
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          label: "Đã xuất bản",
          className: "border-green-400/30 bg-green-400/20 text-spring-green-58",
        };
      case "draft":
        return {
          icon: <Edit className="w-3 h-3" />,
          label: "Bản nháp",
          className: "border-yellow-400/30 bg-yellow-400/20 text-yellow-53",
        };
      case "scheduled":
        return {
          icon: <Calendar className="w-3 h-3" />,
          label: "Đã lên lịch",
          className: "border-blue-400/30 bg-blue-400/20 text-azure-68",
        };
      default:
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          label: "Đã xuất bản",
          className: "border-green-400/30 bg-green-400/20 text-spring-green-58",
        };
    }
  };

  const levelConfig = getLevelConfig(level);
  const statusConfig = getStatusConfig(status);

  return (
    <div
      className="bg-[#182234] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/60 transition-colors group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded-xl text-xs border ${levelConfig.className}`}
        >
          {levelConfig.label}
        </div>
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-xl text-xs border flex items-center gap-1 ${statusConfig.className}`}
        >
          {statusConfig.icon}
          {statusConfig.label}
        </div>
        <div className="absolute bottom-3 right-3">
          <button className="p-2 rounded-xl bg-black/50 text-white hover:bg-black/70 transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-azure-65">
          <div className="flex items-center gap-2">
            <span>{instructor}</span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-53 text-yellow-53" />
            <span className="text-yellow-53">{Number(rating).toFixed(1)}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
        <p className="text-sm text-azure-65 leading-relaxed">{description}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-azure-65" />
              <span className="text-sm text-azure-65">Học viên</span>
            </div>
            <span className="text-sm font-bold text-white">
              {students.toLocaleString()}
            </span>
          </div>
          <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-azure-65" />
              <span className="text-sm text-azure-65">Hoàn thành</span>
            </div>
            <span className="text-sm font-bold text-spring-green-58">
              {completion}%
            </span>
          </div>
          <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-azure-65" />
              <span className="text-sm text-azure-65">Đánh giá</span>
            </div>
            <span className="text-sm font-bold text-violet-75">{reviews}</span>
          </div>
          <div className="bg-[#202b3e] rounded-xl p-3 space-y-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-azure-65" />
              <span className="text-sm text-azure-65">Xem TB</span>
            </div>
            <span className="text-sm font-bold text-azure-68">
              {avgViewTime}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-[#202b3e] rounded-xl text-violet-85"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-2">
          <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
            <Edit className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
            <Eye className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
            <BarChart3 className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 bg-[#202b3e] rounded-xl hover:bg-slate-700/50 transition-colors">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
