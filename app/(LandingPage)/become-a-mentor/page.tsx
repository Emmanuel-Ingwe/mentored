import type { Metadata } from 'next';
import BecomeAMentor from '.';

export const metadata: Metadata = {
  description:
    'Join a diverse group of members worldwide and embark on a transformative learning journey with curated tech mentors.',
  title: 'Becoming a mentor',
};

export default function BecomeAMentorPage() {
  return <BecomeAMentor />;
}
