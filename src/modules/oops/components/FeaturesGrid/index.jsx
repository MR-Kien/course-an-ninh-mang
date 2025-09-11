import { Star, Shield } from 'lucide-react';

const features = [
  {
    title: "Truy cập các khóa học đầy đủ hơn",
    description: "Học các khóa học chuyên sâu"
  },
  {
    title: "Lab thực hành",
    description: "Truy cập phòng lab với các bài tập thực tế"
  },
  {
    title: "Chứng chỉ quốc tế",
    description: "Nhận chứng chỉ được công nhận toàn cầu"
  },
  {
    title: "Hỗ trợ 24/7",
    description: "Được hỗ trợ bởi đội ngũ phát triển"
  }
];

export default function FeaturesGrid() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Features Container */}
      <div className="bg-[#1b2538] backdrop-blur-sm rounded-xl p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <Star className="w-5 h-5 md:w-6 md:h-6 text-[#facc15] mr-2 fill-current" />
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white font-roboto text-center">
            Với gói Trả phí, bạn sẽ có:
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-2xl bg-[#9333ea] flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-sm md:text-base font-bold font-roboto leading-5 md:leading-6">
                  {feature.title}
                </h4>
                <p className="text-[#9ca3af] text-xs md:text-sm font-roboto leading-4 md:leading-5">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
