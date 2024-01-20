import type { StaticImageData } from 'next/image';

export enum UserType {
  MENTEE = 'MENTEE',
  MENTOR = 'MENTOR',
}

export type VisitorType = 'MENTEE' | 'MENTOR';

export type FilterLabel = {
  label: string;
  variant:
    | 'outline'
    | 'blue-900'
    | 'pink-800'
    | 'red-500'
    | 'green-700'
    | 'purple-800'
    | 'blue-700'
    | 'default';
};

export type ReviewType = {
  id: number;
  name: string;
  position: string;
  rating: number;
  description: string;
  media: StaticImageData | string;
  mediaType: 'image' | 'video';
};

export type FilterContentType = {
  id: string;
  label: string;
  variant?: string;
  checked: boolean;
  jobTitle?: string;
};

export type MentorDataType = {
  id: number;
  src: string;
  firstname: string;
  lastname: string;
  name: string;
  company: string;
  reviews: number;
  sessions: number;
  experience: number;
  slug: string;
  role: string;
  availability: string;
  expertise: string;
  about?: string;
  profile_summary?: string;
  skills?: string[];
  location?: string;
};
