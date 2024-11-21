import BazarioHeroImg from "../../assets/BazarioHero.webp";
const Hero = () => {
  return (
    <div>
      <div className="w-full relative">
        <img
          className="w-3/4 mx-auto h-96 object-cover contrast-125 brightness-100"
          src={BazarioHeroImg}
          alt="picture of Bazaar online"
        />
        <div className="bg-slate-400 w-full h-96 bg-transparent absolute top-0 left-0">
          <section className="-rotate-45 absolute ml-16 mt-32">
            <h2 className="text-3xl">BUY WITH US</h2>
            <h2 className="text-center">BE HAPPY</h2>
          </section>
          <section className="-rotate-45 absolute ml-60 mt-32">
            <h2 className="text-3xl">20% OFF</h2>
            <h2 className="text-center">ALL PRODUCTS</h2>
          </section>
          <section className="absolute -rotate-45 ml-[65rem] mt-32">
            <h2 className="text-3xl">FAST DELIVERY</h2>
            <h2 className="mt-2">THOUSANDS OF PEOPLE USE BAZARIO</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
