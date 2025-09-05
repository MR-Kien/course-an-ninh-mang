import { Bell, LogOut, Calendar, User } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { ENDPOINTS } from "../../routes/endPoints";
import ListNotification from "../ListNotification/ListNotification";
import { useNotification } from "../../hooks/useNotification";
export default function Header() {
  const { getUnreadnotification } = useNotification();
  const [unreadnotification, setUnreadnotification] = useState(0);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const notificationRef = useRef(null);
  const handleClickOutside = async (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target)
    ) {
      setShowNotificationPopup(false);
    }
  };
  const handleLogout = () => {
    logout();
    navigate(ENDPOINTS.AUTH.LOGIN);
  };

  // const handleClickOutside = (e) => {
  //   if (popupRef.current && !popupRef.current.contains(e.target)) {
  //     setShowPopup(false);
  //   }
  // };
  useEffect(() => {
    const fetchUnreadNotifications = async () => {
      const notifications = await getUnreadnotification(user.id);
      console.log("Unread notifications:", notifications);
      setUnreadnotification(notifications.length);
    };

    fetchUnreadNotifications();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [currentDateTime, setCurrentDateTime] = useState(() =>
    new Date().toLocaleString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(
        new Date().toLocaleString("en-US", {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-5 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-red-600">
          Hematology Analyzer Management System
        </h1>

        <div className="flex items-center space-x-4">
          {/* Current Time */}
          <div className="px-4 py-3 w-70 bg-gray-100 rounded-full text-center font-medium text-sm text-red-600">
            <Calendar className="w-6 h-6 text-red-600 inline-block mr-2" />
            {currentDateTime}
          </div>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotificationPopup(!showNotificationPopup)}
              className="relative w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Bell className="w-6 h-6 text-red-600" />
              {unreadnotification > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadnotification}
                </span>
              )}
              {/* <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span> */}
            </button>

            {showNotificationPopup && (
              <div className="absolute right-0 mt-2 w-[380px] max-h-[400px] overflow-y-auto bg-white rounded-xl shadow-xl z-50">
                <ListNotification userId={user.id} />
              </div>
            )}
          </div>

          {/* Avatar with popup */}
          <div className="relative">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-500"
            >
              <img
                src={
                  user.avatarUrl
                    ? user.avatarUrl
                    : "https://mockprojectgroup3.s3.ap-southeast-2.amazonaws.com/logoblood.jpg"
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>

            {showPopup && (
              <div
                ref={popupRef}
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl z-50 overflow-hidden"
              >
                <button
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => {
                    setShowPopup(false);
                    navigate(ENDPOINTS.USER.MYINFO); // chỉnh đường dẫn nếu cần
                  }}
                >
                  <User size={18} className="text-red-600" />
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut size={18} className="text-red-600" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
