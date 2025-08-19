"use client";
import { useState } from "react";
import {
  Container,
  TextInput,
  Button,
  Table,
  Group,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { HeaderTabs } from "../../components/Navbar";

export default function StatusPage() {
  const [search, setSearch] = useState("");

  const data = [
    {
      reg: "KP0001",
      no: "001",
      nama: "Iqbal",
      ktp: "64123456789",
      kk: "12345678",
      tanggal: "13/05/2025",
      poli: "Klinik Pratama",
    },
    {
      reg: "KB0003",
      no: "003",
      nama: "Iqbal",
      ktp: "64123456789",
      kk: "12345678",
      tanggal: "15/04/2025",
      poli: "Klinik Bhayangkara",
    },
    {
      reg: "KK0010",
      no: "010",
      nama: "Iqbal",
      ktp: "64123456789",
      kk: "12345678",
      tanggal: "25/09/2024",
      poli: "Klinik Kanodjoso",
    },
    {
      reg: "KP0022",
      no: "013",
      nama: "Iqbal",
      ktp: "64123456789",
      kk: "12345678",
      tanggal: "13/05/2025",
      poli: "Klinik Pratama",
    },
    {
      reg: "KP0013",
      no: "005",
      nama: "Iqbal",
      ktp: "64123456789",
      kk: "12345678",
      tanggal: "13/05/2025",
      poli: "Klinik Bhayangkara",
    },
    {
      reg: "KP0004",
      no: "013",
      nama: "Iqbal",
      ktp: "64123456789",
      kk: "12345678",
      tanggal: "13/05/2025",
      poli: "Klinik Pratama",
    },
  ];

  const rows = data
    .filter(
      (d) =>
        d.nama.toLowerCase().includes(search.toLowerCase()) ||
        d.reg.toLowerCase().includes(search.toLowerCase())
    )
    .map((d) => (
      <Table.Tr key={d.no}>
        <Table.Td style={{ padding: "12px", fontWeight: "500" }}>{d.reg}</Table.Td>
        <Table.Td style={{ textAlign: "center", padding: "12px" }}>{d.no}</Table.Td>
        <Table.Td style={{ padding: "12px" }}>{d.nama}</Table.Td>
        <Table.Td style={{ padding: "12px" }}>{d.ktp}</Table.Td>
        <Table.Td style={{ padding: "12px" }}>{d.kk}</Table.Td>
        <Table.Td style={{ padding: "12px" }}>{d.tanggal}</Table.Td>
        <Table.Td style={{ padding: "12px" }}>{d.poli}</Table.Td>
      </Table.Tr>
    ));

  return (
    <>
      <HeaderTabs />
      <Container
        size="xl"
        mt="xl"
        style={{ backgroundColor: "#F9FAFB", padding: 24, borderRadius: 8 }}
      >
        {/* Search bar di kiri */}
        <Group justify="flex-start" mb="md">
          <TextInput
            placeholder="Search..."
            leftSection={<IconSearch size={18} />}
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            style={{ width: 400 }}
          />
          <Button
            style={{
              backgroundColor: "#84CC16",
              padding: "0 24px",
            }}
          >
            Cari
          </Button>
        </Group>

        {/* Tabel */}
        <Table
          striped
          highlightOnHover
          withTableBorder
          style={{
            borderCollapse: "collapse",
            border: "1px solid #E5E7EB",
          }}
        >
          <Table.Thead
            style={{
              backgroundColor: "#F3F4F6",
              borderBottom: "2px solid #D1D5DB",
            }}
          >
            <Table.Tr>
              <Table.Th style={{ padding: "12px", textAlign: "left" }}>
                No Registrasi
              </Table.Th>
              <Table.Th style={{ padding: "12px", textAlign: "center" }}>
                No Antrian
              </Table.Th>
              <Table.Th style={{ padding: "12px", textAlign: "left" }}>Nama</Table.Th>
              <Table.Th style={{ padding: "12px", textAlign: "left" }}>No KTP</Table.Th>
              <Table.Th style={{ padding: "12px", textAlign: "left" }}>No KK</Table.Th>
              <Table.Th style={{ padding: "12px", textAlign: "left" }}>Tanggal</Table.Th>
              <Table.Th style={{ padding: "12px", textAlign: "left" }}>Poli</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
    </>
  );
}
