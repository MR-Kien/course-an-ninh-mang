// import { Button } from "../../components/ui/button";
import Button from "@mui/material/Button";
import { ArrowRight, Clock, Star, Shield, Bug, Globe, Eye, Smartphone } from "lucide-react";
import pic1 from "../../../../assets/images/pic1.jpg";
import pic2 from "../../../../assets/images/pic2.png";
import pic3 from "../../../../assets/images/pic3.png";
import pic4 from "../../../../assets/images/pic4.png";
import pic5 from "../../../../assets/images/pic5.png";
import pic6 from "../../../../assets/images/pic6.png";
// import { Star } from "lucide-react";
// interface CourseCardProps {
//   image: string;
//   level: string;
//   levelIcon: React.ElementType;
//   title: string;
//   description: string;
//   tags: string[];
//   duration: string;
//   rating: string;
// }

const CourseCard = ({ image, level, levelIcon: LevelIcon, title, description, tags, duration, rating }) => (
  <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm overflow-hidden hover:border-brand-primary/30 transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      {/* <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" /> */}
      <div className="absolute top-4 left-4 z-20">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-[20px] bg-gradient-to-r from-brand-primary to-brand-secondary">
          <LevelIcon className="h-4 w-4 text-white" />
          <span className="text-white text-sm font-medium">{level}</span>
        </div>
      </div>
    </div>
    
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 text-sm rounded-[10px] border border-brand-primary/30 bg-brand-primary/20 text-brand-primary">
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
          <span>{rating}</span>
        </div>
      </div>
      
      <Button className="w-full bg-gradient-to-r from-[#5C065E] to-brand-secondary hover:from-[#5C065E]/90 hover:to-brand-secondary/90 !text-white font-semibold group">
        Bắt đầu khóa học
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </div>
);

export default function Courses() {
  const courses = [
    {
      image: pic1,
      level: "Cơ bản",
      levelIcon: Shield,
      title: "An ninh mạng cơ bản",
      description: "Học các nguyên tắc cơ bản về an ninh mạng, bao gồm cảnh quan mối đe dọa, nguyên tắc bảo mật và chiến lược phòng thủ cơ bản.",
      tags: ["Nguyên tắc bảo mật", "Đánh giá rủi ro"],
      duration: "8 tuần",
      rating: "4.8"
    },
    {
      image: pic2,
      level: "Trung cấp",
      levelIcon: Bug,
      title: "Ethical Hacking cơ bản",
      description: "Thành thạo nghệ thuật ethical hacking với các kỹ thuật penetration testing thực hành và đánh giá lỗ hổng bảo mật.",
      tags: ["Penetration Testing", "Quét lỗ hổng"],
      duration: "12 tuần",
      rating: "4.9"
    },
    {
      image: pic3,
      level: "Nâng cao",
      levelIcon: Eye,
      title: "Dịch ngược Mã nguồn",
      description: "Rèn luyện kỹ năng với các thử thách Capture The Flag bao gồm mật mã học, reverse engineering và nhiều hơn nữa.",
      tags: ["Mật mã học", "Reverse Engineering"],
      duration: "Tự học",
      rating: "4.7"
    },
    {
      image: pic4,
      level: "Trung cấp",
      levelIcon: Globe,
      title: "Bảo mật ứng dụng Web",
      description: "Tìm hiểu sâu về bảo mật ứng dụng web, OWASP Top 10, và các kỹ thuật tấn công phòng thủ hiện đại.",
      tags: ["OWASP Top 10", "SQL Injection"],
      duration: "10 tuần",
      rating: "4.8"
    },
    {
      image: pic5,
      level: "Nâng cao",
      levelIcon: Eye,
      title: "Điều tra số (Digital Forensics)",
      description: "Học cách thu thập, phân tích và bảo toàn bằng chứng số trong các cuộc điều tra an ninh mạng.",
      tags: ["Thu thập bằng chứng", "Phân tích malware"],
      duration: "14 tuần",
      rating: "4.9"
    },
    {
      image: pic6,
      level: "Trung cấp",
      levelIcon: Smartphone,
      title: "Bảo mật di động",
      description: "Khám phá bảo mật cho các ứng dụng di động Android và iOS, bao gồm phân tích tĩnh và động.",
      tags: ["Bảo mật Android", "Bảo mật iOS"],
      duration: "8 tuần",
      rating: "4.6"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#281F28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <div id="courses" className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Thành thạo </span>
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              An ninh mạng
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Chọn lộ trình học tập của bạn và thăng tiến sự nghiệp an ninh mạng với các khóa học toàn diện và bài lab thực hành.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" className="border-white border-4 !bg-white/10 backdrop-blur-sm !text-white hover:!bg-white/20 px-8 py-6 text-lg font-semibold group">
            Xem tất cả khóa học
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
