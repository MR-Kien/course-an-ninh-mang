// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function PaymentReturn() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const resultCode = params.get("resultCode");
//     const message = decodeURIComponent(params.get("message") || "");
//     const paymentId = params.get("paymentId");

//     if (resultCode === "0") {
//       // Thanh toán thành công
//       setTimeout(() => {
//         navigate("/user/courses"); // hoặc trang bạn muốn
//       }, 3000);
//     }
//   }, [location, navigate]);

//   const params = new URLSearchParams(location.search);
//   const resultCode = params.get("resultCode");
//   const message = decodeURIComponent(params.get("message") || "");

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {resultCode === "0" ? (
//         <>
//           <h1 className="text-2xl font-bold text-green-600 mb-2">
//             ✅ Thanh toán thành công!
//           </h1>
//           <p className="text-gray-600 mb-6">{message}</p>
//           <p className="text-gray-500 text-sm">
//             Hệ thống sẽ tự động chuyển hướng sau vài giây...
//           </p>
//         </>
//       ) : (
//         <>
//           <h1 className="text-2xl font-bold text-red-600 mb-2">
//             ❌ Thanh toán thất bại
//           </h1>
//           <p className="text-gray-600 mb-6">{message}</p>
//         </>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export default function PaymentReturn() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token"); // Giả sử token lưu trong localStorage

  // 2. Thêm state để quản lý trạng thái
  const [status, setStatus] = useState("processing"); // "processing", "success", "error"
  const [message, setMessage] = useState(
    "Đang xác thực giao dịch, vui lòng chờ..."
  );

  useEffect(() => {
    // 3. Lấy TẤT CẢ các tham số MoMo trả về
    const params = new URLSearchParams(location.search);
    const resultCode = params.get("resultCode");
    const orderId = params.get("orderId");
    const requestId = params.get("requestId");
    const momoMessage = decodeURIComponent(params.get("message") || "");

    const confirmTransaction = async () => {
      // 4. Kiểm tra resultCode ngay lập tức
      if (resultCode !== "0") {
        setStatus("error");
        setMessage(`Giao dịch thất bại: ${momoMessage}`);
        // Tự động chuyển về trang mua gói sau 5s
        setTimeout(() => navigate("/user/oops"), 5000); // 👈 Sửa thành trang mua gói của bạn
        return;
      }

      // 5. Kiểm tra có đủ key để gọi backend không
      if (!orderId || !requestId) {
        setStatus("error");
        setMessage("Lỗi: Không tìm thấy thông tin để xác thực giao dịch.");
        return;
      }

      // 6. Nếu resultCode = 0, gọi API backend để XÁC THỰC
      try {
        const response = await axios.post(
          "https://course-an-ninh-mang-backend.vercel.app/api/payment/confirm",
          {
            orderId,
            requestId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // 7. Backend xác nhận THÀNH CÔNG
        setStatus("success");
        setMessage(response.data.message || "Thanh toán thành công!");

        // (Quan trọng) Chỗ này bạn nên cập nhật lại thông tin user (ví dụ: role mới)
        // bằng cách gọi hàm refetch context/redux của bạn
        // ví dụ: auth.refetchUser();

        setTimeout(() => {
          navigate("/user/courses"); // Chuyển về trang khóa học
        }, 3000);
      } catch (error) {
        // 8. Backend báo LỖI (ví dụ: query MoMo lỗi, sai số tiền, v.v.)
        setStatus("error");
        const errorMsg =
          error.response?.data?.message || "Lỗi không xác định từ server";
        setMessage(`Lỗi xác thực thanh toán: ${errorMsg}`);
        setTimeout(() => navigate("/user/oops"), 5000); // Về trang mua
      }
    };

    confirmTransaction();

    // Chỉ chạy 1 lần khi component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Bỏ location, navigate để tránh gọi lại

  // 9. Render UI dựa trên state
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* TRẠNG THÁI ĐANG XỬ LÝ */}
      {status === "processing" && (
        <>
          {/*  */}
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            🔄 Đang xử lý...
          </h1>
          <p className="text-gray-600 mb-6">{message}</p>
        </>
      )}

      {/* TRẠNG THÁI THÀNH CÔNG (ĐÃ XÁC THỰC) */}
      {status === "success" && (
        <>
          <h1 className="text-2xl font-bold text-green-600 mb-2">
            ✅ Thanh toán thành công!
          </h1>
          <p className="text-gray-600 mb-6">{message}</p>
          <p className="text-gray-500 text-sm">
            Hệ thống sẽ tự động chuyển hướng sau vài giây...
          </p>
        </>
      )}

      {/* TRẠNG THÁI LỖI (TỪ MOMO HOẶC TỪ BACKEND) */}
      {status === "error" && (
        <>
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            ❌ Đã xảy ra lỗi
          </h1>
          <p className="text-gray-600 mb-6">{message}</p>
        </>
      )}
    </div>
  );
}
