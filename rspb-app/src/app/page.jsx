import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#ffffff] min-h-screen w-full">
      <Navbar />
      <div className="w-[1440px] h-[1070px] mx-auto relative">
        {/* Gambar Hero */}
        <img
          className="absolute w-[361px] h-[351px] top-[304px] left-[868px]"
          alt="Hero"
          src="/hero.jpg"
        />

        {/* Konten Utama */}
        <main className="flex flex-col w-[562px] items-start gap-[22.27px] absolute top-[345px] left-[193px]">
          <h1 className="w-[595px] font-semibold text-neutral-600 text-[44.5px] leading-[52.9px] mb-2" style={{ fontFamily: "'Inter', Helvetica" }}>
            Ayo lakukan pendaftaran online
          </h1>
          
          <button
            className="flex w-[184px] h-[47px] items-center justify-center px-[22.27px] py-[9.74px] bg-[#8fc643] rounded-[2.78px] hover:bg-[#7fb03a] focus:outline-none focus:ring-2 focus:ring-[#8fc643] focus:ring-opacity-50"
          >
            Daftar Sekarang
          </button>
        </main>
      </div>
    </div>
  );
}
