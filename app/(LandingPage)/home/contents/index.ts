import type { FilterLabel } from '../../shared/types/type';

export const filterLabels: FilterLabel[] = [
  { label: 'All', variant: 'outline' },
  {
    label: 'Product design',
    variant: 'blue-700',
  },
  {
    label: 'Data science',
    variant: 'blue-900',
  },
  {
    label: 'Frontend development',
    variant: 'pink-800',
  },
  {
    label: 'Backend development',
    variant: 'red-500',
  },
  {
    label: 'Mobile app development',
    variant: 'outline',
  },
  {
    label: 'Software testing',
    variant: 'green-700',
  },
  {
    label: 'Devops',
    variant: 'red-500',
  },
  {
    label: '  No/low code',
    variant: 'purple-800',
  },
];

export const footerNavigationData = [
  {
    links: [
      { href: '/find-a-mentor', text: 'Find a mentor' },
      { href: '/become-a-mentor', text: 'Become a mentor' },
      { href: '/#', text: 'Pricing' },
    ],
    section: 'Mentor',
  },
  {
    links: [
      { href: '/about-us', text: 'About' },
      { href: '/#', text: 'Careers' },
      { href: '/blog', text: 'Blog' },
    ],
    section: 'Company',
  },
  {
    links: [
      { href: '/#', text: 'Newsletter' },
      { href: '/contact', text: 'Contact' },
      { href: '/#', text: 'Help Center' },
      { href: '/#', text: 'Support' },
    ],
    section: 'Resources',
  },
  {
    links: [
      { href: '/#', text: 'Twitter' },
      { href: '/#', text: 'LinkedIn' },
      { href: '/#', text: 'Facebook' },
    ],
    section: 'Social',
  },
  {
    links: [
      { href: '/terms', text: 'Terms' },
      { href: '/privacy-policy', text: 'Privacy' },
      { href: '/#', text: 'Licenses' },
    ],
    section: 'Legal',
  },
];
