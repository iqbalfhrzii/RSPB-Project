"use client";
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

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-300 bg-[url('/iqbal.jpg')] bg-cover">
      <Container size={420} p="md">
        <Paper radius="md" p="xl" withBorder>
          <Title order={2} fw={600} ta="center" mb="sm">
            Buat Akun
          </Title>
          <Text c="dimmed" fz="sm" ta="center" mb="lg">
            Buat akun untuk melanjutkan
          </Text>

          <TextInput label="Email" placeholder="contoh@gmail.com" required />
          <TextInput label="Username" placeholder="Username" required mt="md" />
          <PasswordInput
            label="Password"
            placeholder="********"
            mt="md"
            required
          />
          <div className="flex justify-between items-center mt-3 mb-3">
            <Checkbox
            label="Saya menerima syarat dan ketentuan"
            className="my-3"
            size="sm" 
            />
            <Anchor href="#" fz="xs">
              Lupa Password?
            </Anchor>
          </div>

          <Button fullWidth mt="md" color="lime">
            Daftar
          </Button>

          <Text ta="center" fz="sm" mt="sm">
            Sudah punya akun?{" "}
            <Anchor href="/Login" size="sm" fw={500}>
              Login
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  );
}
