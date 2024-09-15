import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

function Hero() {
  return (
    <section
      id="home"
      className="w-full p-2 gap-10 min-h-screen flex xl:flex-row flex-col max-container justify-center"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-monstserrat text-red-500">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-7xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-500 inline-block mt-3">Nike </span>Shoes
        </h1>
        <p className="font-montserrat text-stone-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-planquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7  text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img src={bigShoe1} alt="shoe collection" width="650" />
      </div>
    </section>
  );
}

export default Hero;
