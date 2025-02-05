import MirEventLogo from '../../assets/tiakola-foreztival.jpg.webp'; // Chemin correct
import { Ticket, Trash2, Edit, Users } from 'lucide-react'; // Import des icônes


const CustomRectangle = ({ onDelete, onEdit, onViewParticipants }) => {
  return (
    <div className="relative w-[420.6px] h-[96.7px] rounded-lg flex justify-between p-2 bg-transparent shadow-md">
      
      {/* Partie gauche avec l'icône et le texte */}
      <div className="flex items-center space-x-1 absolute">
        <Ticket className="mr-1 text-[#439DFE] rotate-90 " width="50" height="50" />
        
        <div className="flex flex-col space-y-1">
          <h2 className="text-lg font-semibold text-white" 
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', fontSize: '16px', lineHeight: '24px' }}>
            Visite culturelle
          </h2>
          <p className="text-sm text-white" 
             style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal', fontSize: '12px', lineHeight: '16px' }}>
            Mon, Apr 18 · 21:00 PM
          </p>
        </div>
      </div>

      {/* Partie droite avec le logo et le bouton de suppression */}
      <div className="absolute right-0 top-0 flex items-center space-x-2">
        {/* Logo de l'événement */}
        <div className="w-[141.6px] h-[96.7px] ">
          <img 
            src={MirEventLogo} 
            alt="Logo Mir Event"
            className="w-full h-full object-cover rounded-r-lg opacity-50"
          />
        </div>

        {/* Bouton de suppression */}
        <button 
          onClick={onDelete} 
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 size={20} />
        </button>
        <button onClick={onViewParticipants} className="text-green-500 hover:text-green-700 transition-colors">
          <Users size={20} />
        </button>
        <button onClick={onEdit} className="text-blue-500 hover:text-blue-700 transition-colors">
          <Edit size={20} />
        </button>
      </div>

      {/* Texte d'inscription */}
      <div className="absolute bottom-0">
        <p className="text-sm text-white text-center" 
           style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal', fontSize: '12px' }}>
          Vous êtes inscrit.
        </p>
      </div>
    </div>
  );
};

export default CustomRectangle;
