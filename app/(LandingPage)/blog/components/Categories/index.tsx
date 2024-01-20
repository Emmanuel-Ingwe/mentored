import Link from 'next/link';
import type { CategoryPayLoad, PostListPayload } from '@/sanity/types';
import { ScrollArea, ScrollBar } from '@/shared/components/ui/scroll-area';
import { PostsList } from '../PostsList';

type Props = {
  posts: PostListPayload[];
  category: string;
  categories: CategoryPayLoad[];
};

export const Category = ({ posts, category, categories }: Props) => {
  const activeCategory = categories.find((elem) => {
    return elem.slug === category;
  });

  return (
    <div className="mb-10">
      <h3 className="mb-8 text-2xl font-semibold text-black lg:mb-3">
        Categories
      </h3>

      <div>
        <ScrollArea className="max-w-full">
          <ul className="relative mb-12 flex h-auto w-max justify-normal gap-[3.44rem] whitespace-nowrap rounded-none bg-transparent p-0 before:absolute  before:bottom-0 before:left-0 before:right-0 before:h-1 before:rounded-[0.625rem] before:bg-gray-300 lg:w-full">
            <li
              className="relative rounded-none bg-transparent px-0 pb-3 font-medium text-gray-600  before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-primaryx-500 before:first:rounded-l-[0.625rem] before:last:rounded-r-[0.625rem] data-[state=active]:bg-transparent data-[state=active]:before:h-1"
              data-state={category === 'all' ? 'active' : 'inactive'}
            >
              <Link href={'/blog'} scroll={false}>
                All
              </Link>
            </li>
            {categories.map((elem) => {
              return (
                <li
                  className="relative rounded-none bg-transparent px-0 pb-3 font-medium text-gray-600  before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-primaryx-500 before:first:rounded-l-[0.625rem] before:last:rounded-r-[0.625rem] data-[state=active]:bg-transparent data-[state=active]:before:h-1"
                  key={elem.title}
                  data-state={
                    activeCategory?.slug === elem.slug ? 'active' : 'inactive'
                  }
                >
                  <Link href={`/blog/category/${elem.slug}`} scroll={false}>
                    {elem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>

        <div>
          <h1 className="mb-8 text-2xl font-semibold text-primaryx-500">
            {activeCategory?.title || 'All'}
          </h1>
          <PostsList posts={posts} />
        </div>
      </div>
    </div>
  );
};
