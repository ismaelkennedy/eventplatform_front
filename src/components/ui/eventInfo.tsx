interface EventInfoProps {
    startTime: string
    description: string
  }
  
  const EventInfo = ({ startTime, description }: EventInfoProps) => {
    return (
      <div className="space-y-8">
        <p className="text-gray-400">Commence à {startTime}</p>
  
        <div className="space-y-4 text-gray-300">
          {description.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
  
        <div>
          <h2 className="text-white text-lg font-medium mb-4">LOCALISATION</h2>
          <div className="w-full h-[200px] rounded-xl overflow-hidden bg-[#1C1C1C]">
            {/* Intégrez ici votre carte préférée (Google Maps, Mapbox, etc.) */}
          </div>
        </div>
      </div>
    )
  }
  
  export default EventInfo