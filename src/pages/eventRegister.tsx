import EventRegister from "@/components/ui/eventRegister";



const HomePage = () => {
  return (
    <div className="flex flex-1 rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100% ">
      <div className="mx-40 my-4 flex flex-col items-center justify-center">
        <EventRegister/>
      </div>
    </div>
  );
};

export default HomePage;