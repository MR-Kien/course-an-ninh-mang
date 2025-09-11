export function HeroSection() {
  return (
    <section className="text-center py-12 space-y-6">
      {/* Top Icon and Title */}
      <div className="flex items-center justify-center space-x-4">
        {/* Left Magic Wand Icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 48 48" fill="none">
            <path d="M11.6 22.5996L4 43.9996L25.4 36.4196" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 6H8.02" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44 16H44.02" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30 4H30.02" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44 40H44.02" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44 4L39.52 5.5C38.2448 5.92478 37.1567 6.77928 36.4417 7.91745C35.7266 9.05562 35.4291 10.4068 35.6 11.74C35.8 13.46 34.46 15 32.7 15H31.94C30.22 15 28.74 16.2 28.42 17.88L28 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44 25.9999L42.36 25.3399C40.64 24.6599 38.72 25.7399 38.4 27.5599C38.18 28.9599 36.96 29.9999 35.54 29.9999H34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L22.66 5.64C23.34 7.36 22.26 9.28 20.44 9.6C19.04 9.8 18 11.04 18 12.46V14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.9991 26C25.8591 29.86 27.6591 34.34 25.9991 36C24.3391 37.66 19.8591 35.86 15.9991 32C12.1391 28.14 10.3391 23.66 11.9991 22C13.6591 20.34 18.1391 22.14 21.9991 26Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-white">
            🎉 Chúc mừng! 🎉
          </h1>
          <p className="text-2xl font-normal bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Bạn đã hoàn thành xuất sắc!
          </p>
        </div>
        
        {/* Right Trophy Icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 48 48" fill="none">
            <path d="M12 18H9C7.67392 18 6.40215 17.4732 5.46447 16.5355C4.52678 15.5979 4 14.3261 4 13C4 11.6739 4.52678 10.4021 5.46447 9.46447C6.40215 8.52678 7.67392 8 9 8H12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36 18H39C40.3261 18 41.5979 17.4732 42.5355 16.5355C43.4732 15.5979 44 14.3261 44 13C44 11.6739 43.4732 10.4021 42.5355 9.46447C41.5979 8.52678 40.3261 8 39 8H36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 44H40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 29.3203V34.0003C20 35.1003 19.06 35.9603 18.06 36.4203C15.7 37.5003 14 40.4803 14 44.0003" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 29.3203V34.0003C28 35.1003 28.94 35.9603 29.94 36.4203C32.3 37.5003 34 40.4803 34 44.0003" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36 4H12V18C12 21.1826 13.2643 24.2348 15.5147 26.4853C17.7652 28.7357 20.8174 30 24 30C27.1826 30 30.2348 28.7357 32.4853 26.4853C34.7357 24.2348 36 21.1826 36 18V4Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Description */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-gray-300 text-lg leading-relaxed">
            Bạn đã thể hiện sự kiên trì và nỗ lực xuất sắc trong việc học tập an ninh mạng. Những chứng chỉ này là 
            minh chứng cho kiến thức và kỹ năng chuyên môn của bạn.
          </p>
        </div>
      </div>
    </section>
  );
}
