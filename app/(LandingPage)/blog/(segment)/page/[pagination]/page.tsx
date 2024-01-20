import {
  getCategories,
  getPaginatedPosts,
  getPostsCount,
  getRecentPosts,
} from '@/sanity/sanity.client';
import { Category } from '../../../components/Categories';
import { Pagination } from '../../../components/Pagination';
import { RecentPost } from '../../../components/RecentPost';

export const revalidate = 30; // 30 secs

const pageSize = parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE || '2');

type PageProps = {
  params: { pagination: string };
};

export default async function Page({ params }: PageProps) {
  const { pagination } = params;
  const pageNumber = parseInt(pagination);
  const totalCountData = (await getPostsCount()) || 0;
  const recentPostsData = (await getRecentPosts()) || [];
  const categoriesData = (await getCategories()) || [];

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPostsData =
    (await getPaginatedPosts({ endIndex, startIndex })) || [];

  const [totalCount, recentPosts, paginatedPosts, categories] =
    await Promise.all([
      totalCountData,
      recentPostsData,
      paginatedPostsData,
      categoriesData,
    ]);

  return (
    <div>
      <Category
        posts={paginatedPosts}
        category={'all'}
        categories={categories}
      />
      <RecentPost posts={recentPosts} />
      <Pagination totalCount={totalCount} currentPage={pageNumber} />
    </div>
  );
}
