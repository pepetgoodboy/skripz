import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full z-20 sticky top-0 bg-white pt-4 pb-4 sm:pt-8 lg:pt-10 2xl:pt-16 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40">
      <div className="flex items-center justify-between">
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

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-4 lg:gap-6 2xl:gap-8 items-center text-sm lg:text-base 2xl:text-xl">
          <Link
            to="beranda"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
          >
            Beranda
          </Link>
          <Link
            to="tentang"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
          >
            Tentang
          </Link>
          <Link
            to="layanan"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
          >
            Layanan
          </Link>
          <Link
            to="paket"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
          >
            Paket
          </Link>
          <Link
            to="kontak"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
          >
            Kontak
          </Link>
          <button className="bg-[#001688] hover:bg-[#2E7BC7] cursor-pointer transition-all duration-200 ease-in-out text-white font-medium py-1.5 2xl:py-3 px-6 2xl:px-8 rounded-md">
            Masuk
          </button>
        </div>

        {/* Button Hamburger */}
        <div
          onClick={() => setOpen(true)}
          className="md:hidden cursor-pointer z-50"
        >
          <Bars3Icon className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-40 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-down Menu */}
        <div
          className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out transform ${
            open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="px-4 sm:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <picture>
                  <source srcSet="/skripz-logo.png" type="image/png" />
                  <img
                    src="/skripz-logo.png"
                    alt="SkripZ Logo"
                    className="w-7 md:w-8 h-auto"
                  />
                </picture>
                <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-[#001688]">
                  Skrip<span className="text-[#48C1E5]">Z</span>
                </h1>
              </div>
              <div onClick={() => setOpen(false)} className="cursor-pointer">
                <XMarkIcon className="w-6 h-6" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Link
                to="beranda"
                smooth={true}
                duration={500}
                onClick={() => setOpen(!open)}
                className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
              >
                Beranda
              </Link>
              <Link
                to="tentang"
                smooth={true}
                duration={500}
                onClick={() => setOpen(!open)}
                className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
              >
                Tentang
              </Link>
              <Link
                to="layanan"
                smooth={true}
                duration={500}
                onClick={() => setOpen(!open)}
                className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
              >
                Layanan
              </Link>
              <Link
                to="paket"
                smooth={true}
                duration={500}
                onClick={() => setOpen(!open)}
                className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
              >
                Paket
              </Link>
              <Link
                to="kontak"
                smooth={true}
                duration={500}
                onClick={() => setOpen(!open)}
                className="text-gray-600 hover:text-[#001688] font-medium cursor-pointer"
              >
                Kontak
              </Link>
              <button className="w-full max-w-32 bg-[#001688] hover:bg-[#2E7BC7] cursor-pointer transition-all duration-200 ease-in-out text-white font-medium py-1.5 2xl:py-3 px-6 2xl:px-8 rounded-md">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
