import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { CDN_URL } from '@/shared/lib/constants';

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center max-lg:px-4 lg:mt-16 lg:flex-row lg:justify-between lg:pl-28">
      <div className="my-16 space-y-8 lg:m-0 lg:max-w-[560px]">
        <div className="space-y-4 lg:space-y-5">
          <h1 className="text-4xl font-semibold leading-[2.75rem] text-gray-900 lg:text-6xl lg:leading-[4.5rem]">
            Become a Mentor <br /> on{' '}
            <span className="text-primaryx">MentorsHub</span>
          </h1>
          <p className="text-lg text-gray-500 lg:text-xl">
            Inspire, Guide, and Shape the Next Generation of Tech Professionals.
          </p>
        </div>
        <Link
          href={{ pathname: '/register', query: { mentor: 'true' } }}
          className="flex w-full justify-start lg:w-fit"
        >
          <Button
            size="lg"
            hasAnimaion
            className="w-full hover:bg-primaryx-500/90 lg:w-fit"
          >
            Become a mentor
          </Button>
        </Link>
      </div>
      <div className="relative h-[15rem] w-full lg:h-[40rem] lg:w-[44rem]">
        <Image
          src={`${CDN_URL}/images/become-a-mentor-hero-img.jpg`}
          alt="become a mentor"
          fill
          className="hidden rounded-bl-[64px] rounded-tr-[64px] object-cover lg:block"
        />
        <Image
          src={`${CDN_URL}/images/become-a-mentor-hero-img-mobile.png`}
          alt="become a mentor"
          fill
          className="rounded-bl-[32px] rounded-tr-[32px] object-cover lg:hidden"
        />
      </div>
    </div>
  );
};
