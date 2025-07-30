"use client";
import { useState } from 'react';
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';
import cx from 'clsx';
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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderTabs.module.css';

const user = {
  name: 'Iqbal Fakboi',
  email: '11221034@student.itk.ac.id',
  image: '/iqbal.jpg',
};

const tabs = [
  'Home',
  'Orders',
  'Education',
  'Community',
  'Forums',
  'Support',
  'Account',
  'Helpdesk',
];

export function HeaderTabs() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <img src="/IHC.svg" alt="IHC Logo" height={45} />

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />}
              >
                Liked posts
              </Menu.Item>
              <Menu.Item
                leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}
              >
                Saved posts
              </Menu.Item>
              <Menu.Item
                leftSection={<IconMessage size={16} color={theme.colors.blue[6]} stroke={1.5} />}
              >
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
                Pause subscription
              </Menu.Item>
              <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}

// .header {
//   padding-top: var(--mantine-spacing-sm);
//   background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
//   border-bottom: 1px solid light-dark(var(--mantine-color-gray-2), transparent);
//   margin-bottom: 120px;
// }

// .mainSection {
//   padding-bottom: var(--mantine-spacing-sm);
// }

// .user {
//   color: light-dark(var(--mantine-color-black), var(--mantine-color-dark-0));
//   padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
//   border-radius: var(--mantine-radius-sm);
//   transition: background-color 100ms ease;

//   &:hover {
//     background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-8));
//   }

//   @media (max-width: $mantine-breakpoint-xs) {
//     display: none;
//   }
// }

// .userActive {
//   background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-8));
// }

// .tabsList {
//   &::before {
//     display: none;
//   }
// }

// .tab {
//   font-weight: 500;
//   height: 38px;
//   background-color: transparent;
//   position: relative;
//   bottom: -1px;

//   &::before,
//   &::after {
//     background-color: light-dark(
//       var(--mantine-color-gray-2),
//       var(--mantine-color-dark-7)
//     ) !important;
//   }

//   &:hover {
//     background-color: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));
//   }

//   &[data-active] {
//     background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
//     border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-7));
//     border-bottom-color: transparent;
//   }
// }