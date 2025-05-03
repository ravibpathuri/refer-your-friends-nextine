'use client';

import { IconBrandGithub } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';
import { Button } from '@mantine/core';

export default function SignInButton() {
  return (
    <Button
      leftSection={<IconBrandGithub />}
      variant="outline"
      onClick={() => signIn('github', { callbackUrl: '/admin/users' })}
    >
      Sign in with GitHub
    </Button>
  );
}
