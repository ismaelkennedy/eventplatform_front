import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, LayoutDashboard, Menu, User, Plus } from "lucide-react";

export default function Navbar() {
  const [userRole, setUserRole] = useState<string | null>(null);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserRole(user.role); 
    } else {
      setUserRole(null); 
    }
  }, []);

  return (
    <nav className="rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% flex flex-col gap-6 items-center px-2 py-2">
      
      <Link to={userRole === "organisateur" ? "/home-orga" : "/"} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
        <Home className="w-6 h-6" />
      </Link>

      
      {(!userRole || userRole === "participant") && (
        <Link to="/event-list" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </Link>
      )}
      {(userRole ) && (
        <Link to={userRole === "organisateur" ? "/myEvent" : "/eventRegister"} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <LayoutDashboard className="w-6 h-6" />
        </Link>
      )}

      
      {userRole && (
        <>
          

         
          <Link to="/update" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <User className="w-6 h-6" />
          </Link>

          
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