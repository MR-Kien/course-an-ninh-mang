import { 
  Plus,
  Filter,
  ChevronDown,
  LayoutGrid,
  List
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
      {/* Title and Description */}
      <div className="space-y-2 flex-1">
        <h1 className="text-3xl font-bold text-white">
          Quản lý Khóa học
        </h1>
        <p className="text-azure-65 text-base leading-relaxed max-w-3xl">
          Quản lý và theo dõi hiệu suất của 12 khóa học về cybersecurity. Tổng cộng 6,200+ học viên đang tham gia.
        </p>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-4">
        {/* View Toggle */}
        <div className="bg-slate-800 rounded-[10px] p-1">
          <button className="p-2 rounded-[10px] bg-violet-600 text-white">
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-[10px] text-azure-65 hover:text-white hover:bg-slate-700/50 transition-colors">
            <List className="w-4 h-4" />
          </button>
        </div>

        {/* Advanced Filter */}
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-[10px] hover:bg-slate-700/50 transition-colors">
          <Filter className="w-4 h-4 text-white" />
          <span className="text-white">Lọc nâng cao</span>
          <ChevronDown className="w-4 h-4 text-white" />
        </button>

        {/* Create Course Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[10px] hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4 text-white" />
          <span className="text-white">Tạo khóa học</span>
        </button>
      </div>
    </div>
  );
}
