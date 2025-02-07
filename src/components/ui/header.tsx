import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LogOut } from "lucide-react"
import logo from "@/assets/Group 17.svg"
import SearchBar from "@/components/ui/search"

const Header = () => {
  const [user, setUser] = useState<{ username: string } | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  }

  return (
    <header className="pb-5 flex items-center justify-between w-full shadow-md">
      
      <Link to="/">
        <img src={logo || "/placeholder.svg"} alt="MirEnvent Logo" />
      </Link>

      
      <SearchBar />

      
      {user ? (
        
        <div className="flex items-center space-x-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-5 py-2 text-2xl">
            {user.username.charAt(0).toUpperCase()}
          </span>
          <button
            onClick={handleLogout}
            className="text-white hover:text-red-600 transition-colors"
            aria-label="Se déconnecter"
          >
            <LogOut size={20} />
          </button>
        </div>
      ) : (
       
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:underline">
            Se connecter
          </Link>
          <Link
            to="/register"
            className="mt-4 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            S'inscrire
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header