import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import { Label } from "./label";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [receiveNewsletter, setReceiveNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire (par exemple, appel API)
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Accept Terms:", acceptTerms);
    console.log("Receive Newsletter:", receiveNewsletter);
  };

  const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.checked);
      if (e.target.checked) {
        // Si cette case est cochée, on désactive l'autre
        if (setter === setAcceptTerms) {
          setReceiveNewsletter(false);
        } else {
          setAcceptTerms(false);
        }
      }
    };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 w-full max-w-sm mx-auto"
    >
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

      <Checkbox
        label="J'accepte les conditions d'utilisation"
        checked={acceptTerms}
        onChange={handleCheckboxChange(setAcceptTerms)}
        disabled={receiveNewsletter}
      />

      <Checkbox
        label="Je souhaite recevoir la newsletter"
        checked={receiveNewsletter}
        onChange={handleCheckboxChange(setReceiveNewsletter)}
        disabled={acceptTerms}
      />
    </form>
  );
};

export default RegisterForm;