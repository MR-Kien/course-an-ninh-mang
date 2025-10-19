// // import { Button } from "../../components/ui/button";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import { ENDPOINTS } from "../../../../routes/endPoints";
// import {
//   ArrowRight,
//   Clock,
//   Star,
//   Shield,
//   Bug,
//   Globe,
//   Eye,
//   Smartphone,
// } from "lucide-react";
// import pic1 from "../../../../assets/images/pic1.jpg";
// import pic2 from "../../../../assets/images/pic2.png";
// import pic3 from "../../../../assets/images/pic3.png";
// import pic4 from "../../../../assets/images/pic4.png";
// import pic5 from "../../../../assets/images/pic5.png";
// import pic6 from "../../../../assets/images/pic6.png";
// import pic7 from "../../../../assets/images/pic7.png";
// import pic8 from "../../../../assets/images/pic8.png";
// import pic9 from "../../../../assets/images/pic9.png";
// import pic10 from "../../../../assets/images/pic10.png";
// import pic11 from "../../../../assets/images/pic11.png";
// import pic12 from "../../../../assets/images/pic12.png";
// // import { Star } from "lucide-react";
// // interface CourseCardProps {
// //   image: string;
// //   level: string;
// //   levelIcon: React.ElementType;
// //   title: string;
// //   description: string;
// //   tags: string[];
// //   duration: string;
// //   rating: string;
// // }

// const CourseCard = ({
//   image,
//   level,
//   levelIcon: LevelIcon,
//   title,
//   description,
//   tags,
//   duration,
//   rating,
//   id,
// }) => (
//   <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm overflow-hidden hover:border-brand-primary/30 transition-all duration-300">
//     <div className="relative h-48 overflow-hidden">
//       <img src={image} alt={title} className="w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
//       {/* <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" /> */}
//       <div className="absolute top-4 left-4 z-20">
//         <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-[20px] bg-gradient-to-r from-brand-primary to-brand-secondary">
//           <LevelIcon className="h-4 w-4 text-white" />
//           <span className="text-white text-sm font-medium">{level}</span>
//         </div>
//       </div>
//     </div>

//     <div className="p-6 space-y-4">
//       <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
//         {title}
//       </h3>

//       <p className="text-white/70 leading-relaxed">{description}</p>

//       <div className="flex flex-wrap gap-2">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 text-sm rounded-[10px] border border-brand-primary/30 bg-brand-primary/20 text-brand-primary"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div className="flex items-center justify-between text-sm text-white/70">
//         <div className="flex items-center space-x-1">
//           <Clock className="h-4 w-4" />
//           <span>{duration}</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <Star className="h-4 w-4 text-yellow-400 fill-current" />
//           <span>{rating}</span>
//         </div>
//       </div>

//       <Link to={`/user/demo/${id}`}>
//         <Button className="w-full bg-gradient-to-r from-[#5C065E] to-brand-secondary hover:from-[#5C065E]/90 hover:to-brand-secondary/90 !text-white font-semibold group">
//           Bắt đầu khóa học
//           <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//         </Button>
//       </Link>
//     </div>
//   </div>
// );

