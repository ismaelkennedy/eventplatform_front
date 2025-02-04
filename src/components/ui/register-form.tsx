import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import { Label } from "./label";
import Bouton from "@/components/ui/bouton";
import api from "@/api/axiosConfig"; // Import de l'instance Axios
import { useNavigate } from "react-router-dom"; // Pour la redirection

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // Ajout du rôle
  const navigate = useNavigate(); // Hook pour rediriger après inscription

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const response = await api.post("/register", {
        username,
        email,
        password,
        password_confirmation: confirmPassword, // Laravel demande `password_confirmation`
        role,
      });

      console.log("Inscription réussie :", response.data);
      alert("Inscription réussie !");
      navigate("/login"); // Redirection après inscription
    } catch (error) {
      console.error("Erreur d'inscription :", error);
      alert("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm mx-auto">
      <Label htmlFor="username">Nom d'utilisateur</Label>
      <Input type="text" id="username" placeholder="johndoe" value={username} onChange={(e) => setUsername(e.target.value)} required />

      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <Label htmlFor="password">Mot de passe</Label>
      <PasswordInput id="password" placeholder="Entrer un mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
      <PasswordInput id="confirmPassword" placeholder="Confirmer votre mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

      {/* Ajout des Checkbox pour le Rôle */}
      <div className="flex flex-col">
        <Label>Choisissez un rôle :</Label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input type="radio" name="role" value="participant" onChange={(e) => setRole(e.target.value)} required /> Participant
          </label>
          <label className="flex items-center">
            <input type="radio" name="role" value="organisateur" onChange={(e) => setRole(e.target.value)} required /> Organisateur
          </label>
        </div>
      </div>

      {/* Bouton d'inscription */}
      <div className="w-full flex justify-center mt-6">
        <Bouton label="S'inscrire" />
      </div>
    </form>
  );
};

export default RegisterForm;
