// import {
//   Shield,
//   Send,
//   AlertTriangle,
//   Database,
//   Wifi,
//   Eye,
//   Lock,
// } from "lucide-react";
// import { useState } from "react";

// const TopicCard = ({ icon, title, gradient, iconBg }) => (
//   <div
//     className={`flex items-center gap-3 w-full p-2.5 rounded-md border border-magenta-secondary/20 bg-gradient-to-r ${gradient} cursor-pointer hover:bg-opacity-80 transition-all`}
//   >
//     <div
//       className={`flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r ${iconBg} shadow-md`}
//     >
//       {icon}
//     </div>
//     <span className="text-azure-84 text-sm">{title}</span>
//   </div>
// );

// const SecurityStats = () => (
//   <div className="p-3 rounded-md border border-magenta-secondary/20 bg-black/40 shadow-sm">
//     <h3 className="text-magenta-secondary text-sm font-bold mb-2">
//       Thống kê bảo mật
//     </h3>
//     <div className="space-y-1.5 text-xs text-azure-65">
//       <div className="flex justify-between">
//         <span>Cuộc tấn công/ngày</span>
//         <span className="text-red-600">2.3M+</span>
//       </div>
//       <div className="flex justify-between">
//         <span>Dữ liệu bị rò rỉ</span>
//         <span className="text-orange-600">15.1B</span>
//       </div>
//       <div className="flex justify-between">
//         <span>Chi phí trung bình</span>
//         <span className="text-orange-500">$4.45M</span>
//       </div>
//       <div className="flex justify-between">
//         <span>Mức độ nguy hiểm</span>
//         <span className="text-magenta-secondary">Cao</span>
//       </div>
//     </div>
//   </div>
// );

// const AlertBanner = () => (
//   <div className="p-2.5 rounded-md border border-red-600/30 bg-gradient-to-r from-red-600/20 to-magenta-20/20 text-xs text-red-600">
//     <div className="flex items-center gap-2">
//       <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
//       <span>Mức cảnh báo: Nghiêm trọng</span>
//     </div>
//   </div>
// );

// const Sidebar = () => (
//   <div className="w-72 h-screen border-r border-magenta-secondary/20 bg-black/50 backdrop-blur-sm p-5 flex flex-col">
//     {/* Logo */}
//     <div className="flex items-center gap-3 mb-10">
//       <a
//         href="/"
//         className="flex items-center gap-3 hover:opacity-80 transition-opacity"
//       >
//         <Shield className="w-7 h-7 text-magenta-primary" />
//         <span className="text-white text-lg font-bold font-roboto">
//           Lozo Academy
//         </span>
//       </a>
//     </div>

//     {/* Popular Topics */}
//     <div className="mb-8">
//       <h2 className="text-white text-base font-bold mb-5 font-roboto">
//         Chủ đề phổ biến
//       </h2>
//       <div className="space-y-2.5">
//         <TopicCard
//           icon={<Shield className="w-4 h-4 text-white" />}
//           title="Ethical Hacking"
//           gradient="from-magenta-20/30 to-black/30"
//           iconBg="from-red-600 to-orange-600"
//         />
//         <TopicCard
//           icon={<Lock className="w-4 h-4 text-white" />}
//           title="Network Security"
//           gradient="from-magenta-20/30 to-black/30"
//           iconBg="from-blue-600 to-indigo-600"
//         />
//         <TopicCard
//           icon={<Eye className="w-4 h-4 text-white" />}
//           title="Digital Forensics"
//           gradient="from-magenta-20/30 to-black/30"
//           iconBg="from-cyan-600 to-teal-600"
//         />
//         <TopicCard
//           icon={<AlertTriangle className="w-4 h-4 text-white" />}
//           title="Malware Analysis"
//           gradient="from-magenta-20/30 to-black/30"
//           iconBg="from-orange-600 to-yellow-600"
//         />
//         <TopicCard
//           icon={<Database className="w-4 h-4 text-white" />}
//           title="Data Protection"
//           gradient="from-magenta-20/30 to-black/30"
//           iconBg="from-green-600 to-emerald-600"
//         />
//         <TopicCard
//           icon={<Wifi className="w-4 h-4 text-white" />}
//           title="Wireless Security"
//           gradient="from-magenta-20/30 to-black/30"
//           iconBg="from-purple-600 to-violet-600"
//         />
//       </div>
//     </div>

