export function StatsSection() {
  const stats = [
    {
      id: 1,
      title: "Chứng chỉ đạt được",
      value: "3",
      gradient: "from-blue-500 to-cyan-400",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 33 33" fill="none">
          <path d="M3.41602 4.51465H11.416C12.8305 4.51465 14.1871 5.07655 15.1873 6.07675C16.1874 7.07694 16.7493 8.43349 16.7493 9.84798V28.5146C16.7493 27.4538 16.3279 26.4364 15.5778 25.6862C14.8276 24.9361 13.8102 24.5146 12.7493 24.5146H3.41602V4.51465Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30.0833 4.51465H22.0833C20.6688 4.51465 19.3123 5.07655 18.3121 6.07675C17.3119 7.07694 16.75 8.43349 16.75 9.84798V28.5146C16.75 27.4538 17.1714 26.4364 17.9216 25.6862C18.6717 24.9361 19.6891 24.5146 20.75 24.5146H30.0833V4.51465Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Điểm trung bình",
      value: "95%",
      gradient: "from-green-500 to-emerald-500",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 33 33" fill="none">
          <path d="M16.2493 29.8483C23.6131 29.8483 29.5827 23.8788 29.5827 16.515C29.5827 9.15118 23.6131 3.18164 16.2493 3.18164C8.88555 3.18164 2.91602 9.15118 2.91602 16.515C2.91602 23.8788 8.88555 29.8483 16.2493 29.8483Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.25 24.5146C20.6683 24.5146 24.25 20.9329 24.25 16.5146C24.25 12.0964 20.6683 8.51465 16.25 8.51465C11.8317 8.51465 8.25 12.0964 8.25 16.5146C8.25 20.9329 11.8317 24.5146 16.25 24.5146Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.2507 19.181C17.7234 19.181 18.9173 17.9871 18.9173 16.5143C18.9173 15.0416 17.7234 13.8477 16.2507 13.8477C14.7779 13.8477 13.584 15.0416 13.584 16.5143C13.584 17.9871 14.7779 19.181 16.2507 19.181Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Tuần học tập",
      value: "30",
      gradient: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 33 33" fill="none">
          <path d="M16.7493 29.8483C24.1131 29.8483 30.0827 23.8788 30.0827 16.515C30.0827 9.15118 24.1131 3.18164 16.7493 3.18164C9.38555 3.18164 3.41602 9.15118 3.41602 16.515C3.41602 23.8788 9.38555 29.8483 16.7493 29.8483Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.75 8.51465V16.5146L22.0833 19.1813" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Kỹ năng mới",
      value: "15",
      gradient: "from-yellow-500 to-orange-500",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 33 33" fill="none">
          <path d="M17.5833 3.18164L4.25 19.1816H16.25L14.9167 29.8483L28.25 13.8483H16.25L17.5833 3.18164Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-center space-x-3 mb-8">
        <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 32 33" fill="none">
          <path d="M26.6667 11.1816H5.33333C4.59695 11.1816 4 11.7786 4 12.515V15.1816C4 15.918 4.59695 16.515 5.33333 16.515H26.6667C27.403 16.515 28 15.918 28 15.1816V12.515C28 11.7786 27.403 11.1816 26.6667 11.1816Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11.1816V28.515" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.3327 16.5146V25.848C25.3327 26.5552 25.0517 27.2335 24.5516 27.7336C24.0515 28.2337 23.3733 28.5146 22.666 28.5146H9.33268C8.62544 28.5146 7.94716 28.2337 7.44706 27.7336C6.94697 27.2335 6.66602 26.5552 6.66602 25.848V16.5146" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.99935 11.1809C9.11529 11.1809 8.26745 10.8297 7.64233 10.2046C7.01721 9.57949 6.66602 8.73164 6.66602 7.84759C6.66602 6.96353 7.01721 6.11569 7.64233 5.49057C8.26745 4.86544 9.11529 4.51425 9.99935 4.51425C11.2856 4.49184 12.546 5.11593 13.6163 6.30514C14.6866 7.49434 15.5171 9.19346 15.9993 11.1809C16.4816 9.19346 17.3121 7.49434 18.3824 6.30514C19.4526 5.11593 20.7131 4.49184 21.9993 4.51425C22.8834 4.51425 23.7313 4.86544 24.3564 5.49057C24.9815 6.11569 25.3327 6.96353 25.3327 7.84759C25.3327 8.73164 24.9815 9.57949 24.3564 10.2046C23.7313 10.8297 22.8834 11.1809 21.9993 11.1809" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h2 className="text-2xl font-bold text-white text-center">Tổng kết thành tích</h2>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center space-y-4">
            {/* Icon */}
            <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center`}>
              {stat.icon}
            </div>
            
            {/* Value */}
            <div className="text-3xl font-bold text-white">
              {stat.value}
            </div>
            
            {/* Title */}
            <div className="text-gray-400 text-base">
              {stat.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
