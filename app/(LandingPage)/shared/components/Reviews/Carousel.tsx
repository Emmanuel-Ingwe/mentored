import type { FC } from 'react';
import Image from 'next/image';
import { Dot } from '@/shared/components/Icons/Dot';
import { Star } from '@/shared/components/Icons/Star';
import { cn } from '@/shared/lib/utils';

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  description: string;
  img: string;
};
type Props = {
  testimonial: Testimonial;
  scrollTo: (index: number) => void;
  selectedIndex: number;
  ref: unknown;
};
const Carousel: FC<Props> = ({ testimonial, scrollTo, selectedIndex }) => {
  return (
    <div className='slides flex-[0_0_auto]" min-w-0 max-w-full'>
      <div>
        <div className="space flex flex-col">
          <div className="flex items-center gap-1">
            {new Array(testimonial.rating).fill(0).map((_, index) => {
              return <Star key={index} />;
            })}
          </div>
          <h1 className="mt-6 text-2xl font-medium leading-8 lg:text-4xl">
            {testimonial.description}
          </h1>
          <p className="mt-8 pl-7 text-lg font-semibold text-white before:absolute before:left-0 before:top-2/4 before:h-[2px] before:w-5 before:-translate-y-2/4 before:bg-white">
            {testimonial.name}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Dot
              key={testimonial.name}
              onClick={() => {
                return scrollTo(testimonial.id);
              }}
              className={cn(
                'fill-grizzly-700',
                testimonial.id === selectedIndex + 1 && 'fill-white',
              )}
            />
          </div>
        </div>
        <div className="right-10 top-0 overflow-hidden max-lg:rounded-b-3xl lg:w-[35%] lg:rounded-r-3xl">
          <div className="flex h-full w-full">
            <div className="min-w-0 max-w-full flex-[0_0_auto]">
              <Image
                src={testimonial.img}
                alt="testimonial img"
                className="h-[280px] object-cover  lg:h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
