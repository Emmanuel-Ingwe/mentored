import { Category } from '@/app/(LandingPage)/blog/components/Categories';
import { Pagination } from '@/app/(LandingPage)/blog/components/Pagination';
import { RecentPost } from '@/app/(LandingPage)/blog/components/RecentPost';
import {
  getCategories,
  getCategoryPostsCount,
  getPaginatedPosts,
  getRecentPosts,
} from '@/sanity/sanity.client';

export const revalidate = 30;

type PageProps = {
  params: { slug: string; pagination: string };
};

const pageSize = parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE || '2');

export default async function Page({ params }: PageProps) {
  const { slug: category, pagination } = params;

  const pageNumber = parseInt(pagination);
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
      <Pagination
        category={category}
        totalCount={totalCount}
        currentPage={pageNumber}
      />
    </div>
  );
}
