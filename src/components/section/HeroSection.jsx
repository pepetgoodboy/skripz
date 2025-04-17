import Hero from "../../assets/hero1.png";
import LogoSlider from "../slider/LogoSlider";
import TypewriterComponent from "typewriter-effect";

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-8 space-y-8">
      <div
        className="bg-[#DDF3FE] w-full h-auto rounded-[10px] p-8 2xl:p-16 3xl:p-20"
        data-aos="fade-up"
      >
        <div className="w-full max-w-[360px] sm:max-w-[440px] mx-auto md:max-w-none flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-14 md:items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4 xl:gap-10">
            <h2 className="text-xl lg:text-2xl xl:text-[32px] 2xl:text-[40px] text-center md:text-start">
              <TypewriterComponent
                options={{
                  strings: [
                    '<span style="color: #001688;">"One Step Closer to <span style="font-weight: 600;">Success</span>"</span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-gray-700 md:text-lg xl:text-xl 2xl:text-2xl text-justify">
              <span className="font-semibold text-[#001688]">Skrip</span>
              <span className="font-semibold text-[#48C1E5]">Z</span> adalah
              platform terintegrasi dengan fitur pemantauan real-time,
              komunikasi langsung, dan penyimpanan dokumen yang aman. Kelola
              skripsi dengan mudah dan transparan melalui SkripZ!
            </p>
            <button className="w-fit bg-[#001688] hover:bg-[#2E7BC7] cursor-pointer transition-all duration-200 ease-in-out text-white py-2 xl:py-3 2xl:py-4 px-8 rounded-[10px] font-semibold md:text-lg xl:text-xl 2xl:text-2xl">
              Daftar Sekarang
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <picture>
              <source srcSet={Hero} type="image/png" />
              <img
                src={Hero}
                alt="Hero Section"
                className="w-full max-w-[344px] lg:max-w-[440px] 2xl:max-w-lg mx-auto h-auto object-center object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
      <LogoSlider title="Mitra Kami" />
    </section>
  );
}
