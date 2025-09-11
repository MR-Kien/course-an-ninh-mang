import { Crown, ArrowRight, Lightbulb } from 'lucide-react';

export default function CallToAction() {
  return (
    <div>
        <div className="max-w-lg mx-auto px-4">
        {/* Action Buttons */}
        <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
            {/* Primary CTA Button */}
            <button className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#9333EA] to-[#DB2777] rounded-xl text-white font-bold text-base md:text-lg font-roboto hover:opacity-90 transition-opacity">
            <Crown className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.75} />
            <span className="text-center">Nâng cấp ngay - Chỉ từ 39K/tháng</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.75} />
            </button>

            {/* Secondary Button */}
            <button className="px-4 md:px-6 py-2.5 md:py-3 bg-[#334155] rounded-xl text-white font-semibold text-sm md:text-base font-roboto hover:bg-lozo-tertiary/80 transition-colors">
            Quay lại module miễn phí
            </button>
        </div>
        </div>

        {/* Tip Section */}
        <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#334155] backdrop-blur-sm rounded-xl p-4 md:p-6">
            <div className="flex items-start gap-3">
            <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-[#EAB308] flex-shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-[#9ca3af] font-roboto leading-4 md:leading-5">
                <span className="font-bold">Tip:</span>
                {" "}Bạn có thể tiếp tục học với module &quot;Giới thiệu về An ninh mạng&quot; miễn phí hoặc nâng cấp để truy cập toàn bộ nội dung chất lượng cao.
            </div>
            </div>
        </div>
        </div>
    </div>
    
  );
}
