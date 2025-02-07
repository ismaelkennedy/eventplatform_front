"use client";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value); // Appelle la fonction passée en prop
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full px-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          value={query}
          onChange={handleSearch}
          placeholder="Rechercher"
          className="w-full h-12 pl-10 pr-4 rounded-full bg-[#1a1a1a] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
    </div>
  );
}
