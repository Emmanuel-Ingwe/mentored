import {
  getCategories,
  getCategoryPostsCount,
  getPaginatedPosts,
  getRecentPosts,
  getCategoriesPaths,
} from '@/sanity/sanity.client';
import { Category } from '../../../components/Categories';
import { Pagination } from '../../../components/Pagination';
import { RecentPost } from '../../../components/RecentPost';

export async function generateStaticParams() {
  const paths = (await getCategoriesPaths()) || [];

  return paths;
}

export const revalidate = 30;

type PageProps = {
  params: { slug: string };
};

const pageSize = parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE || '2');

export default async function CategoryPage({ params }: PageProps) {
  const { slug: category } = params;

  const pageNumber = 1;
  const totalCountData = (await getCategoryPostsCount({ category })) || 0;
  const categoriesData = (await getCategories()) || [];
  const recentPostsData = (await getRecentPosts()) || [];

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPostsData =
    (await getPaginatedPosts({ category, endIndex, startIndex })) || [];

  const [totalCount, categories, recentPosts, paginatedPosts] =
    await Promise.all([
      totalCountData,
      categoriesData,
      recentPostsData,
      paginatedPostsData,
    ]);

  return (
    <div>
      <Category
        posts={paginatedPosts}
        category={category}
        categories={categories}
      />
      <RecentPost posts={recentPosts} />
      <Pagination category={category} totalCount={totalCount} />
    </div>
  );
}
