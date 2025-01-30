"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Rechercher"
          className="w-full h-12 pl-10 pr-4 rounded-full bg-[#1a1a1a] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
    </div>
  );
}