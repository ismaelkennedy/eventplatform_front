import { Link } from "react-router-dom";

interface EventCardProps {
  id: number;
  date: {
    day: string;
    month: string;
  };
  title: string;
  type: string;
  image: string;
}

const EventCard = ({ id, date, title, type, image }: EventCardProps) => {
  return (
    <Link to={`/event/${id}`} className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Date badge */}
      <div className="absolute top-4 right-4 bg-white/90 rounded-xl p-2 text-center min-w-[60px]">
        <span className="block text-gray-600 text-sm">{date.month}</span>
        <span className="block text-black font-bold text-xl">{date.day}</span>
      </div>

      {/* Event info */}
      <div className="absolute bottom-0 left-0 p-6">
        <span className="text-gray-300 text-sm uppercase tracking-wider">{type}</span>
        <h3 className="text-white text-2xl font-bold mt-2">{title}</h3>
      </div>
    </Link>
  );
};

export default EventCard;
