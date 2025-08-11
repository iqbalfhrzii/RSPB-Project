"use client";

import { useState } from "react";
import { HeaderTabs } from "../../components/Navbar";
import { Table } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function HistoryPage() {
  const [search, setSearch] = useState("");

  const data = [
    {
      noReg: "KP0001",
      noAntrian: "001",
      nama: "Niko",
      noKTP: "64123456789",
      noKK: "12345678",
      tanggal: "13/05/2025",
      poli: "Klinik Pratama",
      status: "Selesai",
    },
    {
      noReg: "KB0003",
      noAntrian: "002",
      nama: "Iqbal",
      noKTP: "64012345678",
      noKK: "12345678",
      tanggal: "15/04/2025",
      poli: "Klinik Bhayangkara",
      status: "Di Periksa",
    },
    {
  noReg: "KK0011",
  noAntrian: "003",
  nama: "Chun",
  noKTP: "640192300001",
  noKK: "12345001",
  tanggal: "26/09/2024",
  poli: "Klinik Sehat Selalu",
  status: "Belum Datang",
},
{
  noReg: "KK0012",
  noAntrian: "004",
  nama: "Yaomi",
  noKTP: "640192300002",
  noKK: "12345002",
  tanggal: "27/09/2024",
  poli: "Klinik Harapan Bunda",
  status: "Belum Datang",
},
{
  noReg: "KK0013",
  noAntrian: "005",
  nama: "Fasya",
  noKTP: "640192300003",
  noKK: "12345003",
  tanggal: "28/09/2024",
  poli: "Klinik Kasih Ibu",
  status: "Belum Datang",
},
{
  noReg: "KK0014",
  noAntrian: "006",
  nama: "Fahrozi",
  noKTP: "640192300004",
  noKK: "12345004",
  tanggal: "29/09/2024",
  poli: "Klinik Utama Medika",
  status: "Belum Datang",
},
{
  noReg: "KK0015",
  noAntrian: "007",
  nama: "Iqbal Fahrozi",
  noKTP: "640192300005",
  noKK: "12345005",
  tanggal: "30/09/2024",
  poli: "Klinik Mitra Sehat",
  status: "Belum Datang",
},
{
  noReg: "KK0016",
  noAntrian: "008",
  nama: "Fasya Iqbal",
  noKTP: "640192300006",
  noKK: "12345006",
  tanggal: "01/10/2024",
  poli: "Klinik Bakti Husada",
  status: "Belum Datang",
},
{
  noReg: "KK0017",
  noAntrian: "009",
  nama: "Iqbal Sista",
  noKTP: "640192300007",
  noKK: "12345007",
  tanggal: "02/10/2024",
  poli: "Klinik Citra Medika",
  status: "Belum Datang",
},
{
  noReg: "KK0018",
  noAntrian: "010",
  nama: "Frexy",
  noKTP: "640192300008",
  noKK: "12345008",
  tanggal: "03/10/2024",
  poli: "Klinik Harmoni",
  status: "Belum Datang",
},

  ];

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  const statusStyles = {
    Selesai: { bg: "#DCFCE7", color: "#166534" },
    "Belum Datang": { bg: "#FFEDD5", color: "#9A3412" },
    "Di Periksa": { bg: "#FEE2E2", color: "#B91C1C" },
  };

  const columnStyles = {
    noReg: { minWidth: "120px", textAlign: "center" },
    noAntrian: { minWidth: "100px", textAlign: "center" },
    nama: { minWidth: "150px", textAlign: "left" },
    noKTP: { minWidth: "150px", textAlign: "center" },
    noKK: { minWidth: "120px", textAlign: "center" },
    tanggal: { minWidth: "130px", textAlign: "center" },
    poli: { minWidth: "180px", textAlign: "left" },
    status: { minWidth: "140px", textAlign: "center" },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderTabs />
      <div className="p-6">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Search Bar - Google Style */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-lg">
              {/* Icon di dalam input */}
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 pointer-events-none">
                <IconSearch size={22} stroke={2} />
              </span>

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table
              striped
              highlightOnHover
              verticalSpacing="md"
              horizontalSpacing="md"
              style={{
                borderCollapse: "separate",
                borderSpacing: "0 12px", 
              }}
            >
              <thead style={{ backgroundColor: "#F3F4F6" }}>
                <tr>
                  <th style={columnStyles.noReg}>No Registrasi</th>
                  <th style={columnStyles.noAntrian}>No Antrian</th>
                  <th style={columnStyles.nama}>Nama</th>
                  <th style={columnStyles.noKTP}>No KTP</th>
                  <th style={columnStyles.noKK}>No KK</th>
                  <th style={columnStyles.tanggal}>Tanggal</th>
                  <th style={columnStyles.poli}>Poli</th>
                  <th style={columnStyles.status}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: "#F9F5FF",
                      borderRadius: "8px",
                    }}
                  >
                    <td style={columnStyles.noReg} className="font-bold">
                      {row.noReg}
                    </td>
                    <td style={columnStyles.noAntrian}>{row.noAntrian}</td>
                    <td style={columnStyles.nama}>{row.nama}</td>
                    <td style={columnStyles.noKTP}>{row.noKTP}</td>
                    <td style={columnStyles.noKK}>{row.noKK}</td>
                    <td style={columnStyles.tanggal}>{row.tanggal}</td>
                    <td style={columnStyles.poli}>{row.poli}</td>
                    <td style={columnStyles.status}>
                      <span
                        style={{
                          backgroundColor: statusStyles[row.status].bg,
                          color: statusStyles[row.status].color,
                          padding: "4px 12px",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
