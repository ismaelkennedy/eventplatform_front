import React from 'react';
import myImage from '@/assets/image.png'; // Image principale
import mailIcon from '@/assets/mail.svg'; // Icône de mail

const MyComponent: React.FC = () => {
  return (
    <div className="flex" style={{ width: '500px', height: '84px', position: 'relative' }}>
      {/* Image à gauche */}
      <img
        src={myImage}
        alt="Image à gauche"
        style={{ width: '99px', height: '82px' }}
        className="object-cover rounded-xl"
      />

      {/* Texte à côté de l'image */}
      <div className="ml-4 relative">
        {/* Titre avec police Inter 12px Regular */}
        <div className="text-white text-sm font-normal" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
          Thu, Apr 19 · 20:00 PM
        </div>

        {/* Username avec police Inter 16px Bold */}
        <div className="text-white text-lg font-bold" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}>
          JohnDoe
        </div>

        {/* Email avec icône et police Inter 14px Regular */}
        <div className="flex items-center mt-2">
          <img src={mailIcon} alt="Mail" className="mr-2" width="14" height="14" />
          <div className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            johndoe@example.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
