'use client';

import { IconBrandGithub } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import { Button } from '@mantine/core';

export default function SignOutButton() {
  return (
    <Button
      leftSection={<IconBrandGithub />}
      variant="outline"
      onClick={() => signOut({ callbackUrl: '/login' })} // Redirect to login page after sign out
    >
      Logout 
    </Button>
  );
}
