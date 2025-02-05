import MirEventLogo from '../../assets/tiakola-foreztival.jpg.webp'; // Chemin correct
import YourIcon from '../../assets/tiakola-foreztival.jpg.webp'; // Ton icône image classique

const CustomRectangle = () => {
  return (
    <div className="relative w-[420.6px] h-[96.7px] border border-gray-400 rounded-lg flex  justify-between p-2 bg-transparent shadow-md">

      <div className="flex items-center space-x-1 absolute ">
        <img src={YourIcon} alt="Icône" className="mr-1" width="31" height="31" />

        
        <div className="flex flex-col space-y-1">
          
          <h2 
            className="text-lg font-semibold text-white" 
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', fontSize: '16px', lineHeight: '24px' }}
          >
            Visite culturelle
          </h2>

          
          <p 
            className="text-sm text-white" 
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal', fontSize: '12px', lineHeight: '16px' }}
          >
            Mon, Apr 18 · 21:00 PM
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-[141.6px] h-[96.7px] border-l border-gray-300">
        <img 
          src={MirEventLogo} 
          alt="Logo Mir Event"
          className="w-full h-full object-cover rounded-r-lg opacity-50"
        />
      </div>

      
      <div className="absolute  bottom-0">
        <p className="text-sm text-white text-center" 
           style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal', fontSize: '12px' }}>
          Vous êtes inscrit.
        </p>
      </div>
    </div>
  );
};

export default CustomRectangle;