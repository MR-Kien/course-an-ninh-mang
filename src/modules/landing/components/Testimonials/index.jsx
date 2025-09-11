import { Quote } from "lucide-react";
import bao from "../../../../assets/images/Bao1.png";
import loc from "../../../../assets/images/Nhoc1.png";
import quan from "../../../../assets/images/Quan1.png";
export default function Testimonials() {
  return (
    <section className="py-2 bg-gradient-to-b from-[#281F28] to-[#4B1447] relative overflow-hidden">

      {/* Background blur effects */}
      <div className="absolute left-20 top-80 w-64 h-64 bg-brand-primary/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute right-20 top-80 w-64 h-64 bg-brand-secondary/20 rounded-full filter blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Lời cam kết từ </span>
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              LozoAcademy
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            LozoAcademy - &quot;Mỗi hành trình thành công đều bắt đầu từ một cam kết vững chắc.&quot;
          </p>
        </div>

        {/* Main CEO Testimonial */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-black/25 relative">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-brand-primary" strokeWidth={2} />
            </div>
            
            {/* Quote Text */}
            <blockquote className="text-2xl text-white/90 italic text-center leading-relaxed mb-8">
              &quot;Chúng tôi xây dựng chương trình dựa trên kinh nghiệm thực tiễn trong ngành bảo mật. Học viên sẽ được tiếp cận với các bài lab thực chiến, mô phỏng tình huống thực tế để sẵn sàng cho công việc thực tế.&quot;
            </blockquote>
            
            {/* CEO Profile */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-[40px] border-2 border-brand-primary overflow-hidden">
                <img src={quan} alt="Trần Quảng Quân" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white">Trần Quảng Quân - CEO</h4>
                <p className="text-white/70">Nhà sáng lập LozoAcademy</p>
                <p className="text-brand-primary text-sm">Từng là Penetration Tester tại FPT Software</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 pb-20">
          {/* CDO Testimonial */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-2xl border-2 border-brand-primary overflow-hidden">
                <img src={loc} alt="Nguyễn Thành Lộc" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="font-semibold text-white">Nguyễn Thành Lộc - CDO</h5>
                <p className="text-white/70 text-sm">Giám đốc Thiết kế LozoAcademy</p>
              </div>
            </div>
            <p className="text-white/80 text-sm italic leading-relaxed">
              &quot;Chúng tôi thiết kế trải nghiệm học tập tại LozoAcademy không chỉ đẹp mắt mà còn dễ sử dụng, thân thiện với người mới bắt đầu. Giao diện học tập hiện đại sẽ giúp học viên tập trung hoàn toàn vào việc phát triển kỹ năng.&quot;
            </p>
          </div>

          {/* CTO Testimonial */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-2xl border-2 border-brand-primary overflow-hidden">
                <img src={bao} alt="Trần Quốc Bảo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="font-semibold text-white">Trần Quốc Bảo - CTO</h5>
                <p className="text-white/70 text-sm">Giám đốc Công nghệ LozoAcademy</p>
              </div>
            </div>
            <p className="text-white/80 text-sm italic leading-relaxed">
              &quot;Nền tảng kỹ thuật của LozoAcademy được phát triển với trọng tâm là bảo mật, hiệu suất và tính thực chiến. Học viên sẽ được học trên hệ thống mô phỏng các tình huống tấn công một các thực tế nhất.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
