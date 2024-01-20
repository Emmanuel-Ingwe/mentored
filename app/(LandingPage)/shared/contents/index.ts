import type {
  FilterContentType,
  ReviewType,
} from '@/app/(LandingPage)/shared/types/type';
import testimonial from '@/public/images/testimonial-img.png';

export const testimonials: ReviewType[] = [
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit felis facilisi commodo molestie odio eu.',
    id: 1,
    media: testimonial,
    mediaType: 'image',
    name: 'John Doe',
    position: 'Software Engineer, Google',
    rating: 4,
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit felis facilisi commodo molestie odio eu.',
    id: 2,
    media: testimonial,
    mediaType: 'image',
    name: 'Jane Smith',
    position: 'Frontend Developer, Facebook',
    rating: 5,
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit felis facilisi commodo molestie odio eu.',
    id: 3,
    media: testimonial,
    mediaType: 'image',
    name: 'Bob Johnson',
    position: 'Fullstack Developer, Amazon',
    rating: 4,
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit felis facilisi commodo molestie odio eu.',
    id: 4,
    media:
      'https://mazwai.com/videvo_files/video/free/2019-12/small_watermarked/190915_A_04_Drone_12_preview.webm',
    mediaType: 'video',
    name: 'Alice Lee',
    position: 'UI/UX Designer, Apple',
    rating: 5,
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit felis facilisi commodo molestie odio eu.',
    id: 5,
    media:
      'https://mazwai.com/videvo_files/video/free/2014-08/small_watermarked/mollie_mills--between_14th___bedford_-_ny_subway_dancers_preview.webm',
    mediaType: 'video',
    name: 'David Kim',
    position: 'Backend Developer, Microsoft',
    rating: 4,
  },
];

export const faqs = [
  {
    answer:
      'Our matching process pairs mentors with mentees based on skills, industry, and goals, ensuring compatibility and mutual benefit. We prioritize creating meaningful connections.',
    question: 'How do I get matched with mentees on MentorsHub?',
  },
  {
    answer:
      'Yes. It comes with default styles that matches the other components aesthetic.',
    question: 'How much time commitment is required to be a mentor?',
  },
  {
    answer:
      'We prioritize mentors who have at least 3 years of industry experience, are passionate about helping others, and are committed to making a difference in the tech community.',
    question: 'What qualifications do I need to become a mentor on MentorsHub?',
  },
  {
    answer:
      'Mentorship on MentorsHub is voluntary. We believe that mentorship should be accessible to everyone, and that’s why we don’t charge any fees for our services.',
    question: 'Is mentorship on MentorsHub paid or voluntary?',
  },
  {
    answer:
      'Yes. We encourage mentors to share their knowledge and experience in multiple skills and industries.',
    question: 'Can I mentor in more than one skill or industry?',
  },
  {
    answer:
      'You can track your mentees progress and achievements on your dashboard. You can also use the dashboard to communicate with your mentees and schedule meetings.',
    question: 'How can I track my mentees progress and achievements?',
  },
];

export const filterContentExpertise: FilterContentType[] = [
  {
    // default, blue, indigo, pink, success, blue-gray
    checked: false,
    id: 'design',
    label: 'Design',
    variant: 'default',
  },
  {
    checked: false,
    id: 'engineering',
    label: 'Engineering',
    variant: 'blue',
  },
  {
    checked: false,
    id: 'marketing',
    label: 'Marketing',
    variant: 'indigo',
  },
  {
    checked: false,
    id: 'management',
    label: 'Management',
    variant: 'pink',
  },
  {
    checked: false,
    id: 'no/low-code',
    label: 'No/ Low Code',
    variant: 'success',
  },
  {
    checked: false,
    id: 'product',
    label: 'Product',
    variant: 'blue-gray',
  },
];

export const filterContentRole: FilterContentType[] = [
  { checked: false, id: 'all', label: 'All', variant: 'outline' },
  {
    checked: false,
    id: 'frontend-developer',
    label: 'Frontend Developer',
    variant: 'blue-700',
  },
  {
    checked: false,
    id: 'backend-developer',
    label: 'Backend Developer',
    variant: 'red-500',
  },
  {
    checked: false,
    id: 'fullstack-developer',
    label: 'Fullstack Developer',
    variant: 'pink-800',
  },
  {
    checked: false,
    id: 'ui-ux-designer',
    label: 'UX Designer',
    variant: 'green-700',
  },
  {
    checked: false,
    id: 'product-manager',
    label: 'Product Manager',
    variant: 'purple-800',
  },
  {
    checked: false,
    id: 'project-manager',
    label: 'Project Manager',
    variant: 'blue-900',
  },
  {
    checked: false,
    id: 'engineering-manager',
    label: 'Engineering Manager',
    variant: 'red-500',
  },
  {
    checked: false,
    id: 'software-engineer',
    label: 'Software engineer',
    variant: 'pink-800',
  },
  {
    checked: false,
    id: 'devops-engineer',
    label: 'DevOps Engineer',
    variant: 'blue-700',
  },
  {
    checked: false,
    id: 'qa-engineer',
    label: 'QA Engineer',
    variant: 'green-700',
  },
  {
    checked: false,
    id: 'technical-writer',
    label: 'Technical Writer',
    variant: 'blue-900',
  },
  {
    checked: false,
    id: 'other',
    label: 'Other',
    variant: 'outline',
  },
];

export const sortValues: FilterContentType[] = [
  {
    checked: false,
    id: 'all',
    label: 'Show All',
  },
  {
    checked: false,
    id: 'highest-reviews',
    label: 'Highest Reviews',
  },
  {
    checked: false,
    id: 'earliest-availability',
    label: 'Earliest Available',
  },
];
