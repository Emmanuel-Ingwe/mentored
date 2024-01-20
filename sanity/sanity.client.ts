import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/sanity.api';
import {
  categoriesQuery,
  postBySlugQuery,
  postPaths,
  postsByCategoryQuery,
  postsQuery,
  recentPostsQuery,
  categoryPostsCountQuery,
  postsCountQuery,
  paginatedPostsQuery,
  categoryPaginatedPostsQuery,
  categoriesPathsQuery,
  slugPathsQuery,
  searhPostsQuery,
} from '@/sanity/sanity.queries';

import type { CategoryPayLoad, PostListPayload, PostPayload } from './types';

export const client = createClient({ apiVersion, dataset, projectId, useCdn });

const sanityClient = () => {
  return projectId ? client : null;
};

export async function getPostBySlug({
  slug,
}: {
  slug: string;
}): Promise<PostPayload | undefined> {
  return await sanityClient()?.fetch(postBySlugQuery, { slug });
}

export async function getPosts(): Promise<PostListPayload[] | undefined> {
  return await sanityClient()?.fetch(postsQuery);
}

export async function getPostPaths(): Promise<string[] | undefined> {
  return await sanityClient()?.fetch(postPaths);
}

export async function getPostByCategory({
  category,
}: {
  category: string;
}): Promise<PostListPayload[] | undefined> {
  return await sanityClient()?.fetch(postsByCategoryQuery, { category });
}

export async function getCategories(): Promise<CategoryPayLoad[] | undefined> {
  return await sanityClient()?.fetch(categoriesQuery);
}

export async function getRecentPosts(): Promise<PostListPayload[] | undefined> {
  return await sanityClient()?.fetch(recentPostsQuery);
}

export async function getPostsCount(): Promise<number | undefined> {
  return await sanityClient()?.fetch(postsCountQuery);
}

export async function getCategoryPostsCount({
  category,
}: {
  category: string;
}): Promise<number | undefined> {
  return await sanityClient()?.fetch(categoryPostsCountQuery, { category });
}

export async function getPaginatedPosts({
  startIndex,
  endIndex,
  category,
}: {
  startIndex: number;
  endIndex: number;
  category?: string;
}): Promise<PostListPayload[] | undefined> {
  if (category) {
    return await sanityClient()?.fetch(categoryPaginatedPostsQuery, {
      category,
      endIndex,
      startIndex,
    });
  }
  return await sanityClient()?.fetch(paginatedPostsQuery, {
    endIndex,
    startIndex,
  });
}

export async function getCategoriesPaths(): Promise<string[]> {
  return await client.fetch(categoriesPathsQuery);
}

export async function getSlugPaths(): Promise<string[]> {
  return await client.fetch(slugPathsQuery);
}

export async function getSearchPosts({
  searchTerm,
}: {
  searchTerm: string;
}): Promise<PostListPayload[] | undefined> {
  return await sanityClient()?.fetch(searhPostsQuery, { searchTerm });
}
