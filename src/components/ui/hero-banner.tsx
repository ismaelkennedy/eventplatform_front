const HeroBanner = () => {
    return (
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('src/assets/Rectangle 17.svg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative h-full flex items-center px-8">
          <p className=" md:text-5xl lg:text-6xl text-white font-normal">
            Explorez des <span className="text-blue-400">événements</span>,
            <br />
            vivez des moments...
          </p>
        </div>
      </div>
    )
  }
  
  export default HeroBanner