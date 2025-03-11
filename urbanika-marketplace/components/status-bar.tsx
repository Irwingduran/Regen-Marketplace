export function StatusBar() {
  // Get current time
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return (
    <div className="bg-gray-50 px-4 py-1 flex items-center justify-between text-xs text-gray-800">
      <span>{time}</span>
      <div className="flex items-center space-x-1">
        <div className="flex items-end space-x-0.5">
          <div className="w-0.5 h-1.5 bg-gray-800 rounded-t"></div>
          <div className="w-0.5 h-2 bg-gray-800 rounded-t"></div>
          <div className="w-0.5 h-2.5 bg-gray-800 rounded-t"></div>
          <div className="w-0.5 h-3 bg-gray-800 rounded-t"></div>
        </div>
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 9L12 2L23 9V20C23 20.5304 22.7893 21.0391 22.4142 21.4142C22.0391 21.7893 21.5304 22 21 22H3C2.46957 22 1.96086 21.7893 1.58579 21.4142C1.21071 21.0391 1 20.5304 1 20V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg className="h-3 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M7 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M11 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

