'use client';

import React from 'react';
import Link from 'next/link';
import { IconChevronDown, IconLogout, IconUser } from '@tabler/icons-react';
import { signOut, useSession } from 'next-auth/react';
import { AppShell, Avatar, Burger, Group, Menu, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Footer from './Footer';

interface FullLayoutProps extends React.PropsWithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  navbar?: React.ReactNode;
  aside?: React.ReactNode;
}

const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const { data: session } = useSession();

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
                <Group>
                  <Avatar
                    size={'md'}
                    src={session?.user?.image}
                    alt={session?.user?.name || 'User'}
                    radius="xl"
                  />

                  <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                      {session?.user?.name || 'User'}
                    </Text>

                    <Text c="dimmed" size="xs">
                      {session?.user?.email || ''}
                    </Text>
                  </div>

                  <IconChevronDown size={14} stroke={1.5} />
                </Group>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item leftSection={<IconUser size={14} />} component={Link} href="/admin/profile">
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
     
      <AppShell.Main>{children} </AppShell.Main>
      {/* <AppShell.Aside p="md">Aside</AppShell.Aside> */}
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default FullLayout;
