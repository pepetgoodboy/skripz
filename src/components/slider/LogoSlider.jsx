import Marquee from "react-fast-marquee";
import IPB from "../../assets/logo-ipb.png";
import Makerindo from "../../assets/logo-makerindo.png";
import Piksi from "../../assets/logo-piksi.png";

export default function LogoSlider({ title }) {
  const Logos = [IPB, Makerindo, Piksi, IPB, Makerindo, Piksi];

  return (
    <div className="relative px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-8 sm:py-10 md:py-16 xl:py-24">
      <div
        className="flex flex-col gap-6 sm:gap-10 md:gap-16 xl:gap-20 w-full max-w-[240px] sm:max-w-sm md:max-w-md xl:max-w-lg mx-auto relative"
        data-aos="fade-up"
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-gray-700 font-semibold text-center">
          {title}
        </h3>

        <div className="absolute top-0 bottom-0 -left-1 w-10 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 -right-1 w-10 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div data-aos="fade-left">
          <Marquee gradient={false} speed={50}>
            {Logos.map((logo, index) => (
              <img
                key={index + 1}
                src={logo}
                alt={`logo-${index + 1}`}
                className="w-10 sm:w-12 md:w-16 xl:w-20 h-auto mx-4 sm:mx-6 md:mx-10 xl:mx-14"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
