import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import { Label } from "./label";
import Bouton from "@/components/ui/bouton";
import api from "@/api/axiosConfig"; // Import de l'instance Axios
import { useNavigate } from "react-router-dom"; // Pour la redirection

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Stocker les erreurs
  const navigate = useNavigate(); // Hook pour rediriger après connexion

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Réinitialiser l'erreur

    try {
      const response = await api.post("/login", { email, password });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Stocker le token
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Stocker les infos utilisateur

        console.log("Connexion réussie :", response.data);
        alert("Connexion réussie !");
        navigate("/dashboard"); // Redirection après connexion
      }
    } catch (error: any) {
      console.error("Erreur de connexion :", error);
      setError(error.response?.data?.message || "Erreur de connexion !");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm mx-auto">
      {error && <p className="text-red-500 text-center">{error}</p>} {/* Affichage de l'erreur */}

      <Label htmlFor="email">Mail</Label>
      <Input type="email" placeholder="johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <Label htmlFor="password">Mot de passe</Label>
      <PasswordInput type="password" placeholder="Entrer votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <div className="w-full flex justify-center mt-6">
        <Bouton label="Se connecter" />
      </div>
    </form>
  );
};

export default LoginForm;
