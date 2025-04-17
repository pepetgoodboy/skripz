import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import BGAbout from "../../assets/bg-about.png";

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-8 sm:py-10 md:py-16 xl:py-24">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 xl:gap-20">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-gray-700 font-semibold text-center"
          data-aos="fade-up"
        >
          Tentang <span className="text-[#001688]">Skrip</span>
          <span className="text-[#48C1E5]">Z</span>
        </h2>
        <div
          className="w-full px-4 py-8 sm:px-8 2xl:p-16 3xl:p-20 rounded-[10px] bg-[#365486]"
          data-aos="fade-up"
        >
          <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-4 md:gap-8 xl:gap-14">
            <div className="w-full sm:w-1/2 flex flex-col gap-2 lg:gap-6 2xl:gap-10 text-white md:text-lg xl:text-xl 2xl:text-2xl">
              <p>
                <span className="font-semibold">SkripZ</span> adalah platform
                berbasis web dan mobile yang mempermudah proses penelitian
                skripsi.
              </p>
              <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-4">
                <p>
                  Dikembangkan oleh PT Makerindo Prima Solusi dengan tujuan:
                </p>
                <div className="flex gap-2 items-center">
                  <CheckBadgeIcon className="w-6 h-auto" />
                  <p>Meningkatkan efisiensi administrasi.</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckBadgeIcon className="w-6 h-auto" />
                  <p>Transparansi dan akuntabilitas.</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckBadgeIcon className="w-6 h-auto" />
                  <p>Peningkatan kualitas penelitian.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <picture>
                <source srcSet={BGAbout} type="image/png" />
                <img
                  src={BGAbout}
                  alt="About Section"
                  className="w-full max-w-[344px] lg:max-w-[440px] 2xl:max-w-lg mx-auto h-auto object-center object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
