import { Shield, Send, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ENDPOINTS } from "../../../routes/endPoints";

// ======= Component hiển thị từng chủ đề =======
const TopicCard = ({ icon, title, gradient, iconBg, onClick }) => (
  <div
    onClick={onClick}
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

// ======= Thống kê mẫu =======
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

// ======= Sidebar =======
// const Sidebar = ({ topics, onSelectTopic, onCreateTopic }) => (
//   <div className="w-72 h-screen border-r border-cyan-400/20 bg-gradient-to-b from-gray-950 via-gray-900 to-black p-5 flex flex-col">
//     <div className="flex items-center gap-3 mb-10">
//       <Link
//         to={ENDPOINTS.USER.DASHBOARD}
//         className="flex items-center gap-3 hover:opacity-80 transition-opacity"
//       >
//         <Shield className="w-7 h-7 text-cyan-400" />
//         <span className="text-white text-lg font-bold font-roboto">
//           Lozo Academy
//         </span>
//       </Link>
//     </div>

//     <div className="flex justify-between items-center mb-5">
//       <h2 className="text-white text-base font-bold font-roboto">
//         Chủ đề phổ biến
//       </h2>
//       <button
//         onClick={onCreateTopic}
//         className="p-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 hover:scale-105 transition-all"
//       >
//         <Plus className="w-4 h-4 text-white" />
//       </button>
//     </div>

//     <div className="space-y-3 mb-8">
//       {topics.map((topic) => (
//         <TopicCard
//           key={topic.id}
//           title={topic.ten} // dùng tên từ API
//           gradient="from-purple-900/40 to-blue-900/30"
//           iconBg="from-cyan-500 to-violet-500"
//           icon={<Shield className="w-4 h-4 text-white" />}
//           onClick={() => onSelectTopic(topic.id)}
//         />
//       ))}
//     </div>

//     <div className="mb-4">
//       <SecurityStats />
//     </div>
//   </div>
// );
// ======= Sidebar =======
const Sidebar = ({ topics, onSelectTopic, onCreateTopic }) => (
  <div className="w-72 h-screen border-r border-cyan-400/20 bg-gradient-to-b from-gray-950 via-gray-900 to-black p-5 flex flex-col">
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

    <div className="flex justify-between items-center mb-5">
      <h2 className="text-white text-base font-bold font-roboto">
        Chủ đề phổ biến
      </h2>
      <button
        onClick={onCreateTopic}
        className="p-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 hover:scale-105 transition-all"
      >
        <Plus className="w-4 h-4 text-white" />
      </button>
    </div>

    {/* Danh sách chủ đề scroll */}
    <div className="flex-1 overflow-y-auto space-y-3 mb-4">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          title={topic.ten}
          gradient="from-purple-900/40 to-blue-900/30"
          iconBg="from-cyan-500 to-violet-500"
          icon={<Shield className="w-4 h-4 text-white" />}
          onClick={() => onSelectTopic(topic.id)}
        />
      ))}
    </div>

    <SecurityStats />
  </div>
);

