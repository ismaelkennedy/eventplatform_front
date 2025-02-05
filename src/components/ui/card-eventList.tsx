import React, { useState } from 'react';
import myImage from '@/assets/tiakola-foreztival.jpg.webp'; // Image principale
import iconemap from '@/assets/map-pin.svg'; // Icône de localisation
import heartFilled from '@/assets/heartFilled.svg'; // Icône cœur rempli
import heartEmpty from '@/assets/heartEmpty.svg'; // Icône cœur vide


const MyComponent: React.FC = () => {
  // État pour savoir si l'élément est en favori ou non
  const [isFavorited, setIsFavorited] = useState(false);

  // Fonction pour basculer entre favori et non favori
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  

  return (
    <div className="flex " style={{ width: '500px', height: '84px', position: 'relative' }}>
      {/* Image à gauche */}
      <img
        src={myImage}
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

      {/* Icônes à droite : Cœur + Partage */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-3">
        {/* Icône du cœur (favori) */}
        <img
          src={isFavorited ? heartFilled : heartEmpty}
          alt="Favori"
          width="20"
          height="20"
          className="cursor-pointer"
          onClick={toggleFavorite}
        />

        
      </div>
    </div>
  );
};

export default MyComponent;