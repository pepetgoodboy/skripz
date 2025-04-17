import { GiProgression } from "react-icons/gi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function ServiceSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-8 sm:py-10 md:py-16 xl:py-24">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 xl:gap-20">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-gray-700 font-semibold text-center"
          data-aos="fade-up"
        >
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:text-lg xl:text-xl 2xl:text-2xl">
          <div
            className="p-8 bg-[#DDF3FE] rounded-[10px] flex flex-col gap-6 md:gap-8 xl:gap-10"
            data-aos="fade-up"
          >
            <div className="flex gap-2 sm:gap-4 text-[#001688] items-center min-h-12">
              <GiProgression className="w-8 sm:w-10 h-auto" />
              <p>Pemantauan Progress Mahasiswa</p>
            </div>
            <p className="text-gray-700">
              Membantu dosen dan mahasiswa memantau setiap tahapan pengerjaan
              skripsi secara real-time, mulai dari pengajuan judul hingga revisi
              akhir.
            </p>
          </div>
          <div
            className="p-8 bg-[#DDF3FE] rounded-[10px] flex flex-col gap-6 md:gap-8 xl:gap-10"
            data-aos="fade-up"
          >
            <div className="flex gap-2 sm:gap-4 text-[#001688] items-center min-h-12">
              <FaRegCalendarCheck className="w-8 sm:w-10 h-auto" />
              <p>Pengelolaan Jadwal Seminar dan Sidang</p>
            </div>
            <p className="text-gray-700">
              Menyediakan sistem terintegrasi untuk mengatur dan
              menginformasikan jadwal seminar proposal, seminar hasil, hingga
              sidang skripsi dengan mudah.
            </p>
          </div>
          <div
            className="p-8 bg-[#DDF3FE] rounded-[10px] flex flex-col gap-6 md:gap-8 xl:gap-10"
            data-aos="fade-up"
          >
            <div className="flex gap-2 sm:gap-4 text-[#001688] items-center min-h-12">
              <IoDocumentTextOutline className="w-8 sm:w-10 h-auto" />
              <p>Pengelolaan Dokumen Skripsi Mahasiswa</p>
            </div>
            <p className="text-gray-700">
              Mempermudah mahasiswa dalam mengunggah dan mengelola dokumen
              skripsi, serta memudahkan dosen dalam mengakses dan memberikan
              penilaian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