// export default function Courses() {
//   const courses = [
//     {
//       id: 1,
//       image: pic1,
//       level: "Cơ bản",
//       levelIcon: Shield,
//       title: "An ninh mạng cơ bản",
//       description:
//         "Học các nguyên tắc cơ bản về an ninh mạng, bao gồm cảnh quan mối đe dọa, nguyên tắc bảo mật và chiến lược phòng thủ cơ bản.",
//       tags: ["Network Security", "Basic Concepts"],
//       duration: "8 tuần",
//       rating: "4.8",
//     },
//     {
//       id: 2,
//       image: pic2,
//       level: "Trung cấp",
//       levelIcon: Bug,
//       title: "Ethical Hacking cơ bản",
//       description:
//         "Thành thạo nghệ thuật ethical hacking với các kỹ thuật penetration testing thực hành và đánh giá lỗ hổng bảo mật.",
//       tags: ["Penetration Testing", "Ethical Hacking"],
//       duration: "12 tuần",
//       rating: "4.9",
//     },
//     {
//       id: 3,
//       image: pic3,
//       level: "Nâng cao",
//       levelIcon: Eye,
//       title: "Dịch ngược Mã nguồn",
//       description:
//         "Rèn luyện kỹ năng với các thử thách Capture The Flag bao gồm mật mã học, reverse engineering và nhiều hơn nữa.",
//       tags: ["Malware Analysis", "Reverse Engineering"],
//       duration: "Tự học",
//       rating: "4.7",
//     },
//     {
//       id: 4,
//       image: pic4,
//       level: "Trung cấp",
//       levelIcon: Globe,
//       title: "Bảo mật ứng dụng Web",
//       description:
//         "Tìm hiểu sâu về bảo mật ứng dụng web, OWASP Top 10, và các kỹ thuật tấn công phòng thủ hiện đại.",
//       tags: ["OWASP Top 10", "SQL Injection"],
//       duration: "10 tuần",
//       rating: "4.8",
//     },
//     {
//       id: 5,
//       image: pic5,
//       level: "Nâng cao",
//       levelIcon: Eye,
//       title: "Điều tra số (Digital Forensics)",
//       description:
//         "Học cách thu thập, phân tích và bảo toàn bằng chứng số trong các cuộc điều tra an ninh mạng.",
//       tags: ["Digital Investigation", "Evidence Collection"],
//       duration: "14 tuần",
//       rating: "4.9",
//     },
//     {
//       id: 6,
//       image: pic6,
//       level: "Trung cấp",
//       levelIcon: Smartphone,
//       title: "Bảo mật di động",
//       description:
//         "Khám phá bảo mật cho các ứng dụng di động Android và iOS, bao gồm phân tích tĩnh và động.",
//       tags: ["Mobile Android", "Mobile iOS"],
//       duration: "8 tuần",
//       rating: "4.6",
//     },
//     {
//       id: 7,
//       image: pic7,
//       level: "Nâng cao",
//       levelIcon: Smartphone,
//       title: "Network Security Advanced",
//       description:
//         "Khóa học nâng cao về bảo mật mạng, firewall configuration, IDS/IPS và network monitoring chuyên sâu.",
//       tags: ["Firewall", "IDS/IPS"],
//       duration: "16 tuần",
//       rating: "4.8",
//     },
//     {
//       id: 8,
//       image: pic8,
//       level: "Nâng cao",
//       levelIcon: Bug,
//       title: "Cryptography & Encryption",
//       description:
//         "Tìm hiểu sâu về mật mã học hiện đại, thuật toán mã hóa, key management và cryptographic protocols.",
//       tags: ["Encryption", "Key Management"],
//       duration: "12 tuần",
//       rating: "4.9",
//     },
//     {
//       id: 9,
//       image: pic9,
//       level: "Trung cấp",
//       levelIcon: Globe,
//       title: "Cloud Security Fundamentals",
//       description:
//         "Học bảo mật cloud computing trên AWS, Azure, GCP với IAM, network security và compliance.",
//       tags: ["AWS Security", "Cloud IAM"],
//       duration: "10 tuần",
//       rating: "4.7",
//     },
//     {
//       id: 10,
//       image: pic10,
//       level: "Trung cấp",
//       levelIcon: Globe,
//       title: "IoT Security Testing",
//       description:
//         "Bảo mật cho Internet of Things: firmware analysis, hardware hacking và IoT protocol security.",
//       tags: ["IoT Protocols", "Hardware Security"],
//       duration: "14 tuần",
//       rating: "4.6",
//     },
//     {
//       id: 11,
//       image: pic11,
//       level: "Trung cấp",
//       levelIcon: Globe,
//       title: "Social Engineering Defense",
//       description:
//         "Học cách nhận diện và phòng chống các cuộc tấn công social engineering, phishing và human factor attacks.",
//       tags: ["Phishing Defense", "Awareness Training"],
//       duration: "6 tuần",
//       rating: "4.5",
//     },
//     {
//       id: 12,
//       image: pic12,
//       level: "Trung cấp",
//       levelIcon: Globe,
//       title: "Incident Response & Recovery",
//       description:
//         "Xây dựng khả năng phản ứng sự cố, disaster recovery planning và business continuity management.",
//       tags: ["Incident Management", "Recovery Planning"],
//       duration: "12 tuần",
//       rating: "4.8",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-black to-[#281F28]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-24">
//         {/* Section Header */}
//         <div id="courses" className="text-center mb-16 space-y-6">
//           <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
//             <span className="text-white">Khóa học </span>
//             <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
//               An ninh mạng
//             </span>
//           </h2>
//           <p className="text-xl text-white/80 max-w-3xl mx-auto">
//             Khám phá 12 khóa học chuyên sâu về cybersecurity từ cơ bản đến nâng
//             cao, được thiết kế bởi các chuyên gia hàng đầu trong ngành
//           </p>
//         </div>

