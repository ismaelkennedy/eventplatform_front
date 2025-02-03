import EventHeader from "@/components/ui/eventDetail"
import EventInfo from "@/components/ui/eventInfo"
import eventImage from "@/assets/tiakola-foreztival.jpg.webp";
// import Backbuttton from "@/components/ui/back-buttton";


export default function EventPage() {
  
  const eventData = {
    image: eventImage,
    type: "CONCERT",
    title: "Jinjer",
    date: {
      day: "20",
      month: "Mars",
    },
    startTime: "21:30",
    description: `Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.

    Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.

    Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.`,
  }

  return (
    
    <div className="rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% flex-1">
      
      <div className="mx-40 my-4 flex flex-col items-center justify-center">
         
        <EventHeader {...eventData} />
        <EventInfo startTime={eventData.startTime} description={eventData.description} />
      </div>
    </div>
  )
}

