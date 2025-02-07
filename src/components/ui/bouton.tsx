import React from 'react'

interface BoutonProps {
  label: string;
  onClick?: () => void; // La fonction onClick est optionnelle
  disabled?: boolean; // disabled est aussi optionnel
}

export default function Bouton({ label, onClick, disabled }: BoutonProps) {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick} // Associe la fonction onClick
        disabled={disabled} // Désactive le bouton si disabled est true
        className="mt-4 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
      >
        {label}
      </button>
    </div>
  );
}