//         {/* Course Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {courses.map((course, index) => (
//             <CourseCard key={index} {...course} />
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: "50K+", label: "Học viên tích cực" },
//               { number: "200+", label: "Khóa học chuyên sâu" },
//               { number: "95%", label: "Tỷ lệ có việc làm" },
//               { number: "24/7", label: "Hỗ trợ học tập" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold text-brand-primary mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-white/70 text-base">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Star,
  Shield,
  Bug,
  Globe,
  Eye,
  Smartphone,
} from "lucide-react";

const ICONS = {
  Shield,
  Bug,
  Globe,
  Eye,
  Smartphone,
};

// const CourseCard = ({
//   image,
//   level,
//   levelIcon: LevelIcon,
//   title,
//   description,
//   tags,
//   duration,
//   rating,
//   id,
// }) => (
//   <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm overflow-hidden hover:border-brand-primary/30 transition-all duration-300">
//     <div className="relative h-48 overflow-hidden">
//       <img src={image} alt={title} className="w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
//       <div className="absolute top-4 left-4 z-20">
//         <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-[20px] bg-gradient-to-r from-brand-primary to-brand-secondary">
//           <LevelIcon className="h-4 w-4 text-white" />
//           <span className="text-white text-sm font-medium">{level}</span>
//         </div>
//       </div>
//     </div>

//     <div className="p-6 space-y-4">
//       <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
//         {title}
//       </h3>

//       <p className="text-white/70 leading-relaxed">{description}</p>

//       <div className="flex flex-wrap gap-2">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 text-sm rounded-[10px] border border-brand-primary/30 bg-brand-primary/20 text-brand-primary"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div className="flex items-center justify-between text-sm text-white/70">
//         <div className="flex items-center space-x-1">
//           <Clock className="h-4 w-4" />
//           <span>{duration}</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <Star className="h-4 w-4 text-yellow-400 fill-current" />
//           <span>{Number(rating).toFixed(1)}</span>
//         </div>
//       </div>

//       <Link to={`/user/demo/${id}`}>
//         <Button
//           fullWidth
//           className="!bg-gradient-to-r from-[#5C065E] to-brand-secondary hover:from-[#5C065E]/90 hover:to-brand-secondary/90 !text-white font-semibold group"
//         >
//           Bắt đầu khóa học
//           <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//         </Button>
//       </Link>
//     </div>
//   </div>
// );
const CourseCard = ({
  image,
  level,
  levelIcon: LevelIcon,
  title,
  description,
  tags,
  duration,
  rating,
  id,
}) => (
  <div className="group flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm overflow-hidden hover:border-brand-primary/30 transition-all duration-300">
    {/* Hình ảnh + cấp độ */}
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <div className="absolute top-4 left-4 z-20">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-[20px] bg-gradient-to-r from-brand-primary to-brand-secondary">
          <LevelIcon className="h-4 w-4 text-white" />
          <span className="text-white text-sm font-medium">{level}</span>
        </div>
      </div>
    </div>

    {/* Nội dung chính */}
    <div className="flex flex-col flex-1 justify-between p-6 space-y-4">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors mb-2">
          {title}
        </h3>

        <p className="text-white/70 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-[10px] border border-brand-primary/30 bg-brand-primary/20 text-brand-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-white/70">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{Number(rating).toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Nút cố định ở đáy */}
      <div className="mt-auto">
        <Link to={`/user/demo/${id}`}>
          <Button
            fullWidth
            className="!mt-6 !bg-gradient-to-r from-[#5C065E] to-brand-secondary hover:from-[#5C065E]/90 hover:to-brand-secondary/90 !text-white font-semibold group"
          >
            Bắt đầu khóa học
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          "https://course-an-ninh-mang-backend.vercel.app/api/courses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourses(res.data.courses);
        setStats(res.data.stats);
      } catch (err) {
        console.error("❌ Lỗi tải khóa học:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Đang tải danh sách khóa học...
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#281F28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div id="courses" className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Khóa học </span>
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              An ninh mạng
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Khám phá các khóa học chuyên sâu về cybersecurity từ cơ bản đến nâng
            cao, được thiết kế bởi các chuyên gia hàng đầu.
          </p>
        </div>

        {/* Grid Courses */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => {
            const Icon = ICONS[course.levelIcon] || Shield;
            return <CourseCard key={course.id} {...course} levelIcon={Icon} />;
          })}
        </div>

        {/* Stats */}
        {stats && (
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: stats.students, label: "Học viên tích cực" },
                { number: stats.courses, label: "Khóa học chuyên sâu" },
                { number: stats.jobRate, label: "Tỷ lệ có việc làm" },
                { number: stats.support, label: "Hỗ trợ học tập" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
