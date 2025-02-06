import React, { useState } from 'react';
import iconemap from '@/assets/map-pin.svg';
import deleteIcon from '@/assets/deleteicone.svg';
import editIcon from '@/assets/update.svg';

interface MyComponentProps {
  imageSrc: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ imageSrc }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteEvent = () => {
    setIsDeleted(true);
  };

  const handleEdit = () => {
    console.log("Modification de l'événement");
    alert("Modifier l'événement !");
  };

  if (isDeleted) return null;

  return (
    <div className="flex items-center  p-4 rounded-xl shadow-lg w-[500px] h-[84px] relative">
      {/* Image dynamique */}
      <img
        src={imageSrc}
        alt="Event"
        className="w-[99px] h-[82px] object-cover rounded-xl"
      />

      {/* Texte */}
      <div className="ml-4 flex flex-col justify-between flex-grow">
        <span className="text-white text-sm font-normal">Thu, Apr 19 · 20:00 PM</span>
        <span className="text-white text-lg font-bold">Visite</span>
        <div className="flex items-center text-white text-sm mt-1">
          <img src={iconemap} alt="Location" className="w-4 h-4 mr-1" />
          <span>Paris</span>
        </div>
      </div>

      {/* Icônes */}
      <div className="flex space-x-3 absolute right-4 top-1/2 transform -translate-y-1/2">
        <img
          src={editIcon}
          alt="Edit"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
          onClick={handleEdit}
        />
        <img
          src={deleteIcon}
          alt="Delete"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
          onClick={deleteEvent}
        />
      </div>
    </div>
  );
};

export default MyComponent;