import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/Group 17.svg"; // Assurez-vous du bon chemin
import SearchBar from "@/components/ui/search";

const Header = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);

  // Vérifier si un utilisateur est connecté
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="pb-5 flex items-center justify-between w-full shadow-md">
   {/* Logo */}
    <img src={logo} alt="MirEnvent Logo" className="" />

      {/* Barre de recherche */}
      <SearchBar />

      {/* Affichage dynamique en fonction de l'état de connexion */}
      {user ? (
        // Si connecté : Afficher le nom d'utilisateur + menu déroulant
        <div className="relative">
            <span className="bg-gray-500 text-white rounded-full px-2 py-1 text-sm">
              {user.username.charAt(0).toUpperCase()}
             
            </span>
            
        
          
        </div>
      ) : (
        // Si NON connecté : Afficher les liens "Se connecter" et "S'inscrire"
        <div className="space-x-4">
          <Link to="/login" className="text-blue-600 hover:underline">
            Se connecter
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            S'inscrire
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

