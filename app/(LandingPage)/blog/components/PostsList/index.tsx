import type { PostListPayload } from '@/sanity/types';
import { PostCard } from '@/shared/components/card/PostCard';
import { EmptyContent } from '@/shared/components/EmptyContent';

type Props = {
  posts: PostListPayload[];
};

export const PostsList = ({ posts }: Props) => {
  return (
    <>
      {posts.length === 0 && (
        <EmptyContent
          title="No posts found"
          subtitle="No posts found for this category"
        />
      )}
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 &&
          posts.map((post) => {
            return <PostCard key={post.slug} post={post} />;
          })}
      </div>
    </>
  );
};
