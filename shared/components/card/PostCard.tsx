import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { urlForImage } from '@/sanity/sanity.image';
import type { PostListPayload } from '@/sanity/types';
import { cn } from '@/shared/lib/utils';
import { ImgComp } from '../ImgComp';
import { Badge } from '../ui/badge';

export const variants = ['success', 'blue', 'pink'];

type props = {
  className?: string;
  imageClassName?: string;
  post: PostListPayload;
  size?: 'sm' | 'large';
  excerptClassName?: string;
};

export const PostCard = ({
  className,
  post,
  imageClassName,
  size,
  excerptClassName,
}: props) => {
  return (
    <div
      className={cn(
        'flex max-h-[29.75rem] flex-col gap-8',
        className,
        size === 'sm' && 'gap-6 lg:flex-row',
      )}
    >
      <ImgComp
        src={
          (post.mainImage &&
            urlForImage(post.mainImage).height(300).width(600)?.url()) ||
          ''
        }
        alt="card image"
        className={cn(
          'h-[240px] w-full object-cover',
          imageClassName,
          size === 'sm' && 'h-full lg:w-2/4',
        )}
      />

      <div className={cn('w-full', size === 'sm' && 'mt-0 lg:w-2/4')}>
        <p
          className={cn(
            'text-sm font-semibold leading-[32px] text-[#6938EF]',
            size === 'sm' && '',
          )}
        >
          {post.author} •{'  '}
          <time dateTime={post?.publishedAt}>
            {format(parseISO(post?.publishedAt || '2023-10-22'), 'd MMM	yyyy')}
          </time>
        </p>

        <Link href={`/blog/${post.slug}`} className="group mt-3">
          <div className="flex items-center justify-between gap-4">
            <h5
              className={cn(
                'text-2xl font-semibold tracking-tight text-gray-900 group-hover:underline',
                size === 'sm' && 'lg:text-lg',
              )}
            >
              {post.title}
            </h5>

            <RiArrowRightUpLine
              className={cn(
                'h-[24px] w-[24px] shrink-0 fill-black',
                size === 'sm' && 'hidden',
              )}
            />
          </div>
        </Link>
        <p
          className={cn(
            'text-gry-500 mt-3 line-clamp-2 text-base',
            size === 'sm' && 'mt-2',
            excerptClassName,
          )}
        >
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-x-3">
          {post.categories?.map((cat, i) => {
            return (
              <Link href={`/blog/category/${cat.slug}`} key={cat.slug}>
                <Badge
                  className="whitespace-nowrap text-sm"
                  variant={variants[i]}
                >
                  {cat.title}
                </Badge>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
