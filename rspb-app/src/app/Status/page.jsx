"use client";
import { useState } from "react";
import {
  Container,
  Select,
  TextInput,
  Button,
  Table,
  Group,
  Badge,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { HeaderTabs } from "../../components/Navbar"; // panggil komponen Navbar kamu

export default function StatusPage() {
  const [search, setSearch] = useState("");

  const data = [
    { no: "001", nama: "Niko", reg: "KP0001", status: "Selesai" },
    { no: "002", nama: "Iqbal", reg: "KP0002", status: "Sedang Proses" },
    { no: "003", nama: "Sista", reg: "KP0003", status: "Menunggu" },
    { no: "004", nama: "Wita", reg: "KP0004", status: "Menunggu" },
    { no: "005", nama: "Zul", reg: "KP0005", status: "Menunggu" },
    { no: "006", nama: "Fikri", reg: "KP0006", status: "Menunggu" },
    { no: "007", nama: "Tama", reg: "KP0007", status: "Menunggu" },
    { no: "008", nama: "Sista", reg: "KP0008", status: "Menunggu" },
    { no: "009", nama: "Sista", reg: "KP0009", status: "Menunggu" },
    { no: "010", nama: "Sista", reg: "KP0010", status: "Menunggu" },
  ];

  const statusColors = {
    Selesai: { bg: "#DCFCE7", color: "#166534" }, // hijau
    "Sedang Proses": { bg: "#FFEDD5", color: "#9A3412" }, // oranye
    Menunggu: { bg: "#FEE2E2", color: "#991B1B" }, // merah
  };

  const rows = data
    .filter(
      (d) =>
        d.nama.toLowerCase().includes(search.toLowerCase()) ||
        d.reg.toLowerCase().includes(search.toLowerCase())
    )
    .map((d) => (
      <Table.Tr key={d.no}>
        <Table.Td style={{ textAlign: "center" }}>{d.no}</Table.Td>
        <Table.Td style={{ textAlign: "left" }}>{d.nama}</Table.Td>
        <Table.Td style={{ textAlign: "center", fontWeight: "bold" }}>
          {d.reg}
        </Table.Td>
        <Table.Td style={{ textAlign: "center" }}>
          <Badge
            style={{
              backgroundColor: statusColors[d.status].bg,
              color: statusColors[d.status].color,
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "500",
            }}
          >
            {d.status}
          </Badge>
        </Table.Td>
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
        {/* Filter & Search */}
        <Group justify="space-between" mb="md">
          <Select
            placeholder="Pilih Klinik"
            data={[
              "Klinik Pratama",
              "Klinik Sehat Selalu",
              "Klinik Harapan Bunda",
            ]}
            style={{ width: 250 }}
          />
          <Group>
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
        </Group>

        {/* Tabel */}
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: "center" }}>No Antrian</Table.Th>
              <Table.Th style={{ textAlign: "left" }}>Nama</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>No Registrasi</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
    </>
  );
}
