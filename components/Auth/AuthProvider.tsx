'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps extends React.PropsWithChildren {
  session?: any; // You can replace 'any' with the actual type if you have it
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
