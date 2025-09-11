import { Search, Settings, Bell, User, Clock, BookOpen, Award, Play, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import MainContent from "../components/MainContent"; 
export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative background dots */}
      {/* <div className="absolute w-1 h-1 bg-violet-300 rounded-full opacity-60 left-10 top-20"></div>
      <div className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-40 right-20 top-40"></div>
      <div className="absolute w-1 h-1 bg-violet-200 rounded-full opacity-50 left-1/4 top-60"></div>
      <div className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-60 right-1/4 bottom-40"></div>
      <div className="absolute w-1 h-1 bg-violet-300 rounded-full opacity-40 right-1/2 bottom-20"></div>
      <div className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-50 right-12 top-1/3"></div> */}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />
    </div>
  );
}