//     {/* Security Stats */}
//     <div className="mb-3">
//       <SecurityStats />
//     </div>

//     {/* Alert Banner */}
//     <AlertBanner />
//   </div>
// );

// const ChatHeader = () => (
//   <div className="border-b border-magenta-secondary/20 bg-black/70 backdrop-blur-sm p-4">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <a href="/" className="hover:opacity-80 transition-opacity">
//           <Shield className="w-7 h-7 text-magenta-primary" />
//         </a>
//         <div>
//           <h2 className="text-white text-base font-bold font-roboto">
//             Trợ lý AI Bảo mật
//           </h2>
//           <p className="text-magenta-secondary text-xs">
//             Chuyên gia Cyber Security
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="w-2.5 h-2.5 rounded-full bg-green-600 shadow-md shadow-green-600/40"></div>
//         <span className="text-azure-65 text-xs">Đang hoạt động</span>
//       </div>
//     </div>
//   </div>
// );

// const ChatMessage = () => (
//   <div className="flex items-start max-w-2xl">
//     <div className="bg-gradient-to-r from-gray-900/90 to-black/95 border border-magenta-secondary/15 rounded-xl p-4 shadow-md">
//       <div className="space-y-5 text-white text-sm">
//         <p>Chào mừng bạn đến với trợ lý AI về An ninh mạng!</p>

//         <p>
//           Bạn có biết rằng hiện nay vấn đề bảo mật đang là mối quan tâm hàng đầu
//           của các tổ chức trên toàn thế giới? Với sự gia tăng của các cuộc tấn
//           công mạng, việc hiểu rõ về bảo mật thông tin đã trở thành kỹ năng
//           thiết yếu.
//         </p>

//         <div>
//           <p className="mb-2">Tôi có thể giúp bạn tìm hiểu về:</p>
//           <ul className="space-y-1 ml-0">
//             <li>• Ethical Hacking và Penetration Testing</li>
//             <li>• Network Security và Firewall</li>
//             <li>• Digital Forensics</li>
//             <li>• Mobile Security</li>
//             <li>• Web Application Security</li>
//           </ul>
//         </div>

//         <p>Bạn muốn tìm hiểu về chủ đề nào?</p>
//       </div>

//       <div className="mt-3 opacity-70">
//         <span className="text-gray-400 text-xs">7:00:03 PM</span>
//       </div>
//     </div>
//   </div>
// );

// const ChatInput = () => {
//   const [message, setMessage] = useState("");

//   return (
//     <div className="border-t border-magenta-secondary/20 bg-black/70 backdrop-blur-sm p-4">
//       <div className="flex items-center gap-3">
//         <div className="flex-1">
//           <div className="relative">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Hỏi về bảo mật, ethical hacking, penetration testing..."
//               className="w-full p-3 rounded-lg border border-magenta-secondary/20 bg-gray-900/80 text-white placeholder-azure-65 focus:outline-none focus:border-magenta-primary shadow-inner text-sm"
//             />
//           </div>
//         </div>
//         <button
//           className={`p-3 rounded-lg transition-all ${
//             message.trim()
//               ? "bg-gradient-to-r from-magenta-secondary to-magenta-20 shadow-md shadow-magenta-secondary/30"
//               : "bg-gradient-to-r from-magenta-secondary to-magenta-20 opacity-50"
//           }`}
//           disabled={!message.trim()}
//         >
//           <Send className="w-4 h-4 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const ChatArea = () => (
//   <div className="flex-1 flex flex-col h-screen">
//     <ChatHeader />

