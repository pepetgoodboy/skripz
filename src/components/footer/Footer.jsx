import { HiHome } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DDF3FE] py-8 sm:py-8 lg:py-10 2xl:py-16 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <picture>
                <source srcSet="/skripz-logo.png" type="image/png" />
                <img
                  src="/skripz-logo.png"
                  alt="SkripZ Logo"
                  className="w-7 md:w-8 xl:w-10 2xl:w-12 h-auto"
                />
              </picture>
              <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-[#001688]">
                Skrip<span className="text-[#48C1E5]">Z</span>
              </h1>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <a href="https://www.instagram.com/makerdotindo" target="_blank">
                <AiFillInstagram className="w-5 md:w-6 xl:w-8 2xl:w-10 h-auto hover:scale-110 transition-all duration-300 ease-in-out text-[#001688]" />
              </a>
              <a
                href="https://www.youtube.com/@makerindoprimasolusi"
                target="_blank"
              >
                <FaYoutube className="w-5 md:w-6 xl:w-8 2xl:w-10 h-auto hover:scale-110 transition-all duration-300 ease-in-out text-[#001688]" />
              </a>
              <a
                href="https://www.linkedin.com/company/makerindo-prima-solusi"
                target="_blank"
              >
                <FaLinkedin className="w-5 md:w-6 xl:w-8 2xl:w-10 h-auto hover:scale-110 transition-all duration-300 ease-in-out text-[#001688]" />
              </a>
            </div>
          </div>
          <p className="text-[#001688] text-sm md:text-base">
            "One Step Closer to <span className="font-semibold">Success</span>"
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <HiHome className="w-5 md:w-6 h-auto text-[#001688]" />
            <p className="text-gray-700 text-sm md:text-base font-medium">
              Komplek Pesona Ciganitri Blok A No. 39
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <RiWhatsappFill className="w-5 md:w-6 h-auto text-[#001688]" />
            <p className="text-gray-700 text-sm md:text-base font-medium">
              0815-4686-5286
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoMail className="w-5 md:w-6 h-auto text-[#001688]" />
            <p className="text-gray-700 text-sm md:text-base font-medium">
              makerdotindo@gmail.com
            </p>
          </div>
        </div>
        <p className="text-xs lg:text-sm text-gray-700 font-semibold">
          Copyright &copy; 2024 PT. Makerindo Prima Solusi.
        </p>
      </div>
    </footer>
  );
}
