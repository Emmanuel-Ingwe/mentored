import { format, parseISO } from 'date-fns';
import { urlForImage } from '@/sanity/sanity.image';
import type { PostListPayload, PostPayload } from '@/sanity/types';
import { PostCard } from '@/shared/components/card/PostCard';
import { ImgComp } from '@/shared/components/ImgComp';
import { CustomPortableText } from '../CustomPortableText';

type Props = {
  post: PostPayload;
  posts: PostListPayload[];
};

export const SinglePost = async ({ post, posts }: Props) => {
  return (
    <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-x-10 lg:gap-x-20">
      <div className="hidden space-y-8 md:col-span-4 md:block">
        {posts?.map((post) => {
          return <PostCard key={post.slug} post={post} />;
        })}
      </div>
      <div className="md:col-span-8">
        <div className="mb-4 space-y-3 lg:mb-8 lg:space-y-8">
          <p className="text-sm font-semibold text-primaryx-500">
            {post.author} •{'  '}
            <time dateTime={post?.publishedAt}>
              {format(parseISO(post?.publishedAt || '2023-10-22'), 'd MMM	yyyy')}
            </time>
          </p>
          <h1 className="text-2xl font-semibold text-gray-600 lg:text-4xl lg:font-bold ">
            {post.title}
          </h1>
          <ImgComp
            src={
              (post.mainImage &&
                urlForImage(post.mainImage).height(500).width(800)?.url()) ||
              ''
            }
            alt={post.title || ''}
            height={500}
            width={800}
            className="h-[200px] w-full object-cover lg:h-[432px]"
          />
        </div>
        <CustomPortableText value={post.body || []} />
      </div>
    </div>
  );
};
