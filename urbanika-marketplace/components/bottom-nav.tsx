import { Search, ShoppingCart, Home, FileText, User } from "lucide-react"

interface BottomNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: "search", icon: Search, label: "Search" },
    { id: "cart", icon: ShoppingCart, label: "Cart" },
    { id: "home", icon: Home, label: "Home" },
    { id: "documents", icon: FileText, label: "Docs" },
    { id: "profile", icon: User, label: "Profile" },
  ]

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-t">
      {tabs.map((tab) => {
        const Icon = tab.icon
        return (
          <button
            key={tab.id}
            className={`flex flex-col items-center justify-center p-2 ${
              activeTab === tab.id ? "text-[#3EB57F]" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.id === "home" && activeTab === "home" ? (
              <div className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4BCC91" />
                  <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="#3EB57F" />
                </svg>
              </div>
            ) : (
              <Icon className="h-6 w-6" />
            )}
          </button>
        )
      })}
    </div>
  )
}

