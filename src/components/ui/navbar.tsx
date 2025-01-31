import { Home, LayoutDashboard, Menu, User, HandMetal } from "lucide-react"

export default function Navbar() {
  return (
    <nav className=" rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% flex flex-col gap-6 items-center px-2 py-2">
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <Home className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <LayoutDashboard className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <User className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <HandMetal className="w-6 h-6" />
        </button>
    </nav>

  )
}