import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Assurez-vous du chemin correct
import { PasswordInput } from "./password-input";
import { Label } from "./label";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire (par exemple, appel API)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 w-full max-w-sm mx-auto"
    >
  
      <Label htmlFor="email">Mail</Label>
      <Input 
        type="email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=""
        required
      />
  
      <Label htmlFor="password">Mot de passe</Label>
      <PasswordInput
        type="password"
        placeholder="Entrer votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6"
        required
      />

    </form>
  );
};

export default LoginForm;
