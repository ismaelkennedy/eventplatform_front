import HeroBanner from "@/components/ui/hero-banner";


const HomePageOrga = () => {
  return (
    <div className="flex flex-1 rounded-md bg-gradient-to-b from-[#121111] from-60% to-black to-100%">
      <div className="mx-40 my-4 flex flex-col items-center justify-center flex-1">
        <HeroBanner />
      </div>
    </div>
  );
};

export default HomePageOrga;
