'use client';

import React from 'react';

interface FullLayoutProps extends React.PropsWithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  navbar?: React.ReactNode;
  aside?: React.ReactNode;
}

const LandingLayout: React.FC<FullLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default LandingLayout;
