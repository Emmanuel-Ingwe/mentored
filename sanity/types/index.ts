import type { PortableTextBlock } from '@portabletext/types';

export type CategoryPayLoad = {
  title: string;
  slug: string;
};

export type PostListPagePayload = {
  pageTitle?: string;
  subtitle?: string;
};

export type PostPayload = {
  title?: string;
  slug?: string;
  categories?: CategoryPayLoad[];
  body?: PortableTextBlock[];
  excerpt?: string;
  mainImage?: string;
  publishedAt?: string;
  author?: string;
};

export type PostListPayload = {
  mainImage?: string;
  excerpt?: string;
  slug?: string;
  categories?: CategoryPayLoad[];
  publishedAt?: string;
  title?: string;
  author?: string;
  _id?: string;
};
