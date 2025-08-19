"use client";

import {
  Container,
  TextInput,
  Text,
  Paper,
  FileInput,
  Button,
  Select,
  Grid,
  Group,
  Avatar,
} from "@mantine/core";
import { HeaderTabs } from "../../components/Navbar";
import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";

export default function DaftarOnline() {
  const [foto, setFoto] = useState(null);

  return (
    <div className="min-h-screen bg-gray-200">
      <HeaderTabs />

      <Container size="1140px" className="py-10">
        <Paper
          shadow="md"
          radius="2xl"
          withBorder
          className="bg-white p-12 relative"
          style={{ minHeight: 744 }}
        >
          {/* Upload Foto */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <label htmlFor="uploadFoto">
              <Avatar
                radius="xl"
                size={100}
                className="bg-gray-200 shadow cursor-pointer"
                src={foto ? URL.createObjectURL(foto) : undefined}
              >
                {!foto && <IconUpload size={32} className="text-gray-600" />}
              </Avatar>
            </label>

            {/* Hidden Input */}
            <input
              id="uploadFoto"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setFoto(file);
              }}
            />

            <Text
              size="sm"
              fw={600}
              className="text-lime-500 text-center mt-2"
            >
              Upload Foto Diri
            </Text>
          </div>

          {/* Form Grid */}
          <Grid gutter="xl" className="mt-40 px-6">
            {/* Nama Lengkap */}
            <Grid.Col span={6}>
              <TextInput
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap"
                size="sm"
                radius="md"
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>

            {/* Keluhan */}
            <Grid.Col span={6}>
              <TextInput
                label="Keluhan"
                placeholder="Masukkan keluhan"
                size="sm"
                radius="md"
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>

            {/* No KTP */}
            <Grid.Col span={6}>
              <TextInput
                label="No KTP"
                placeholder="Masukkan nomor KTP"
                size="sm"
                radius="md"
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>

            {/* Upload KTP */}
            <Grid.Col span={6}>
              <FileInput
                label="Upload KTP"
                placeholder="Upload Kartu Tanda Penduduk"
                size="sm"
                radius="md"
                rightSection={<Button size="xs">Pilih File</Button>}
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>

            {/* No KK */}
            <Grid.Col span={6}>
              <TextInput
                label="No KK"
                placeholder="Masukkan nomor KK"
                size="sm"
                radius="md"
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>

            {/* Upload KK */}
            <Grid.Col span={6}>
              <FileInput
                label="Upload KK"
                placeholder="Upload Kartu Keluarga"
                size="sm"
                radius="md"
                rightSection={<Button size="xs">Pilih File</Button>}
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>

            {/* Poli */}
            <Grid.Col span={6}>
              <Select
                label="Pilih Poli"
                placeholder="Pilih Poli"
                data={[
                  "Klinik Penyakit Dalam",
                  "Klinik Anak",
                  "Klinik Gigi",
                  "Klinik Jantung",
                  "Klinik THT",
                  "Klinik Bedah Tulang",
                ]}
                size="sm"
                radius="md"
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>

            {/* Dokumen Tambahan */}
            <Grid.Col span={6}>
              <FileInput
                label="Dokumen Tambahan (Opsional)"
                placeholder="Upload dokumen tambahan"
                size="sm"
                radius="md"
                rightSection={<Button size="xs">Pilih File</Button>}
                styles={{
                  input: { height: 48 },
                  label: { fontWeight: 600, color: "#52525b" },
                }}
              />
            </Grid.Col>
          </Grid>

          {/* Submit Button */}
          <Group justify="center" mt={50}>
            <Button
              color="lime"
              size="md"
              radius="xl"
              className="w-72 font-semibold"
              style={{ height: 56, opacity: 0.95 }}
            >
              Daftar
            </Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
}