// ======= Header Chat =======
const ChatHeader = ({ currentTopic }) => (
  <div className="border-b border-cyan-400/20 bg-gray-950/70 backdrop-blur-sm p-4 rounded-t-xl">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Shield className="w-7 h-7 text-cyan-400" />
        <div>
          <h2 className="text-white text-base font-bold font-roboto">
            {currentTopic ? currentTopic.ten : "Trợ lý AI Bảo mật"}
          </h2>
          <p className="text-cyan-400 text-xs">
            {currentTopic ? currentTopic.mota : "Chuyên gia Cyber Security"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-md shadow-green-500/40"></div>
        <span className="text-gray-400 text-xs">Đang hoạt động</span>
      </div>
    </div>
  </div>
);

// ======= Tin nhắn =======
const ChatMessage = ({ messages }) => (
  <div className="space-y-4">
    {messages.map((msg, idx) => (
      <div
        key={idx}
        className={`flex items-start ${
          msg.role === "user" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`max-w-[70%] rounded-2xl p-4 shadow-md border ${
            msg.role === "user"
              ? "bg-gradient-to-r from-cyan-600 to-violet-600 text-white border-cyan-400/30"
              : "bg-gradient-to-r from-gray-900/90 to-black/95 text-gray-200 border-cyan-400/15"
          }`}
        >
          <p className="text-sm leading-relaxed">{msg.content}</p>
        </div>
      </div>
    ))}
  </div>
);

// ======= Input Chat =======
const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-cyan-400/20 bg-gray-950/70 backdrop-blur-sm p-4 rounded-b-xl">
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập câu hỏi của bạn..."
          className="flex-1 p-3 rounded-lg border border-cyan-400/20 bg-gray-900/80 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 shadow-inner text-sm"
        />
        <button
          onClick={handleSend}
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

// ======= Vùng Chat =======
// const ChatArea = ({ currentTopic, messages, onSend }) => (
//   <div className="flex-1 flex flex-col h-screen">
//     <ChatHeader currentTopic={currentTopic} />
//     <div className="flex-1 bg-gradient-to-b from-gray-900/60 via-gray-950/80 to-black p-6 overflow-y-auto">
//       <ChatMessage messages={messages} />
//     </div>
//     <ChatInput onSend={onSend} />
//   </div>
// );
const ChatArea = ({ currentTopic, messages, onSend }) => (
  <div className="flex-1 flex flex-col h-screen">
    <ChatHeader currentTopic={currentTopic} />

    {/* Phần tin nhắn scroll */}
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900/60 via-gray-950/80 to-black p-6">
      <ChatMessage messages={messages} />
    </div>

    <ChatInput onSend={onSend} />
  </div>
);

// ======= Component chính =======
export default function ChatBot() {
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [messages, setMessages] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user")).id;
  const token = localStorage.getItem("access_token");

  // 🔹 Lấy danh sách chủ đề
  useEffect(() => {
    axios
      .get(
        `https://course-an-ninh-mang-backend.vercel.app/api/chatbot/topics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setTopics(res.data || []));
  }, []);

  // 🔹 Khi chọn chủ đề → lấy câu hỏi
  const handleSelectTopic = async (topicId) => {
    const topic = topics.find((t) => t.id === topicId);
    setCurrentTopic(topic);

    const res = await axios.get(
      `https://course-an-ninh-mang-backend.vercel.app/api/chatbot/topics/${topicId}/qa`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const qaMessages = res.data
      .map((qa) => [
        { role: "user", content: qa.cauhoi },
        { role: "assistant", content: qa.cautraloi },
      ])
      .flat();

    setMessages(qaMessages);
  };

  // 🔹 Gửi câu hỏi mới
  const handleSend = async (message) => {
    if (!currentTopic) return;

    const topicId = currentTopic.id;
    const userMsg = { role: "user", content: message };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post(
        "https://course-an-ninh-mang-backend.vercel.app/api/chatbot/chat",
        {
          topicId,
          messages: [userMsg],
          model: "openai/gpt-4o",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const botReply = {
        role: "assistant",
        content: res.data.choices[0].message.content,
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Lỗi gửi tin nhắn:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Đã xảy ra lỗi khi gửi câu hỏi." },
      ]);
    }
  };

  // 🔹 Tạo chủ đề mới
  const handleCreateTopic = async () => {
    const title = prompt("Nhập tên chủ đề mới:");
    if (!title) return;
    // const res = await axios.post("http://localhost:8000/api/chatbot/topics", {
    //   title,
    // });
    setTopics((prev) => [...prev, title]);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-roboto flex">
      <Sidebar
        topics={topics}
        onSelectTopic={handleSelectTopic}
        onCreateTopic={handleCreateTopic}
      />
      <ChatArea
        currentTopic={currentTopic}
        messages={messages}
        onSend={handleSend}
      />
    </div>
  );
}
