// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "../../../components/Header/Header";
// import { ENDPOINTS } from "../../../routes/endPoints";
// import {
//   ChevronLeft,
//   Check,
//   Smartphone,
//   Building2,
//   Shield,
//   CreditCard,
// } from "lucide-react";

// export default function Payment() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [paymentMethod, setPaymentMethod] = useState("momo");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     if (!location.state) {
//       navigate(ENDPOINTS.USER.COURSE);
//     }
//   }, [location.state, navigate]);

//   const packageData = location.state || {};
//   const {
//     title = "Gói học chưa xác định",
//     price = "0",
//     period = "",
//     features = [],
//   } = packageData;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePayment = () => {
//     // Kiểm tra dữ liệu
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Vui lòng điền đầy đủ thông tin trước khi thanh toán!");
//       return;
//     }

//     // Điều hướng sang trang "Oops" hoặc xử lý thanh toán thật
//     navigate(ENDPOINTS.USER.OOPS, {
//       state: { ...formData, paymentMethod, packageData },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-lozo-gradient">
//       <Header />

//       {/* Breadcrumb */}
//       <div className="mx-auto max-w-7xl px-8 py-6">
//         <div className="flex items-center gap-2 text-sm">
//           <ChevronLeft className="h-4 w-4 text-[#9ca3af]" />
//           <a
//             href="/user/course"
//             className="text-[#9ca3af] hover:text-white transition-colors"
//           >
//             Chọn gói học
//           </a>
//           <span className="text-[#9ca3af]">/</span>
//           <span className="text-white">Thanh toán</span>
//         </div>
//       </div>

