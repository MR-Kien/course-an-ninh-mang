export function CertificateCards() {
  const certificates = [
    {
      id: 1,
      title: "An ninh mạng cơ bản",
      description: "Hoàn thành xuất sắc khóa học về các nguyên tắc cơ bản của an ninh mạng, bao gồm firewall, VPN và phòng chống tấn công.",
      level: "Cơ bản",
      levelColor: "from-green-400 to-emerald-400",
      levelBadge: "bg-green-500/20 border-green-500/30 text-green-400",
      score: "95%",
      date: "15/12/2024",
      duration: "8 tuần",
      gradient: "from-blue-500 to-cyan-400",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 32 33" fill="none">
          <path d="M26.6673 17.4583C26.6673 24.1249 22.0007 27.4583 16.454 29.3916C16.1635 29.49 15.848 29.4853 15.5607 29.3783C10.0007 27.4583 5.33398 24.1249 5.33398 17.4583V8.12495C5.33398 7.77133 5.47446 7.43219 5.72451 7.18214C5.97456 6.93209 6.3137 6.79162 6.66732 6.79162C9.33398 6.79162 12.6673 5.19162 14.9873 3.16495C15.2698 2.92361 15.6291 2.79102 16.0007 2.79102C16.3722 2.79102 16.7315 2.92361 17.014 3.16495C19.3473 5.20495 22.6673 6.79162 25.334 6.79162C25.6876 6.79162 26.0267 6.93209 26.2768 7.18214C26.5268 7.43219 26.6673 7.77133 26.6673 8.12495V17.4583Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ["Firewall Configuration", "VPN Setup"]
    },
    {
      id: 2,
      title: "Ethical Hacking chuyên nghiệp",
      description: "Thành thạo các kỹ thuật penetration testing và đánh giá lỗ hổng bảo mật một cách có đạo đức và chuyên nghiệp.",
      level: "Nâng cao",
      levelColor: "from-red-400 to-pink-400",
      levelBadge: "bg-red-500/20 border-red-500/30 text-red-400",
      score: "98%",
      date: "10/12/2024",
      duration: "12 tuần",
      gradient: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 33 33" fill="none">
          <path d="M21.6641 24.125L29.6641 16.125L21.6641 8.125" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.9961 8.125L2.99609 16.125L10.9961 24.125" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ["Penetration Testing", "Vulnerability Assessment"]
    },
    {
      id: 3,
      title: "Bảo mật ứng dụng Web",
      description: "Nắm vững OWASP Top 10 và các kỹ thuật bảo mật ứng dụng web hiện đại, từ SQL injection đến XSS prevention.",
      level: "Trung cấp",
      levelColor: "from-yellow-400 to-orange-400",
      levelBadge: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
      score: "92%",
      date: "05/12/2024",
      duration: "10 tuần",
      gradient: "from-green-500 to-emerald-500",
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 33 33" fill="none">
          <path d="M16.6602 10.792C23.2876 10.792 28.6602 9.00113 28.6602 6.79199C28.6602 4.58285 23.2876 2.79199 16.6602 2.79199C10.0327 2.79199 4.66016 4.58285 4.66016 6.79199C4.66016 9.00113 10.0327 10.792 16.6602 10.792Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.66016 6.79199V25.4587C4.66016 26.5195 5.92444 27.5369 8.17487 28.2871C10.4253 29.0372 13.4776 29.4587 16.6602 29.4587C19.8428 29.4587 22.895 29.0372 25.1454 28.2871C27.3959 27.5369 28.6602 26.5195 28.6602 25.4587V6.79199" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.66016 16.125C4.66016 17.1859 5.92444 18.2033 8.17487 18.9534C10.4253 19.7036 13.4776 20.125 16.6602 20.125C19.8428 20.125 22.895 19.7036 25.1454 18.9534C27.3959 18.2033 28.6602 17.1859 28.6602 16.125" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ["OWASP Top 10", "SQL Injection Prevention"]
    }
  ];

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400/50 transition-colors"
          >
            {/* Header with Gradient Background */}
            <div className={`h-32 bg-gradient-to-r ${cert.gradient} relative`}>
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Icon and Badge */}
              <div className="absolute top-4 left-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-[10px] flex items-center justify-center">
                  {cert.icon}
                </div>
                <div className={`px-3 py-1 rounded-xl border ${cert.levelBadge}`}>
                  <span className="text-xs font-medium">{cert.level}</span>
                </div>
              </div>
              
              {/* Score Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl px-3 py-1 flex items-center space-x-2">
                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 17 17" fill="none">
                    <path d="M8.30143 1.45801L10.3614 5.63134L14.9681 6.30467L11.6348 9.55134L12.4214 14.138L8.30143 11.9713L4.18143 14.138L4.9681 9.55134L1.63477 6.30467L6.24143 5.63134L8.30143 1.45801Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm font-bold text-green-400">{cert.score}</span>
                </div>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
              
              {/* Meta Info */}
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <svg className="w-4 h-4 text-purple-400" viewBox="0 0 16 17" fill="none">
                    <path d="M5.33398 1.70801V4.37467" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.666 1.70801V4.37467" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.6667 3.04199H3.33333C2.59695 3.04199 2 3.63895 2 4.37533V13.7087C2 14.445 2.59695 15.042 3.33333 15.042H12.6667C13.403 15.042 14 14.445 14 13.7087V4.37533C14 3.63895 13.403 3.04199 12.6667 3.04199Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7.04199H14" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 17 17" fill="none">
                    <path d="M8.33073 15.0413C12.0126 15.0413 14.9974 12.0566 14.9974 8.37467C14.9974 4.69278 12.0126 1.70801 8.33073 1.70801C4.64883 1.70801 1.66406 4.69278 1.66406 8.37467C1.66406 12.0566 4.64883 15.0413 8.33073 15.0413Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.33008 4.375V8.375L10.9967 9.70833" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{cert.duration}</span>
                </div>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs rounded-[10px]"
                  >
                    {skill}
                  </span>
                ))}
                <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-[10px]">
                  +2 more
                </span>
              </div>
              
              {/* CTA Button */}
              <button className={`w-full py-3 px-4 bg-gradient-to-r ${cert.gradient} text-white font-medium rounded-[10px] hover:shadow-lg transition-shadow flex items-center justify-center space-x-2`}>
                <svg className="w-4 h-4" viewBox="0 0 17 17" fill="none">
                  <path d="M8.16406 9.70898C10.3732 9.70898 12.1641 7.91812 12.1641 5.70898C12.1641 3.49985 10.3732 1.70898 8.16406 1.70898C5.95492 1.70898 4.16406 3.49985 4.16406 5.70898C4.16406 7.91812 5.95492 9.70898 8.16406 9.70898Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.4834 8.96875L11.4987 15.0421L8.16536 13.0421L4.83203 15.0421L5.84736 8.96875" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Xem chứng chỉ</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
