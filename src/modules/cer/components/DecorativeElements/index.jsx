export function DecorativeElements() {
  const sparkles = [
    { id: 1, top: "2%", left: "10%", type: "star", size: "w-2 h-2", color: "text-pink-400" },
    { id: 2, top: "15%", left: "85%", type: "sparkle", size: "w-3 h-3", color: "text-purple-400" },
    { id: 3, top: "25%", left: "5%", type: "star", size: "w-2 h-2", color: "text-cyan-400" },
    { id: 4, top: "35%", left: "90%", type: "sparkle", size: "w-2 h-2", color: "text-pink-400" },
    { id: 5, top: "45%", left: "3%", type: "star", size: "w-3 h-3", color: "text-purple-400" },
    { id: 6, top: "55%", left: "95%", type: "sparkle", size: "w-2 h-2", color: "text-yellow-400" },
    { id: 7, top: "65%", left: "8%", type: "star", size: "w-2 h-2", color: "text-emerald-400" },
    { id: 8, top: "75%", left: "88%", type: "sparkle", size: "w-3 h-3", color: "text-purple-400" },
    { id: 9, top: "85%", left: "12%", type: "star", size: "w-2 h-2", color: "text-pink-400" },
    { id: 10, top: "12%", left: "25%", type: "sparkle", size: "w-2 h-2", color: "text-cyan-400" },
    { id: 11, top: "28%", left: "70%", type: "star", size: "w-2 h-2", color: "text-yellow-400" },
    { id: 12, top: "42%", left: "15%", type: "sparkle", size: "w-3 h-3", color: "text-purple-400" },
    { id: 13, top: "58%", left: "75%", type: "star", size: "w-2 h-2", color: "text-emerald-400" },
    { id: 14, top: "72%", left: "20%", type: "sparkle", size: "w-2 h-2", color: "text-pink-400" },
    { id: 15, top: "8%", left: "50%", type: "star", size: "w-2 h-2", color: "text-purple-400" },
    { id: 16, top: "90%", left: "45%", type: "sparkle", size: "w-3 h-3", color: "text-cyan-400" }
  ];

  const SparkleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 9 9" fill="none">
      <path 
        d="M4.83984 1.05957L4.20251 2.99724C4.16989 3.09641 4.11444 3.18653 4.04062 3.26035C3.9668 3.33417 3.87668 3.38962 3.77751 3.42224L1.83984 4.05957L3.77751 4.6969C3.87668 4.72952 3.9668 4.78497 4.04062 4.85879C4.11444 4.93261 4.16989 5.02273 4.20251 5.1219L4.83984 7.05957L5.47718 5.1219C5.50979 5.02273 5.56525 4.93261 5.63906 4.85879C5.71288 4.78497 5.80301 4.72952 5.90218 4.6969L7.83984 4.05957L5.90218 3.42224C5.80301 3.38962 5.71288 3.33417 5.63906 3.26035C5.56525 3.18653 5.50979 3.09641 5.47718 2.99724L4.83984 1.05957Z" 
        stroke="currentColor" 
        strokeWidth="0.67" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.3"
      />
      <path 
        d="M2.50586 1.05957V2.3929" 
        stroke="currentColor" 
        strokeWidth="0.67" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.3"
      />
      <path 
        d="M7.17383 5.72656V7.0599" 
        stroke="currentColor" 
        strokeWidth="0.67" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.3"
      />
      <path 
        d="M1.83984 1.72656H3.17318" 
        stroke="currentColor" 
        strokeWidth="0.67" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.3"
      />
      <path 
        d="M6.50586 6.39258H7.83919" 
        stroke="currentColor" 
        strokeWidth="0.67" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.3"
      />
    </svg>
  );

  const StarIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 9 9" fill="none">
      <path 
        d="M4.85872 1.36719L5.88872 3.45385L8.19206 3.79052L6.52539 5.41385L6.91872 7.70719L4.85872 6.62385L2.79872 7.70719L3.19206 5.41385L1.52539 3.79052L3.82872 3.45385L4.85872 1.36719Z" 
        stroke="currentColor" 
        strokeWidth="0.67" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.3"
      />
    </svg>
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Color Dots */}
      <div className="absolute inset-0">
        {/* Top Row */}
        <div className="absolute top-0 left-8 w-2 h-2 bg-cyan-400 rounded-xl opacity-60"></div>
        <div className="absolute top-0 left-32 w-2 h-2 bg-emerald-400 rounded-xl opacity-60"></div>
        <div className="absolute top-0 left-56 w-2 h-2 bg-purple-500 rounded-xl opacity-60"></div>
        <div className="absolute top-0 left-80 w-2 h-2 bg-purple-500 rounded-xl opacity-60"></div>
        <div className="absolute top-0 right-80 w-2 h-2 bg-pink-500 rounded-xl opacity-60"></div>
        <div className="absolute top-0 right-56 w-2 h-2 bg-emerald-400 rounded-xl opacity-60"></div>
        <div className="absolute top-0 right-32 w-2 h-2 bg-purple-500 rounded-xl opacity-60"></div>
        <div className="absolute top-0 right-8 w-2 h-2 bg-pink-500 rounded-xl opacity-60"></div>
      </div>

      {/* Animated Sparkles and Stars */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: `${sparkle.id * 0.5}s`,
            animationDuration: `${2 + (sparkle.id % 3)}s`
          }}
        >
          {sparkle.type === "sparkle" ? (
            <SparkleIcon className={`${sparkle.size} ${sparkle.color}`} />
          ) : (
            <StarIcon className={`${sparkle.size} ${sparkle.color}`} />
          )}
        </div>
      ))}
      
      {/* Floating Animation */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 text-purple-400 animate-bounce" style={{ animationDelay: "1s", animationDuration: "3s" }}>
        <StarIcon className="w-full h-full" />
      </div>
      
      <div className="absolute top-3/4 right-1/4 w-3 h-3 text-pink-400 animate-bounce" style={{ animationDelay: "2s", animationDuration: "2.5s" }}>
        <SparkleIcon className="w-full h-full" />
      </div>
      
      <div className="absolute top-1/2 left-1/6 w-3 h-3 text-cyan-400 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "2.8s" }}>
        <StarIcon className="w-full h-full" />
      </div>
    </div>
  );
}
