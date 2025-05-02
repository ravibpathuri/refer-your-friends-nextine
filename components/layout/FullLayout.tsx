'use client';

import React, { use } from 'react';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface FullLayoutProps extends React.PropsWithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  navbar?: React.ReactNode;
  aside?: React.ReactNode;
}

const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: false } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          RB
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