//     <div className="flex-1 bg-gradient-to-b from-gray-900/50 to-black/80 p-6 overflow-y-auto">
//       <div className="flex items-start">
//         <ChatMessage />
//       </div>
//     </div>

//     <ChatInput />
//   </div>
// );

// export default function ChatBot() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#E310D5] to-black text-white font-roboto flex">
//       <Sidebar />
//       <ChatArea />
//     </div>
//   );
// }
import {
  Shield,
  Send,
  AlertTriangle,
  Database,
  Wifi,
  Eye,
  Lock,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";

const TopicCard = ({ icon, title, gradient, iconBg }) => (
  <div
    className={`flex items-center gap-3 w-full p-3 rounded-lg border border-cyan-400/20 bg-gradient-to-r ${gradient} cursor-pointer hover:scale-[1.02] hover:shadow-lg transition-all`}
  >
    <div
      className={`flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-r ${iconBg} shadow-md`}
    >
      {icon}
    </div>
    <span className="text-gray-200 text-sm font-medium">{title}</span>
  </div>
);

const SecurityStats = () => (
  <div className="p-4 rounded-xl border border-cyan-400/20 bg-gray-900/50 shadow-md">
    <h3 className="text-cyan-400 text-sm font-bold mb-3">Thống kê bảo mật</h3>
    <div className="space-y-2 text-xs text-gray-300">
      <div className="flex justify-between">
        <span>Cuộc tấn công/ngày</span>
        <span className="text-rose-400 font-semibold">2.3M+</span>
      </div>
      <div className="flex justify-between">
        <span>Dữ liệu bị rò rỉ</span>
        <span className="text-orange-400 font-semibold">15.1B</span>
      </div>
      <div className="flex justify-between">
        <span>Chi phí trung bình</span>
        <span className="text-yellow-400 font-semibold">$4.45M</span>
      </div>
      <div className="flex justify-between">
        <span>Mức độ nguy hiểm</span>
        <span className="text-cyan-400 font-semibold">Cao</span>
      </div>
    </div>
  </div>
);

// const AlertBanner = () => (
//   <div className="p-3 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-600/20 to-amber-500/20 text-xs text-rose-400 shadow-md">
//     <div className="flex items-center gap-2">
//       <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
//       <span className="font-medium">Mức cảnh báo: Nghiêm trọng</span>
//     </div>
//   </div>
// );

const Sidebar = () => (
  <div className="w-72 h-screen border-r border-cyan-400/20 bg-gradient-to-b from-gray-950 via-gray-900 to-black p-5 flex flex-col">
    {/* Logo */}
    <div className="flex items-center gap-3 mb-10">
      <Link
        to={ENDPOINTS.USER.DASHBOARD}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <Shield className="w-7 h-7 text-cyan-400" />
        <span className="text-white text-lg font-bold font-roboto">
          Lozo Academy
        </span>
      </Link>
    </div>

    {/* Popular Topics */}
    <div className="mb-8">
      <h2 className="text-white text-base font-bold mb-5 font-roboto">
        Chủ đề phổ biến
      </h2>
      <div className="space-y-3">
        <TopicCard
          icon={<Shield className="w-4 h-4 text-white" />}
          title="Ethical Hacking"
          gradient="from-purple-900/40 to-blue-900/30"
          iconBg="from-fuchsia-500 to-purple-600"
        />
        <TopicCard
          icon={<Lock className="w-4 h-4 text-white" />}
          title="Network Security"
          gradient="from-purple-900/40 to-blue-900/30"
          iconBg="from-blue-500 to-cyan-500"
        />
        <TopicCard
          icon={<Eye className="w-4 h-4 text-white" />}
          title="Digital Forensics"
          gradient="from-purple-900/40 to-blue-900/30"
          iconBg="from-teal-400 to-cyan-500"
        />
        <TopicCard
          icon={<AlertTriangle className="w-4 h-4 text-white" />}
          title="Malware Analysis"
          gradient="from-purple-900/40 to-blue-900/30"
          iconBg="from-amber-400 to-orange-500"
        />
        <TopicCard
          icon={<Database className="w-4 h-4 text-white" />}
          title="Data Protection"
          gradient="from-purple-900/40 to-blue-900/30"
          iconBg="from-emerald-400 to-green-500"
        />
        <TopicCard
          icon={<Wifi className="w-4 h-4 text-white" />}
          title="Wireless Security"
          gradient="from-purple-900/40 to-blue-900/30"
          iconBg="from-indigo-400 to-violet-500"
        />
      </div>
    </div>

    {/* Security Stats */}
    <div className="mb-4">
      <SecurityStats />
    </div>

    {/* Alert Banner */}
    {/* <AlertBanner /> */}
  </div>
);

const ChatHeader = () => (
  <div className="border-b border-cyan-400/20 bg-gray-950/70 backdrop-blur-sm p-4 rounded-t-xl">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a className="hover:opacity-80 transition-opacity">
          <Shield className="w-7 h-7 text-cyan-400" />
        </a>
        <div>
          <h2 className="text-white text-base font-bold font-roboto">
            Trợ lý AI Bảo mật
          </h2>
          <p className="text-cyan-400 text-xs">Chuyên gia Cyber Security</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-md shadow-green-500/40"></div>
        <span className="text-gray-400 text-xs">Đang hoạt động</span>
      </div>
    </div>
  </div>
);

const ChatMessage = () => (
  <div className="flex items-start max-w-2xl">
    <div className="bg-gradient-to-r from-gray-900/90 to-black/95 border border-cyan-400/15 rounded-2xl p-5 shadow-md">
      <div className="space-y-5 text-gray-200 text-sm leading-relaxed">
        <p>Chào mừng bạn đến với trợ lý AI về An ninh mạng!</p>
        <p>
          Bạn có biết rằng hiện nay vấn đề bảo mật đang là mối quan tâm hàng đầu
          của các tổ chức trên toàn thế giới? Với sự gia tăng của các cuộc tấn
          công mạng, việc hiểu rõ về bảo mật thông tin đã trở thành kỹ năng
          thiết yếu.
        </p>
        <div>
          <p className="mb-2">Tôi có thể giúp bạn tìm hiểu về:</p>
          <ul className="space-y-1 ml-0">
            <li>• Ethical Hacking và Penetration Testing</li>
            <li>• Network Security và Firewall</li>
            <li>• Digital Forensics</li>
            <li>• Mobile Security</li>
            <li>• Web Application Security</li>
          </ul>
        </div>
        <p>Bạn muốn tìm hiểu về chủ đề nào?</p>
      </div>
      <div className="mt-3 opacity-70">
        <span className="text-gray-400 text-xs">7:00:03 PM</span>
      </div>
    </div>
  </div>
);

const ChatInput = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="border-t border-cyan-400/20 bg-gray-950/70 backdrop-blur-sm p-4 rounded-b-xl">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hỏi về bảo mật, ethical hacking, penetration testing..."
            className="w-full p-3 rounded-lg border border-cyan-400/20 bg-gray-900/80 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 shadow-inner text-sm"
          />
        </div>
        <button
          className={`p-3 rounded-lg transition-all ${
            message.trim()
              ? "bg-gradient-to-r from-cyan-500 to-violet-500 shadow-md shadow-cyan-500/40"
              : "bg-gradient-to-r from-cyan-500 to-violet-500 opacity-50"
          }`}
          disabled={!message.trim()}
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

const ChatArea = () => (
  <div className="flex-1 flex flex-col h-screen">
    <ChatHeader />
    <div className="flex-1 bg-gradient-to-b from-gray-900/60 via-gray-950/80 to-black p-6 overflow-y-auto">
      <ChatMessage />
    </div>
    <ChatInput />
  </div>
);

export default function ChatBot() {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-roboto flex">
      <Sidebar />
      <ChatArea />
    </div>
  );
}
