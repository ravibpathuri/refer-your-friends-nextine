'use client';

import { IconBrandGithub } from '@tabler/icons-react';
import { Button, Container, Paper, Text, Title } from '@mantine/core';
import SignInButton from '@/components/ui/SignInButton';
import { signIn } from '@/lib/auth';

export default function SignInPage() {
  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Title order={2} ta="center" mb="md">
          Welcome
        </Title>
        <Text c="dimmed" ta="center" mb="xl">
          Sign in with your GitHub account
        </Text>

        <SignInButton />
      </Paper>
    </Container>
  );
}
