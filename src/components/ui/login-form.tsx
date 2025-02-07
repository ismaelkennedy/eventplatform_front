import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "./password-input"
import { Label } from "./label"
import Bouton from "@/components/ui/bouton"
import api from "@/api/axiosConfig"
import { useNavigate, Link } from "react-router-dom"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
  
    try {
      const response = await api.post("/login", { email, password })
  
      if (response.data.success) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        
        // Récupère le rôle de l'utilisateur
        const userRole = response.data.user.role
  
        // Redirige en fonction du rôle de l'utilisateur
        if (userRole === "organisateur") {
          navigate("/home-orga")
        } else {
          navigate("/")
        }
      }
    } catch (error: any) {
      console.error("Erreur de connexion :", error)
      setError(error.response?.data?.message || "Erreur de connexion !")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm mx-auto">
      {error && <p className="text-red-500 text-center">{error}</p>}

      <Label htmlFor="email">Mail</Label>
      <Input
        type="email"
        id="email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Label htmlFor="password">Mot de passe</Label>
      <PasswordInput
        id="password"
        type="password"
        placeholder="Entrer votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="flex justify-between items-center text-sm">
        <Link to="/register" className="text-blue-500 hover:underline">
          Pas de compte ? S'inscrire
        </Link>
        
      </div>

      <div className="w-full flex justify-center mt-6">
        <Bouton label="Se connecter" />
      </div>
    </form>
  )
}

export default LoginForm

