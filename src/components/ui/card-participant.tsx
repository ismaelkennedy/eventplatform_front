import React from 'react';
import myImage from '@/assets/image.png'; // Image principale
import mailIcon from '@/assets/mail.svg'; // Icône de mail

const MyComponent: React.FC = () => {
  return (
    <div className="flex w-[500px] h-[84px] relative">
      {/* Image à gauche */}
      <img
        src={myImage}
        alt="Image à gauche"
        className="w-[99px] h-[82px] object-cover rounded-xl"
      />

      {/* Texte à côté de l'image */}
      <div className="ml-4 relative">
        {/* Titre avec police Inter 12px Regular */}
        <div className="text-white text-sm font-normal font-inter">
          Thu, Apr 19 · 20:00 PM
        </div>

        {/* Username avec police Inter 16px Bold */}
        <div className="text-white text-lg font-bold font-inter">
          JohnDoe
        </div>

        {/* Email avec icône et police Inter 14px Regular */}
        <div className="flex items-center mt-2">
          <img src={mailIcon} alt="Mail" className="mr-2 w-4 h-4" />
          <div className="text-white text-base font-normal font-inter">
            johndoe@example.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
