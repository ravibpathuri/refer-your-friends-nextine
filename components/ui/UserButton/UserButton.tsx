'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import classes from './UserButton.module.css';

export function UserButton() {
  const { data: session } = useSession();
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar size={"md"} src={session?.user?.image} alt={session?.user?.name || 'User'} radius="xl" />

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
    </UnstyledButton>
  );
}
