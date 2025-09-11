import { Lock } from 'lucide-react';

export default function PaywallContent() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
      {/* Lock Icon */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-[100px] bg-gradient-to-br from-[#9333EA] to-[#DB2777] flex items-center justify-center mb-6 md:mb-8">
        <Lock className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-roboto mb-4">
        Oops!
      </h1>

      {/* Subheading */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-roboto mb-4 md:mb-6 leading-7 md:leading-9">
        <span className="text-[#e5e7eb]">Nội dung này yêu cầu </span>
        <span className="text-[#c084fc]">gói Trả phí</span>
      </h2>

      {/* Description */}
      <div className="max-w-4xl mx-auto pt-2">
        <p className="text-base md:text-lg lg:text-xl text-[#d1d5db] font-roboto leading-6 md:leading-7 lg:leading-8">
          Bạn đang cố gắng truy cập vào module &quot;{" "}
          <span className="font-bold text-[#c084fc]">Giao thức mạng & Dịch vụ</span>
          {" "}&quot; - một trong những khóa học chất lượng cao nhất của chúng tôi. Để tiếp tục học tập và mở khóa toàn bộ nội dung, bạn cần nâng cấp tài khoản.
        </p>
      </div>
    </div>
  );
}
