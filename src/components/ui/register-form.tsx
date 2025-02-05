import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "./password-input"
import { Label } from "./label"
import Bouton from "@/components/ui/bouton"
import api from "@/api/axiosConfig"
import { useNavigate, Link } from "react-router-dom"

const RegisterForm = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas !")
      return
    }

    try {
      const response = await api.post("/register", {
        username,
        email,
        password,
        password_confirmation: confirmPassword,
        role,
      })

      console.log("Inscription réussie :", response.data)
      navigate("/login")
    } catch (error: any) {
      console.error("Erreur d'inscription :", error)
      setError(error.response?.data?.message || "Une erreur est survenue lors de l'inscription.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm mx-auto">
      {error && <p className="text-red-500 text-center">{error}</p>}

      <Label htmlFor="username">Nom d'utilisateur</Label>
      <Input
        type="text"
        id="username"
        placeholder="johndoe"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <Label htmlFor="email">Email</Label>
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
        placeholder="Entrer un mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
      <PasswordInput
        id="confirmPassword"
        placeholder="Confirmer votre mot de passe"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <div className="flex flex-col">
        <Label>Choisissez un rôle :</Label>
        <div className="flex space-x-4">
          <label className="flex items-center text-[#7C7C7C] font-extralight">
            <input type="radio" name="role" value="participant" onChange={(e) => setRole(e.target.value)} required />
            Participant
          </label>
          <label className="flex items-center text-[#7C7C7C] font-extralight p-2">
            <input type="radio" name="role" value="organisateur" onChange={(e) => setRole(e.target.value)} required />
            Organisateur
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <Link to="/login" className="text-blue-500 hover:underline">
          Déjà un compte ? Se connecter
        </Link>
      </div>

      <div className="w-full flex justify-center mt-6">
        <Bouton label="S'inscrire" />
      </div>
    </form>
  )
}

export default RegisterForm

