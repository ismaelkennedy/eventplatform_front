import React from 'react'

interface BoutonProps {
  label: string;
  onClick?: () => void; 
  disabled?: boolean; 
}

export default function Bouton({ label, onClick, disabled }: BoutonProps) {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick} 
        disabled={disabled} 
        className="mt-4 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
      >
        {label}
      </button>
    </div>
  );
}

