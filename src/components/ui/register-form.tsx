import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Assurez-vous du chemin correct
import { PasswordInput } from "./password-input";
import { Label } from "./label";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire (par exemple, appel API)
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 w-full max-w-sm mx-auto"
    >
      {/* Champ Username */}
      <Label htmlFor="username">Nom d'utilisateur</Label>
      <Input 
        type="text"
        id="username"
        placeholder="johndoe"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      {/* Champ Email */}
      <Label htmlFor="email">Email</Label>
      <Input 
        type="email"
        id="email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Champ Mot de passe */}
      <Label htmlFor="password">Mot de passe</Label>
      <PasswordInput
        type="password"
        id="password"
        placeholder="Entrer un mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6"
        required
      />

      <Label htmlFor="password">Mot de passe</Label>
      <PasswordInput
        type="password"
        placeholder="Confirmer votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6"
        required
      />
    </form>
  );
};

export default RegisterForm;
