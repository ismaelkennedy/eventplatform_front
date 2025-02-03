"use client"
import EventCard from "./card"

const events = [
  {
    date: { day: "17", month: "Mars" },
    title: "Jinjer",
    type: "CONCERT",
    image: "src/assets/tiakola-foreztival.jpg.webp",
  },
  {
    date: { day: "20", month: "Mars" },
    title: "Fire Show",
    type: "SHOW",
    image: "src/assets/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space.jpg",
  },
  {
    date: { day: "28", month: "Mars" },
    title: "Fire Show",
    type: "SHOW",
    image: "src/assets/desktop-wallpaper-moon-pc-and-mac.jpg",
  },
]

const EventsCarousel = () => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mb-6">À venir</h2>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default EventsCarousel

