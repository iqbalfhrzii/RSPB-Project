"use client";
import Link from "next/link";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Button,
  Container,
} from "@mantine/core";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-300 bg-[url('/iqbal.jpg')] bg-cover">
      <Container size={420} p="md">
        <Paper radius="md" p="xl" withBorder>
          <Title order={2} fw={600} ta="center" mb="sm">
            Login ke Akun
          </Title>
          <Text c="dimmed" fz="sm" ta="center" mb="lg">
            Masukkan email dan password untuk melanjutkan
          </Text>

          <TextInput label="Email" placeholder="contoh@gmail.com" required />
          <PasswordInput
            label="Password"
            placeholder="********"
            mt="md"
            required
          />
          <div className="flex justify-between items-center mt-1 mb-3">
            <Checkbox label="Ingatkan Password" />
            <Anchor href="#" fz="xs">
              Lupa Password?
            </Anchor>
          </div>

          <Button fullWidth mt="md" color="lime">
            Login
          </Button>

          <Text ta="center" fz="sm" mt="sm">
            Tidak punya akun?{" "}
            <Anchor href="/Register" size="sm" fw={500}>
              Buat akun
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  );
}
