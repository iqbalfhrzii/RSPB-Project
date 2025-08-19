"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Avatar,
  Burger,
  Container,
  Group,
  Menu,
  Tabs,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cx from "clsx";
import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons-react";
import classes from "./HeaderTabs.module.css";

const user = {
  name: "Iqbal Fakboi",
  email: "11221034@student.itk.ac.id",
  image: "/iqbal.jpg",
  role: "user",
};

//Router
const tabs = [
  { label: "Home", path: "/" },
  { label: "Profile", path: "/profile" },
  { label: "Layanan", path: "/layanan" },
  { label: "Our Doctors", path: "/Doctor" },
  { label: "Daftar Online", path: "/Daftar" },
  { label: "History", path: "/History" },
  { label: "Check Status", path: "/Status" },
  { label: "FAQ", path: "/faq" },
];

export function HeaderTabs() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const router = useRouter();
  const pathname = usePathname(); 

  const handleTabChange = (value) => {
    const selectedTab = tabs.find((tab) => tab.label === value);
    if (selectedTab) {
      router.push(selectedTab.path);
    }
  };

  const currentTab = tabs.find((tab) => tab.path === pathname)?.label || "Home";

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <img src="/IHC.svg" alt="IHC Logo" height={45} />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={28} />
                  <div style={{ lineHeight: 1 }}>
                    <Text fw={500} size="sm">
                      {user.name}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {user.role === "admin" ? "Admin" : "User"}
                    </Text>
                  </div>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconStar size={16} stroke={1.5} color={theme.colors.yellow[6]} />}>
                History
              </Menu.Item>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Item
                leftSection={<IconLogout size={16} stroke={1.5} />}
                onClick={() => router.push('/Login')}
              >
                Logout
              </Menu.Item>

              <Menu.Divider />
              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>

      <Container size="md">
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.label} value={tab.label}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
