

interface EventHeaderProps {
  image: string
  type: string
  title: string
  date: {
    day: string
    month: string
  }
  location:string
}

const EventHeader = ({ image, type, title, date ,location}: EventHeaderProps) => {
  return (
    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 flex items-start p-4">
          <div className="w-1/2">
          
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="bg-white/75 rounded-xl p-2 text-center min-w-[60px]">
              <span className="block text-gray-600 text-sm">{date.month}</span>
              <span className="block text-black font-bold text-xl">{date.day}</span>
            </div>
          </div>
        </div>

        <div className="p-6 flex">
          <div className="w-1/2">
            <span className="text-gray-300 text-sm uppercase tracking-wider">{type}</span>
            <h1 className="text-white text-3xl font-bold mt-2">{title}</h1>
            <h1 className="text-gray-500 text-xl font-extralight">{location}</h1>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default EventHeader

