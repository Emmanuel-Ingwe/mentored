import NotFoundComp from '@/shared/components/NotFound/NotFoundComp';
import { FindAMentor } from '.';

const acceptedSlugs = [
  'frontend-developer',
  'backend-developer',
  'fullstack-developer',
  'qa-engineer',
  'blockchain',
  'graphic-design',
  'ux-design',
  'project-management',
];

export default function FindAMentorPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  if (!acceptedSlugs.includes(slug)) {
    return <NotFoundComp />;
  }
  return <FindAMentor />;
}
