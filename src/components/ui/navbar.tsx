import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, LayoutDashboard, Menu, User, Plus } from "lucide-react";

export default function Navbar() {
  const [userRole, setUserRole] = useState<string | null>(null);

  // Vérifier l'état de connexion et récupérer le rôle de l'utilisateur
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserRole(user.role); // Stocke le rôle de l'utilisateur (participant ou organisateur)
    } else {
      setUserRole(null); // Aucun utilisateur connecté
    }
  }, []);

  return (
    <nav className="rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% flex flex-col gap-6 items-center px-2 py-2">
      {/* Lien accessible à tous */}
      <Link to="/" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
        <Home className="w-6 h-6" />
      </Link>

      {/* Lien Menu → Seulement pour les non connectés et les participants */}
      {(!userRole || userRole === "participant") && (
        <Link to="/event-list" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </Link>
      )}

      {/* Si l'utilisateur est connecté */}
      {userRole && (
        <>
          {/* Dashboard → Affiché pour "participant" et "organisateur" */}
          <Link to="/myEvent" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <LayoutDashboard className="w-6 h-6" />
          </Link>

          {/* Profil → Affiché pour "participant" et "organisateur" */}
          <Link to="/profile" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <User className="w-6 h-6" />
          </Link>

          {/* "Plus" → Seulement pour les organisateurs */}
          {userRole === "organisateur" && (
            <Link to="/add-event" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Plus className="w-6 h-6" />
            </Link>
          )}
        </>
      )}
    </nav>
  );
}
