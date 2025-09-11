import { 
  Plus,
  Upload,
  BarChart3,
  BookOpen,
  Shield,
  Code,
  Search,
  Network,
  Smartphone,
  Globe,
  AlertTriangle,
  Users,
  TrendingUp,
  MessageCircle,
  Clock
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-80 min-h-screen glass border-r border-slate-700/50 p-6">
      <div className="space-y-8">
        {/* Quick Actions Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-azure-65 uppercase tracking-wider">
            Thao tác nhanh
          </h3>
          <div className="space-y-2">
            <button className="bg-gradient-to-r from-[#9532e6] to-[#d7277b] w-full flex items-center gap-3 p-3 rounded-[12px] gradient-primary text-white hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" />
              <span className="text-sm">Tạo khóa học mới</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-[12px] glass hover:bg-slate-700 bg-slate-700/50">
              <Upload className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Import nội dung</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-[12px] glass hover:bg-slate-700 bg-slate-700/50">
              <BarChart3 className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Xem báo cáo</span>
            </button>
          </div>
        </div>

        {/* Course Categories Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-azure-65 uppercase tracking-wider">
            Danh mục khóa học
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-[12px] border border-violet-500/30 bg-violet-500/20">
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-violet-85" />
                <span className="text-sm text-violet-85">Tất cả khóa học</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-violet-85 rounded-xl">12</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-azure-84" />
                <span className="text-sm text-azure-84">An ninh mạng cơ bản</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">3</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <Code className="w-4 h-4 text-azure-84" />
                <span className="text-sm text-azure-84">Ethical Hacking</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">2</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-azure-84" />
                <span className="text-sm text-azure-84">Digital Forensics</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">2</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <Network className="w-4 h-4 text-azure-84" />
                <span className="text-sm text-azure-84">Network Security</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">2</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-azure-84" />
                <span className="text-sm text-azure-84">Mobile Security</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">1</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-azure-84" />
                <span className="text-sm text-azure-84">Cloud Security</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">1</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-azure-84" />
                <span className="text-sm text-azure-84">Incident Response</span>
              </div>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">1</span>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-azure-65 uppercase tracking-wider">
            Trạng thái
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-[12px] border border-violet-500/30 bg-violet-500/20">
              <span className="text-sm text-violet-85">Tất cả trạng thái</span>
              <span className="px-2 py-1 text-xs bg-azure-27 text-violet-85 rounded-xl">12</span>
            </div>
            
            <div className="flex items-center justify-between p-2 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <span className="text-sm text-azure-84">Đã xuất bản</span>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">8</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <span className="text-sm text-azure-84">Bản nháp</span>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">2</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <span className="text-sm text-azure-84">Đã lên lịch</span>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">1</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-[12px] hover:bg-slate-700/30 transition-colors">
              <span className="text-sm text-azure-84">Đã lưu trữ</span>
              <span className="px-2 py-1 text-xs bg-azure-27 text-azure-84 rounded-xl">1</span>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-slate-800 rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-bold text-azure-65 uppercase tracking-wider">
            Tổng quan
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-azure-84">Tổng khóa học</span>
              <span className="text-base font-bold text-violet-75">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-azure-84">Tổng học viên</span>
              <span className="text-base font-bold text-spring-green-58">6.2K+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-azure-84">Tỷ lệ hoàn thành</span>
              <span className="text-base font-bold text-rose-70">82%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
