import Header from "@/components/ui/header"


const HomePage = () => {
  return (
    <>
        <Header/>
        <div className="bg-gradient-to-b from-[#12111199] to-black">
            <div className="bg-[url(src/assets/tiakola-foreztival.jpg.webp)] h-auto">
                <h1 className="text-white">Explorez des 
                événements, vivez des moments...</h1>
            </div>
        </div>
    </>
  );
};

export default HomePage;
