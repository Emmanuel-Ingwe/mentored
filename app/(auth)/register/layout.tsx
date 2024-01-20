import React from 'react';
import { AuthLayout } from '../shared/components/AuthLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
