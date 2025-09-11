export function CertificateDetails() {
  const skills = [
    "Firewall Configuration",
    "VPN Setup", 
    "Threat Detection",
    "Security Policies"
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certificate Image */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-1 shadow-2xl">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fce717800b5669f7111f4a44b3ed9344807d7296?width=1118"
              alt="Cisco Networking Academy Certificate - CCNAv7: Introduction to Networks"
              className="w-full h-auto rounded-xl"
            />
          </div>
          
          {/* Certificate Meta */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Cisco Networking Academy</h4>
                <p className="text-blue-300 text-sm">CCNAv7: Introduction to Networks</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-gray-300 text-sm">Hoàn thành</p>
                <p className="text-white font-bold">3 Nov 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Details */}
        <div className="space-y-6">
          {/* Title */}
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 32 33" fill="none">
              <path d="M6.66602 27.0413H25.3327M2.66602 5.70801L6.66602 21.708H25.3327L29.3327 5.70801L21.3327 15.0413L15.9993 5.70801L10.666 15.0413L2.66602 5.70801Z" stroke="currentColor" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-2xl font-bold text-white">Chi tiết chứng chỉ</h3>
          </div>
          
          {/* Skills Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-purple-400">Kỹ năng đã đạt được</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" viewBox="0 0 16 17" fill="none">
                      <path d="M14.6673 7.76125V8.37458C14.6665 9.8122 14.201 11.211 13.3402 12.3625C12.4794 13.5139 11.2695 14.3562 9.89089 14.7639C8.51227 15.1715 7.03882 15.1225 5.6903 14.6243C4.34177 14.1261 3.19042 13.2053 2.40796 11.9993C1.6255 10.7933 1.25385 9.36663 1.34844 7.93213C1.44303 6.49763 1.99879 5.13214 2.93284 4.0393C3.86689 2.94646 5.12917 2.18484 6.53144 1.86801C7.93371 1.55119 9.40083 1.69614 10.714 2.28125" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 7.70866L8 9.70866L14.6667 3.04199" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Statistics */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-purple-400">Thống kê hoàn thành</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-[10px] p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Điểm số</span>
                  <svg className="w-4 h-4 text-purple-400" viewBox="0 0 17 17" fill="none">
                    <path d="M8.50065 15.0413C12.1825 15.0413 15.1673 12.0566 15.1673 8.37467C15.1673 4.69278 12.1825 1.70801 8.50065 1.70801C4.81875 1.70801 1.83398 4.69278 1.83398 8.37467C1.83398 12.0566 4.81875 15.0413 8.50065 15.0413Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 12.375C10.7091 12.375 12.5 10.5841 12.5 8.375C12.5 6.16586 10.7091 4.375 8.5 4.375C6.29086 4.375 4.5 6.16586 4.5 8.375C4.5 10.5841 6.29086 12.375 8.5 12.375Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.49935 9.70866C9.23573 9.70866 9.83268 9.11171 9.83268 8.37533C9.83268 7.63895 9.23573 7.04199 8.49935 7.04199C7.76297 7.04199 7.16602 7.63895 7.16602 8.37533C7.16602 9.11171 7.76297 9.70866 8.49935 9.70866Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-green-400">95%</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-[10px] p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Thời gian</span>
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 16 17" fill="none">
                    <path d="M8.00065 15.0413C11.6825 15.0413 14.6673 12.0566 14.6673 8.37467C14.6673 4.69278 11.6825 1.70801 8.00065 1.70801C4.31875 1.70801 1.33398 4.69278 1.33398 8.37467C1.33398 12.0566 4.31875 15.0413 8.00065 15.0413Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4.375V8.375L10.6667 9.70833" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-white">8 tuần</div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-[10px] hover:shadow-lg transition-shadow flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none">
                <path d="M18.25 12.875V16.2083C18.25 16.6504 18.0744 17.0743 17.7618 17.3868C17.4493 17.6994 17.0254 17.875 16.5833 17.875H4.91667C4.47464 17.875 4.05072 17.6994 3.73816 17.3868C3.42559 17.0743 3.25 16.6504 3.25 16.2083V12.875" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.58398 8.70801L10.7507 12.8747L14.9173 8.70801" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.75 12.875V2.875" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Tải xuống PDF</span>
            </button>
            
            <button className="px-6 py-3 bg-gray-800 border border-gray-600 text-white font-medium rounded-[10px] hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none">
                <path d="M15.25 7.04199C16.6307 7.04199 17.75 5.9227 17.75 4.54199C17.75 3.16128 16.6307 2.04199 15.25 2.04199C13.8693 2.04199 12.75 3.16128 12.75 4.54199C12.75 5.9227 13.8693 7.04199 15.25 7.04199Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.25 12.875C6.63071 12.875 7.75 11.7557 7.75 10.375C7.75 8.99429 6.63071 7.875 5.25 7.875C3.86929 7.875 2.75 8.99429 2.75 10.375C2.75 11.7557 3.86929 12.875 5.25 12.875Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.25 18.708C16.6307 18.708 17.75 17.5887 17.75 16.208C17.75 14.8273 16.6307 13.708 15.25 13.708C13.8693 13.708 12.75 14.8273 12.75 16.208C12.75 17.5887 13.8693 18.708 15.25 18.708Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.4082 11.6328L13.0999 14.9495" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.0915 5.79883L7.4082 9.11549" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Chia sẻ</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
