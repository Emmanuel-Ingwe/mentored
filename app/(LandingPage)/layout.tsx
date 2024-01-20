import type { Metadata } from 'next';
import FindAMentorProvider from './find-a-mentor/[slug]/context/FindAMentorProvider';
import Footer from './shared/components/Layout/Footer';
import MainHeader from './shared/components/Layout/MainHeader';
import ScrollToTopButton from './shared/components/Layout/ScrollToTop';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/de-DE',
      'en-US': '/en-US',
    },
  },
  description:
    'Join a diverse group of members worldwide and embark on a transformative learning journey with curated tech mentors.',
  icons: [
    'https://res.cloudinary.com/dqezpdvy9/image/upload/v1697500884/mentored/images/logo-icon_fz4ocm.svg',
  ],
  keywords:
    'MentorsHub,MentorsHub ÖU, Top Mentors,Mentors, Mentees, Mentorship, Mentorship Program, Software mentors, Software mentorship, Software mentorship program, Engineering mentors, Engineering mentorship, Engineering mentorship program,',
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
  return (
    <div className="min-h-screen">
      <FindAMentorProvider>
        <MainHeader />
        {children}
        <Footer />
      </FindAMentorProvider>
      <ScrollToTopButton />
    </div>
  );
}
