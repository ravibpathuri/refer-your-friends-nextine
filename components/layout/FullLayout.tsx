'use client';

import React from 'react';
import Link from 'next/link';
import { IconLogout, IconUser } from '@tabler/icons-react';
import { signOut, useSession } from 'next-auth/react';
import { AppShell, Avatar, Burger, Group, Menu, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface FullLayoutProps extends React.PropsWithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  navbar?: React.ReactNode;
  aside?: React.ReactNode;
}

const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const { data: session, status } = useSession();

  console.log('Session:', session);
  console.log('Status:', status);

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: false } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          RB
          <Group gap={'md'}>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Group gap="xs" style={{ cursor: 'pointer' }}>
                  <Avatar
                    src={session?.user?.image}
                    alt={session?.user?.name || 'User'}
                    radius="xl"
                    size="sm"
                  />
                  <Text size="sm">{session?.user?.name || 'User'}</Text>
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item leftSection={<IconUser size={14} />} component={Link} href="/profile">
                  Profile
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconLogout size={14} />}
                  onClick={() => signOut({ callbackUrl: '/login' })}
                >
                  Sign Out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>{children} </AppShell.Main>
      {/* <AppShell.Aside p="md">Aside</AppShell.Aside> */}
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
};

export default FullLayout;
