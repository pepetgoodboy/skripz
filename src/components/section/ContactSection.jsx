import BGContact from "../../assets/bg-contact.png";

export default function ContactSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-8 sm:py-10 md:py-16 xl:py-24">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 xl:gap-20">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-gray-700 font-semibold text-center"
          data-aos="fade-up"
        >
          Hubungi Kami
        </h2>
        <div
          className="w-full mx-auto sm:max-w-lg md:max-w-none border-2 border-[#48C1E5] shadow-md rounded-[20px] flex flex-col md:flex-row md:items-center gap-4 p-8"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2">
            <picture>
              <source srcSet={BGContact} type="image/png" />
              <img
                src={BGContact}
                alt="Contact Section"
                className="w-3/4 md:w-full h-auto mx-auto object-center object-cover"
              />
            </picture>
          </div>
          <form
            id="contact"
            name="contact"
            className="px-8 flex flex-col gap-4 xl:gap-6 3xl:gap-8 w-full md:w-1/2"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm xl:text-base 3xl:text-lg font-semibold text-gray-700">
                Nama Lengkap / Instansi
              </label>
              <input
                type="text"
                name="name"
                placeholder="Masukkan Nama Lengkap / Instansi"
                autoComplete="off"
                required
                className="p-4 rounded-[10px] border border-neutral-100 bg-gray-100 outline-none placeholder:text-sm xl:placeholder:text-base 3xl:placeholder:text-lg text-sm xl:text-base 3xl:text-lg focus:border-[#48C1E5]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm xl:text-base 3xl:text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Alamat Email Anda"
                autoComplete="off"
                required
                className="p-4 rounded-[10px] border border-neutral-100 bg-gray-100 outline-none placeholder:text-sm xl:placeholder:text-base 3xl:placeholder:text-lg text-sm xl:text-base 3xl:text-lg focus:border-[#48C1E5]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm xl:text-base 3xl:text-lg font-semibold text-gray-700">
                Pesan
              </label>
              <textarea
                rows={4}
                name="message"
                placeholder="Masukkan Pesan Anda"
                autoComplete="off"
                required
                className="p-4 rounded-[10px] border border-neutral-100 bg-gray-100 outline-none placeholder:text-sm xl:placeholder:text-base 3xl:placeholder:text-lg text-sm xl:text-base 3xl:text-lg focus:border-[#48C1E5]"
              ></textarea>
            </div>
            <button className="w-full bg-[#48C1E5] text-white py-2 2xl:py-4 px-4 rounded-[10px] font-semibold 2xl:text-xl">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
