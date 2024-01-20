import type { PostListPayload } from '@/sanity/types';
import { PostCard } from '@/shared/components/card/PostCard';

type Props = {
  posts: PostListPayload[];
};

export const RecentPost = ({ posts }: Props) => {
  if (posts.length === 0) return null;
  return (
    <div className="">
      <h1 className="text-xl font-semibold text-primaryx-500 lg:text-2xl">
        Recent Blog Posts
      </h1>
      <div className="mt-8 flex h-full flex-col items-stretch gap-8 lg:flex-row">
        <div className="w-full lg:w-2/4">
          <PostCard post={posts[0]} imageClassName="h-[14.25rem] w-full" />
        </div>

        <div className="h-full w-full space-y-8 lg:w-2/4">
          <PostCard size="sm" post={posts[1]} />
          <PostCard size="sm" post={posts[2]} />
        </div>
      </div>

      <PostCard
        post={posts[3]}
        className="my-8 gap-8 lg:mb-24 lg:mt-16 lg:flex-row"
        excerptClassName="lg:line-clamp-5"
        imageClassName="h-full"
      />
    </div>
  );
};
