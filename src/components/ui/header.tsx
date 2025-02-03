import React from "react";
import logo from "@/assets/Group 17.svg"; // Assurez-vous du bon chemin
import SearchBar from "@/components/ui/search";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="pb-5 flex items-center justify-between w-full shadow-md">
      {/* Logo */}
      <img src={logo} alt="MirEnvent Logo" className="" />

      {/* Barre de recherche */}
      <SearchBar />

      {/* Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
