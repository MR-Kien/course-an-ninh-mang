import {
  ChevronLeft,
  Check,
  Smartphone,
  Building2,
  Shield,
} from "lucide-react";
// import { Link } from "react-router-dom";
// import { ENDPOINTS } from "../../../../routes/endPoints";
import Header from "../../../components/Header/Header";
export default function Payment() {
  return (
    <div className="min-h-screen bg-lozo-gradient">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-8 py-6">
        <div className="flex items-center gap-2 text-sm">
          <ChevronLeft className="h-4 w-4 text-[#9ca3af]" />
          <a
            href="#"
            className="text-[#9ca3af] hover:text-white transition-colors"
          >
            Chọn gói học
          </a>
          <span className="text-[#9ca3af]">/</span>
          <span className="text-white">Thanh toán</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#1e1436] to-[#46166a] backdrop-blur-sm p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Thông tin khách hàng
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#d1d5db] mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full rounded-xl border border-[#4b2d68] bg-[#392154] px-4 py-3 text-white placeholder:text-lozo-gray-200 focus:outline-none focus:ring-2 focus:ring-lozo-purple-200"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#d1d5db] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-[#4b2d68] bg-[#392154] px-4 py-3 text-white placeholder:text-lozo-gray-200 focus:outline-none focus:ring-2 focus:ring-lozo-purple-200"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#d1d5db] mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    placeholder="0123456789"
                    className="w-full rounded-xl border border-[#4b2d68] bg-[#392154] px-4 py-3 text-white placeholder:text-lozo-gray-200 focus:outline-none focus:ring-2 focus:ring-lozo-purple-200"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#361656] to-[#44166d] backdrop-blur-sm p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Phương thức thanh toán
              </h2>

              <div className="space-y-4">
                {/* MoMo Option */}
                <div className="rounded-xl border-2 border-[#4b2d68] p-4 cursor-pointer hover:border-lozo-pink transition-colors">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-[#f472b6]" />
                    <div>
                      <h3 className="text-white font-medium">Ví MoMo</h3>
                      <p className="text-sm text-[#d1d5db]">
                        Thanh toán qua ví điện tử MoMo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bank Transfer Option */}
                <div className="rounded-xl border-2 border-[#4b2d68] p-4 cursor-pointer hover:border-lozo-blue transition-colors">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-[#60a5fa]" />
                    <div>
                      <h3 className="text-white font-medium">
                        Chuyển khoản ngân hàng
                      </h3>
                      <p className="text-sm text-[#d1d5db]">
                        Chuyển khoản qua mã QR
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#371658] to-[#43166f] backdrop-blur-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Thông tin đơn hàng
              </h2>

              {/* Package Info */}
              <div className="rounded-xl bg-[#4d226f] p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[20%] bg-lozo-shield">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Gói Nâng Cao</h3>
                    <p className="text-sm text-[#d1d5db]">
                      Khóa học an ninh mạng
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-[#d1d5db]">
                      Tất cả khóa học gói Cơ bản
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-[#d1d5db]">
                      Phòng lab thực hành cao cấp
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-[#d1d5db]">
                      Bài tập thực hành CTF
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-[#d1d5db]">
                      Dự án thực tế với doanh nghiệp
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t border-lozo-gray-400 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#d1d5db]">Giá gói</span>
                  <span className="text-white">89,000 VND</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#d1d5db]">Giảm giá</span>
                  <span className="text-green-400">-0 VND</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Tổng cộng</span>
                  <span className="text-white">89,000 VND</span>
                </div>
              </div>

              {/* Confirm Button */}
              {/* <Link to={ENDPOINTS.USER.DASHBOARD}> */}
              <button className="w-full mt-6 rounded-xl bg-lozo-button py-3 text-white font-medium hover:opacity-90 transition-opacity">
                Xác nhận thanh toán
              </button>
              {/* </Link> */}

              {/* Terms */}
              <div className="mt-4 text-center text-xs text-[#9ca3af]">
                <p>
                  Bằng cách thanh toán, bạn đồng ý với{" "}
                  <a href="#" className="text-purple-300 hover:underline">
                    Điều khoản dịch vụ
                  </a>{" "}
                  và{" "}
                  <a href="#" className="text-purple-300 hover:underline">
                    Chính sách bảo mật
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
