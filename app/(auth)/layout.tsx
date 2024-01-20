import React from 'react';
import type { Metadata } from 'next';
import AuthProvider from './shared/context/AuthProvider';

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MentorsHub',
  },
  description:
    'Register as a mentee and embark on a transformative learning journey with curated tech mentors',
  icons: [
    'https://res.cloudinary.com/dqezpdvy9/image/upload/v1697500884/mentored/images/logo-icon_fz4ocm.svg',
  ],
  keywords:
    'MentorsHub,Top Mentors,Mentors, Mentees, Mentorship, Mentorship Program, Software mentors, Software mentorship, Software mentorship program,',
  metadataBase: new URL('https://mentorshub.io/'),
  openGraph: {
    countryName: 'Estonia',
    description:
      'Join a diverse group of members worldwide and embark on a transformative learning journey with curated tech mentors.',
    images: [
      {
        height: 600,
        url: 'https://res.cloudinary.com/dqezpdvy9/image/upload/v1697629481/mentored/images/g6yift0trqvjqfmcbxvh.jpg',
        width: 800,
      },
    ],
    siteName: 'MentorsHub',
    title: 'Top mentors from top industry | MentorsHub',
    url: 'https://mentorshub.io/',
  },
  themeColor: '#ffffff',
  title: 'MentorsHub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
