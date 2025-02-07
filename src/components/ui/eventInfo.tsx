interface EventInfoProps {
    startTime: string
    description: string
  }
  
  const EventInfo = ({ startTime, description }: EventInfoProps) => {
    
    return (
      <div className="space-y-8">
        <p className="text-gray-300 mt-2">Commence à <span className="text-blue-400">{startTime}</span></p>
  
        <div className="space-y-4 text-gray-300">
          {description.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
  
        
      </div>
    )
  }
  
  export default EventInfo