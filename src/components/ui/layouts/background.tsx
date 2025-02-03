import { ArrowLeft } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"

export function BgLayout() {
  const navigate = useNavigate()

  const handleBack = () =>{
    navigate(-1)
  }

  return (
    <div className="rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% flex-1">
      <button onClick={handleBack} className="p-4 left-4 top-4 rounded-full hover:bg-white/10 transition-colors">
        <ArrowLeft className="h-6 w-6 text-white" />
      </button>
      <main><Outlet/></main>
    </div>
  )
}
