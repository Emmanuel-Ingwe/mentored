import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _type,
    excerpt,
    mainImage,
    publishedAt,
    "slug": slug.current,
    "categories": categories[]->{title, "slug": slug.current},
    title,
    "author": author->name,
    _id,
  }
`;

export const recentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...8] {
    _type,
    excerpt,
    mainImage,
    publishedAt,
    "slug": slug.current,
    "categories": categories[]->{title, "slug": slug.current},
    title,
    "author": author->name,
    _id,
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
    _type,
    excerpt,
    mainImage,
    publishedAt,
    "slug": slug.current,
    "categories": categories[]->{title, "slug": slug.current},
    title,
    "author": author->name,
    _id,
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current,
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    excerpt,
    mainImage,
    publishedAt,
    "slug": slug.current,
    "categories": categories[]->title,
    title,
    "author": author->name,
    body,
  }
`;

export const postPaths = groq`
  *[_type == "post" && slug.current != null].slug.current
`;

export const postsCountQuery = groq`
  count(*[_type == "post"])
`;

export const categoryPostsCountQuery = groq`
  count(*[_type == "post" && $category in categories[]->slug.current])
`;

export const paginatedPostsQuery = groq`
*[_type == "post"] | order(publishedAt desc)[$startIndex...$endIndex] {
  _type,
  excerpt,
  mainImage,
  publishedAt,
  "slug": slug.current,
  "categories": categories[]->{title, "slug": slug.current},
  title,
  "author": author->name,
  _id,
}
`;

export const categoryPaginatedPostsQuery = groq`
  *[_type == "post" && $category in categories[]->slug.current | order(publishedAt desc)] [$startIndex...$endIndex] {
    _type,
    excerpt,
    mainImage,
    publishedAt,
    "slug": slug.current,
    "categories": categories[]->{title, "slug": slug.current},
    title,
    "author": author->name,
    _id,
  }
`;

export const slugPathsQuery = groq`
  *[_type == "post" && slug.current != null].slug.current
`;

export const categoriesPathsQuery = groq`
  *[_type == "category" && slug.current != null].slug.current
`;

export const searhPostsQuery = groq`
*[_type == "post" && title match $searchTerm  + "*" || excerpt match $searchTerm + "*"] [0...10] {
  "slug": slug.current,
  "categories": categories[]->title,
  title,
  excerpt,
}
`;
