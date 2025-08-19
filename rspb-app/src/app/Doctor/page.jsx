"use client";
import React, { useState } from "react";
import { HeaderTabs } from "../../components/Navbar"; // sesuaikan path dengan struktur project

const doctors = [
  {
    id: 1,
    name: "NURHIKMAH HN, DR, SPKFR",
    specialty: "Spesialis KLINIK REHABILITASI MEDIK",
    img: "/Arif.jpg",
    schedule: {
      hari: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
      waktu: [
        "08:00 - 16:00 (-)",
        "08:00 - 16:00",
        "08:00 - 16:00",
        "08:00 - 16:00",
        "08:00 - 16:00",
        "-",
        "-",
      ],
    },
  },
  {
    id: 2,
    name: "IDA PRAMAYANTI, DR.SP.OG",
    specialty: "Spesialis KLINIK KEBIDANAN & KANDUNGAN",
    img: "/Alexander.jpg",
    schedule: {
      hari: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
      waktu: [
        "08:00 - 16:00",
        "08:00 - 16:00",
        "-",
        "-",
        "08:00 - 16:00",
        "-",
        "-",
      ],
    },
  },
  {
    id: 3,
    name: "IKA PUTRI MAHARANI, DR. SP.RAD",
    specialty: "Spesialis RADIOLOGI",
    img: "/Khair.jpg",
    schedule: {
      hari: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
      waktu: [
        "08:00 - 16:00 (-)",
        "08:00 - 16:00",
        "08:00 - 16:00",
        "08:00 - 16:00",
        "08:00 - 16:00",
        "-",
        "-",
      ],
    },
  },
  {
    id: 4,
    name: "MONICA GONDO H.,DRG, SP ORTHO",
    specialty: "Spesialis KLINIK ORTHODONTI",
    img: "/Manaek.jpg",
    schedule: {
      hari: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
      waktu: ["-", "08:00 - 16:00", "08:00 - 16:00", "-", "-", "-", "-"],
    },
  },
];

export default function OurDoctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderTabs />

      <div className="py-10">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Dokter Kami
        </h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mt-2 mb-8"></div>

        {!selectedDoctor ? (
          // List Dokter
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow p-5 text-center hover:shadow-lg transition flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-center">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="h-28 w-28 object-cover rounded-full border"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mt-4 line-clamp-2">
                    {doc.name}
                  </h3>
                  <p className="text-green-600 text-sm mt-1">
                    {doc.specialty}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="mt-4 px-4 py-2 border rounded-md text-sm font-medium flex items-center justify-center gap-2 mx-auto hover:bg-gray-100"
                >
                  👁 Lihat Jadwal
                </button>
              </div>
            ))}
          </div>
        ) : (
          // Detail Jadwal Dokter
          <div className="px-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src={selectedDoctor.img}
                alt={selectedDoctor.name}
                className="h-60 w-auto object-cover rounded-lg border-2 border-green-400 p-2"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-900">
                  {selectedDoctor.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  SMF : {selectedDoctor.specialty}
                </p>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-blue-800 text-white py-2 rounded-tl-xl">
                        Hari
                      </th>
                      <th className="bg-blue-800 text-white py-2 rounded-tr-xl">
                        Waktu
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedDoctor.schedule.hari.map((hari, i) => (
                      <tr key={i} className="text-white">
                        <td className="bg-blue-400 py-2 px-4">{hari}</td>
                        <td className="bg-blue-400 py-2 px-4">
                          {selectedDoctor.schedule.waktu[i]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <button
              onClick={() => setSelectedDoctor(null)}
              className="mt-6 text-blue-700 font-semibold flex items-center gap-1"
            >
              ◀ Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
