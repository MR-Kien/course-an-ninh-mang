// import { Button } from "../../components/ui/button";
import Button from "@mui/material/Button";
import { ArrowRight, Play, Shield, Code, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#281F28] to-[#4B1447]" />
      
      {/* Decorative dots */}
      {/* <div className="absolute top-20 left-10 w-2 h-2 bg-brand-primary rounded-full opacity-60" />
      <div className="absolute top-40 right-60 w-1 h-1 bg-brand-secondary rounded-full opacity-80" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-brand-primary rounded-full opacity-40" />
      <div className="absolute bottom-24 right-12 w-1 h-1 bg-brand-secondary rounded-full opacity-70" /> */}
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-brand-primary/10 to-transparent" 
             style={{
               backgroundImage: `linear-gradient(90deg, rgba(161, 14, 164, 0.1) 2%, transparent 2%), linear-gradient(180deg, rgba(161, 14, 164, 0.1) 2%, transparent 2%)`,
               backgroundSize: '50px 50px'
             }} />
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-[40px] border border-brand-primary bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 backdrop-blur-sm mt-3">
            <Shield className="h-4 w-4 text-brand-primary" />
            <span className="text-brand-primary font-medium">Nền tảng học tập an toàn</span>
          </div>
          
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Thành thạo </span>
              <span className="bg-gradient-to-r from-[#A10EA4] to-[#E310D5] bg-clip-text text-transparent">
                An ninh mạng
              </span>
              <br />
              <span className="text-white">Chuyên nghiệp</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Tham gia cùng hàng nghìn chuyên gia học tập ethical hacking, penetration testing và các nguyên tắc cơ bản về an ninh mạng thông qua các bài lab thực hành và thử thách thực tế.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={ENDPOINTS.USER.PAYMENT} className="flex items-center justify-center"> 
              <Button className="w-52 h-12 bg-gradient-to-r from-[#5C065E] to-brand-secondary hover:from-[#5C065E]/90 hover:to-brand-secondary/90 !text-white px-8 py-4 text-lg font-semibold shadow-xl shadow-black/20 group">
                Bắt đầu học ngay
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={ENDPOINTS.USER.DEMO} className="flex items-center justify-center">
              <Button className="!bg-[#3d343d] w-32 h-12 border-white/20  backdrop-blur-sm !text-white hover:!bg-white/20 px-8 py-4 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Học thử
              </Button>
            </Link> 
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Học tập an toàn",
                description: "Các tiêu chuẩn bảo mật cấp doanh nghiệp và giao thức được chứng nhận"
              },
              {
                icon: Code,
                title: "Giảng viên chuyên gia",
                description: "Học từ các chuyên gia an ninh mạng được chứng nhận và có kinh nghiệm thực tế"
              },
              {
                icon: Lock,
                title: "Lab thực tế",
                description: "Thực hành với các tình huống an ninh mạng thực tế trong môi trường an toàn"
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Tham gia cộng đồng học tập hàng đầu
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Học viên tích cực" },
                { number: "200+", label: "Khóa học chuyên sâu" },
                { number: "95%", label: "Tỷ lệ có việc làm" },
                { number: "24/7", label: "Hỗ trợ học tập" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">{stat.number}</div>
                  <div className="text-white/70 text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
