import type { Metadata } from 'next';
import { getPostBySlug, getPosts, getSlugPaths } from '@/sanity/sanity.client';
import { urlForImage } from '@/sanity/sanity.image';
import { SinglePost } from '../components/SinglePost';

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug({ slug });

  const excerpt = post?.excerpt?.slice(0, 160) || '';

  if (!post) {
    return {};
  }

  return {
    authors: {
      name: post.author,
    },
    description: excerpt,
    openGraph: {
      description: excerpt,
      images: [
        {
          alt: post.title,
          height: 630,
          url: post.mainImage ? urlForImage(post.mainImage).url() : '',
          width: 1200,
        },
      ],
      title: post.title,
      type: 'article',
      url: post.mainImage ? urlForImage(post.mainImage).url() : '',
    },
    title: post.title,
    twitter: {
      card: 'summary_large_image',
      description: excerpt,
      images: [post.mainImage ? urlForImage(post.mainImage).url() : ''],
      title: post.title,
    },
  };
}

export async function generateStaticParams() {
  const paths = await getSlugPaths();
  return paths;
}

export const revalidate = 30; // 30 secs

export default async function Blog({ params }: PageProps) {
  const { slug } = params;
  const posts = await getPosts();
  const post = await getPostBySlug({ slug });

  return <SinglePost post={post || {}} posts={posts || []} />;
}
