import { useState } from "react";
import { packets } from "../../data/packets";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function PacketSection() {
  const [packet, setPacket] = useState("akademisi");
  const [listPacket, setListPacket] = useState(
    packets.filter((p) => p.category === "Akademisi")
  );

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-8 sm:py-10 md:py-16 xl:py-24">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 xl:gap-20">
        <div className="flex flex-col gap-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-gray-700 font-semibold text-center"
            data-aos="fade-up"
          >
            Pilihan Paket
          </h2>
          <div
            className="w-56 xl:w-60 2xl:w-64 mx-auto flex p-1.5 rounded-full border border-neutral-200 items-center justify-between shadow-md relative"
            data-aos="fade-up"
          >
            <div
              className={`absolute inset-y-1.5 w-[calc(50%-0.375rem)] bg-[#365486] rounded-full transition-all duration-300 ease-in-out ${
                packet === "akademisi" ? "left-1.5" : "right-1.5"
              }`}
            />
            <button
              onClick={() => {
                setPacket("akademisi");
                setListPacket(
                  packets.filter((p) => p.category === "Akademisi")
                );
              }}
              type="button"
              className={`relative z-10 w-1/2 px-3 py-1.5 font-semibold text-center xl:text-lg 2xl:text-xl rounded-full transition-colors duration-300 cursor-pointer ${
                packet === "akademisi" ? "text-white" : "text-gray-700"
              }`}
            >
              Akademisi
            </button>
            <button
              onClick={() => {
                setPacket("industri");
                setListPacket(packets.filter((p) => p.category === "Industri"));
              }}
              type="button"
              className={`relative z-10 w-1/2 px-3 py-1.5 font-semibold text-center xl:text-lg 2xl:text-xl rounded-full transition-colors duration-300 cursor-pointer ${
                packet === "industri" ? "text-white" : "text-gray-700"
              }`}
            >
              Industri
            </button>
          </div>
        </div>
        <div
          className="w-full mx-auto 2xl:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          data-aos="fade-up"
        >
          {listPacket.map((packet) => (
            <div
              key={packet.id}
              className="p-5 sm:p-6 lg:p-8 xl:p-10 w-full max-w-md xl:max-w-lg mx-auto bg-[#365486] rounded-[20px] shadow-lg"
            >
              <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
                <div className="flex flex-col gap-1 lg:gap-2 xl:gap-3 2xl:gap-4">
                  <h3 className="text-xl lg:text-3xl 2xl:text-4xl text-white font-semibold">
                    {packet.name}
                  </h3>
                  <p className="text-white text-sm lg:text-lg 2xl:text-xl">
                    {packet.desc}
                  </p>
                </div>

                <p className="text-2xl md:text-3xl xl:text-4xl text-white font-semibold">
                  {packet.price}
                </p>

                <button className="w-full bg-white lg:text-lg 2xl:text-xl text-[#365486] py-3 px-4 rounded-md font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Pilih Paket
                </button>

                <div className="flex flex-col gap-3 text-white mt-2">
                  {packet.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckBadgeIcon className="w-5 h-5 text-[#48C1E5] flex-shrink-0 mt-0.5" />
                      <p className="text-sm lg:text-base 2xl:text-xl">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