//       {/* Main */}
//       <div className="mx-auto max-w-7xl px-8 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* LEFT COLUMN */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Thông tin khách hàng */}
//             <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#371658] to-[#43166f] p-6">
//               <h2 className="text-xl font-bold text-white mb-4">
//                 Thông tin khách hàng
//               </h2>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-[#d1d5db] mb-1">
//                     Họ và tên
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full rounded-lg bg-[#4b2d68] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lozo-button"
//                     placeholder="Nhập họ và tên"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm text-[#d1d5db] mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full rounded-lg bg-[#4b2d68] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lozo-button"
//                     placeholder="Nhập địa chỉ email"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm text-[#d1d5db] mb-1">
//                     Số điện thoại
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full rounded-lg bg-[#4b2d68] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lozo-button"
//                     placeholder="Nhập số điện thoại"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Phương thức thanh toán */}
//             <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#371658] to-[#43166f] p-6">
//               <h2 className="text-xl font-bold text-white mb-4">
//                 Chọn phương thức thanh toán
//               </h2>

//               <div className="space-y-3">
//                 <button
//                   onClick={() => setPaymentMethod("momo")}
//                   className={`flex items-center w-full gap-3 rounded-lg px-4 py-3 transition-all ${
//                     paymentMethod === "momo"
//                       ? "bg-lozo-button text-white"
//                       : "bg-[#4b2d68] text-[#d1d5db]"
//                   }`}
//                 >
//                   <Smartphone className="h-5 w-5" />
//                   <span>Thanh toán qua MoMo</span>
//                 </button>

//                 <button
//                   onClick={() => setPaymentMethod("bank")}
//                   className={`flex items-center w-full gap-3 rounded-lg px-4 py-3 transition-all ${
//                     paymentMethod === "bank"
//                       ? "bg-lozo-button text-white"
//                       : "bg-[#4b2d68] text-[#d1d5db]"
//                   }`}
//                 >
//                   <Building2 className="h-5 w-5" />
//                   <span>Chuyển khoản ngân hàng</span>
//                 </button>

//                 <button
//                   onClick={() => setPaymentMethod("credit")}
//                   className={`flex items-center w-full gap-3 rounded-lg px-4 py-3 transition-all ${
//                     paymentMethod === "credit"
//                       ? "bg-lozo-button text-white"
//                       : "bg-[#4b2d68] text-[#d1d5db]"
//                   }`}
//                 >
//                   <CreditCard className="h-5 w-5" />
//                   <span>Thẻ tín dụng / Ghi nợ</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN - ORDER SUMMARY */}
//           <div className="lg:col-span-1">
//             <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#371658] to-[#43166f] p-6 sticky top-6">
//               <h2 className="text-xl font-bold text-white mb-4">
//                 Thông tin đơn hàng
//               </h2>

//               <div className="rounded-xl bg-[#4d226f] p-4 mb-6">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-[20%] bg-lozo-shield">
//                     <Shield className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-white font-medium">{title}</h3>
//                     <p className="text-sm text-[#d1d5db]">{period}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   {features.map((feature, index) => (
//                     <div key={index} className="flex items-center gap-2">
//                       <Check className="h-4 w-4 text-green-400" />
//                       <span className="text-sm text-[#d1d5db]">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Pricing */}
//               <div className="border-t border-lozo-gray-400 pt-4 space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-[#d1d5db]">Giá gói</span>
//                   <span className="text-white">{price} VND</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#d1d5db]">Giảm giá</span>
//                   <span className="text-green-400">-0 VND</span>
//                 </div>
//                 <div className="flex justify-between text-lg font-bold">
//                   <span className="text-white">Tổng cộng</span>
//                   <span className="text-white">{price} VND</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handlePayment}
//                 className="w-full mt-6 rounded-xl bg-lozo-button py-3 text-white font-medium hover:opacity-90 transition-opacity"
//               >
//                 Xác nhận thanh toán
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header/Header";
import { ENDPOINTS } from "../../../routes/endPoints";
import {
  ChevronLeft,
  Check,
  Smartphone,
  Building2,
  Shield,
} from "lucide-react";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("momo");
  const [formData, setFormData] = useState({
    ho_ten: "",
    email: "",
    so_dien_thoai: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!location.state) {
      navigate(ENDPOINTS.USER.COURSE);
    }
  }, [location.state, navigate]);

  const packageData = location.state || {};
  console.log("packageData", packageData);
  const {
    title = "Gói học chưa xác định",
    price = 0,
    period = "",
    features = [],
  } = packageData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handlePayment = async () => {
    // Kiểm tra dữ liệu
    if (!formData.ho_ten || !formData.email || !formData.so_dien_thoai) {
      setError("Vui lòng điền đầy đủ thông tin trước khi thanh toán!");
      return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Email không hợp lệ!");
      return;
    }

    // Kiểm tra định dạng số điện thoại
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(formData.so_dien_thoai)) {
      setError("Số điện thoại không hợp lệ (10-11 số)!");
      return;
    }

    // Chuẩn bị dữ liệu gửi đến backend
    const paymentData = {
      ho_ten: formData.ho_ten,
      email: formData.email,
      so_dien_thoai: formData.so_dien_thoai,
      phuong_thuc_thanh_toan: paymentMethod,
      ten_goi: title,
      so_tien: parseFloat(price),
    };

    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Vui lòng đăng nhập để thực hiện thanh toán");
        navigate(ENDPOINTS.USER.LOGIN);
        return;
      }

      const response = await axios.post(
        "https://course-an-ninh-mang-backend.vercel.app/api/payment",
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Thanh toán thành công
      alert(`Thanh toán thành công! Vai trò mới: ${response.data.new_role}`);
      navigate(ENDPOINTS.USER.COURSES);
    } catch (err) {
      setError(err.response?.data?.message || "Lỗi khi xử lý thanh toán");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-lozo-gradient">
      <Header />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-8 py-6">
        <div className="flex items-center gap-2 text-sm">
          <ChevronLeft className="h-4 w-4 text-[#9ca3af]" />
          <a
            href={ENDPOINTS.USER.COURSE}
            className="text-[#9ca3af] hover:text-white transition-colors"
          >
            Chọn gói học
          </a>
          <span className="text-[#9ca3af]">/</span>
          <span className="text-white">Thanh toán</span>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-8 pb-20">
        {error && (
          <div className="mb-6 rounded-lg bg-red-500/20 p-4 text-red-400">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            {/* Thông tin khách hàng */}
            <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#371658] to-[#43166f] p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Thông tin khách hàng
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#d1d5db] mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    name="ho_ten"
                    value={formData.ho_ten}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-[#4b2d68] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lozo-button"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#d1d5db] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-[#4b2d68] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lozo-button"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#d1d5db] mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="so_dien_thoai"
                    value={formData.so_dien_thoai}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-[#4b2d68] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lozo-button"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>
            </div>

            {/* Phương thức thanh toán */}
            <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#371658] to-[#43166f] p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Chọn phương thức thanh toán
              </h2>

              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod("momo")}
                  className={`flex items-center w-full gap-3 rounded-lg px-4 py-3 transition-all ${
                    paymentMethod === "momo"
                      ? "bg-lozo-button text-white"
                      : "bg-[#4b2d68] text-[#d1d5db]"
                  }`}
                >
                  <Smartphone className="h-5 w-5" />
                  <span>Thanh toán qua MoMo</span>
                </button>

                <button
                  onClick={() => setPaymentMethod("bank_transfer")}
                  className={`flex items-center w-full gap-3 rounded-lg px-4 py-3 transition-all ${
                    paymentMethod === "bank_transfer"
                      ? "bg-lozo-button text-white"
                      : "bg-[#4b2d68] text-[#d1d5db]"
                  }`}
                >
                  <Building2 className="h-5 w-5" />
                  <span>Chuyển khoản ngân hàng</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-[#4b2d68] bg-gradient-to-r from-[#371658] to-[#43166f] p-6 sticky top-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Thông tin đơn hàng
              </h2>

              <div className="rounded-xl bg-[#4d226f] p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[20%] bg-lozo-shield">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{title}</h3>
                    <p className="text-sm text-[#d1d5db]">{period}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-[#d1d5db]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t border-lozo-gray-400 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#d1d5db]">Giá gói</span>
                  <span className="text-white">
                    {price.toLocaleString()} VND
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#d1d5db]">Giảm giá</span>
                  <span className="text-green-400">-0 VND</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Tổng cộng</span>
                  <span className="text-white">
                    {price.toLocaleString()} VND
                  </span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={loading}
                className={`w-full mt-6 rounded-xl py-3 text-white font-medium transition-opacity ${
                  loading
                    ? "bg-lozo-button/50 cursor-not-allowed"
                    : "bg-lozo-button hover:opacity-90"
                }`}
              >
                {loading ? "Đang xử lý..." : "Xác nhận thanh toán"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
