import EventsCarousel2 from "@/components/ui/event-carossel2";



const HomePage = () => {
  return (
    <div className="flex flex-1 rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% ">
      <div className="flex-1 flex flex-col items-center justify-center">
        <EventsCarousel2 />
      </div>
    </div>
  );
};

export default HomePage;
