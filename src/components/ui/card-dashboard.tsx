import React, { useState } from 'react';
import iconemap from '@/assets/map-pin.svg'; // Icône de localisation
import deleteIcon from '@/assets/deleteicone.svg'; // Icône de suppression
import editIcon from '@/assets/update.svg'; // Icône de modification

// Ajouter une prop `imageSrc` pour l'image dynamique
interface MyComponentProps {
  imageSrc: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ imageSrc }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  // Fonction pour supprimer l'événement
  const deleteEvent = () => {
    setIsDeleted(true);
  };

  // Fonction pour modifier l'événement
  const handleEdit = () => {
    console.log("Modification de l'événement");
    alert("Modifier l'événement !");
  };

  // Si l'événement est supprimé, on ne l'affiche plus
  if (isDeleted) return null;

  return (
    <div className="flex" style={{ width: '500px', height: '84px', position: 'relative' }}>
      {/* Image dynamique à gauche */}
      <img
        src={imageSrc} // Utilisation de la prop imageSrc
        alt="Image à gauche"
        style={{ width: '99px', height: '82px' }}
        className="object-cover rounded-xl"
      />

      {/* Texte à côté de l'image */}
      <div className="ml-4 relative">
        <div className="text-white text-sm font-regular" style={{ fontFamily: 'Inter, sans-serif' }}>
          Thu, Apr 19 · 20:00 PM
        </div>
        <div className="text-white text-lg font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>
          Visite
        </div>
        <div className="flex items-center absolute">
          <img src={iconemap} alt="Icône" className="mr-1" width="14" height="14" />
          <div className="text-white font-regular" style={{ fontFamily: 'Inter, sans-serif' }}>
            Paris
          </div>
        </div>
      </div>

      {/* Icônes de suppression et de modification à droite */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-3">
        {/* Icône de modification */}
        <img
          src={editIcon}
          alt="Modifier"
          width="20"
          height="20"
          className="cursor-pointer"
          onClick={handleEdit}
        />

        {/* Icône de suppression */}
        <img
          src={deleteIcon}
          alt="Supprimer"
          width="20"
          height="20"
          className="cursor-pointer"
          onClick={deleteEvent}
        />
      </div>
    </div>
  );
};

export default MyComponent;
